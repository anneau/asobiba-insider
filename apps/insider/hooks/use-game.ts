import { doc, onSnapshot, setDoc } from '@firebase/firestore';
import { useEffect, useState, useCallback } from 'react';
import { db } from '../libs/firebase';
import { useAuth } from './use-auth';

type Game = {
  master: string;
  theme: string;
  insider: string;
  start_at: string;
};

export const useGame = (): {
  game: Game | undefined;
  setTheme: (theme: string) => Promise<void>;
  isMaster: boolean;
  hasTheme: boolean;
  isInsider: boolean;
  hasStartAt: boolean;
} => {
  const { user: auth } = useAuth();
  const [game, setGame] = useState<Game | undefined>(undefined);
  useEffect(() => {
    if (!auth) return;
    const ref = doc(db, 'games', 'hmuzwvtrQ97XMQzcoGLk');
    const unsub = onSnapshot(ref, (doc) => {
      const data = doc.data() as Game;
      console.log(data);
      setGame(data);
    });
    return () => {
      unsub();
    };
  }, [auth]);

  const isMaster = auth?.uid === game?.master;
  const hasTheme = !!game?.theme;
  const isInsider = auth?.uid === game?.insider;
  const hasStartAt = !!game?.start_at;

  const setTheme = useCallback(
    async (theme: string): Promise<void> => {
      await setDoc(doc(db, 'games', 'hmuzwvtrQ97XMQzcoGLk'), {
        ...game,
        theme,
      });
    },
    [game]
  );

  return { game, setTheme, isMaster, hasTheme, isInsider, hasStartAt };
};
