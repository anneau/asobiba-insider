import { doc, onSnapshot, setDoc } from '@firebase/firestore';
import { useEffect, useState, useCallback } from 'react';
import { db } from '../libs/firebase';
import { useAuth } from './use-auth';

type Game = {
  master: string;
  theme: string;
};

export const useGame = (): {
  game: Game | undefined;
  setTheme: (theme: string) => Promise<void>;
} => {
  const { user: auth } = useAuth();
  const [game, setGame] = useState<Game | undefined>(undefined);
  useEffect(() => {
    if (!auth) return;
    const ref = doc(db, 'games', 'hmuzwvtrQ97XMQzcoGLk');
    const unsub = onSnapshot(ref, (doc) => {
      const data = doc.data() as Game;
      setGame(data);
    });
    return () => {
      unsub();
    };
  }, [auth]);

  const setTheme = useCallback(
    async (theme: string): Promise<void> => {
      await setDoc(doc(db, 'games', 'hmuzwvtrQ97XMQzcoGLk'), {
        ...game,
        theme,
      });
    },
    [game]
  );

  return { game, setTheme };
};
