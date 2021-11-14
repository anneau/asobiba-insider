import { doc, onSnapshot, serverTimestamp, setDoc } from '@firebase/firestore';
import { useEffect, useState, useCallback } from 'react';
import { db } from '../libs/firebase';
import { useAuth } from './use-auth';
import { Game } from '../models/game';

export const useGame = (): {
  game: Game | undefined;
  setTheme: (theme: string) => Promise<void>;
  setStartAt: () => Promise<void>;
  setAnswer: (answer: string) => Promise<void>;
  isMaster: boolean;
  hasTheme: boolean;
  isInsider: boolean;
  hasStartAt: boolean;
  hasAnswer: boolean;
  loading: boolean;
} => {
  const { user: auth } = useAuth();
  const [game, setGame] = useState<Game | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!auth) return;
    setLoading(true);
    const ref = doc(db, 'games', 'hmuzwvtrQ97XMQzcoGLk');
    const unsub = onSnapshot(ref, (doc) => {
      const data = {
        ...doc.data(),
        start_at: doc.data()?.start_at?.toDate(),
      } as Game;
      setGame(data);
      setLoading(false);
    });
    return () => {
      unsub();
    };
  }, [auth]);

  const isMaster = auth?.uid === game?.master;
  const hasTheme = !!game?.theme;
  const isInsider = auth?.uid === game?.insider;
  const hasStartAt = !!game?.start_at;
  const hasAnswer = !!game?.answer;

  const setTheme = useCallback(
    async (theme: string): Promise<void> => {
      await setDoc(doc(db, 'games', 'hmuzwvtrQ97XMQzcoGLk'), {
        ...game,
        theme,
      });
    },
    [game]
  );

  const setStartAt = useCallback(async (): Promise<void> => {
    await setDoc(doc(db, 'games', 'hmuzwvtrQ97XMQzcoGLk'), {
      ...game,
      start_at: serverTimestamp(),
    });
  }, [game]);

  const setAnswer = useCallback(
    async (answer: string): Promise<void> => {
      await setDoc(doc(db, 'games', 'hmuzwvtrQ97XMQzcoGLk'), {
        ...game,
        answer,
      });
    },
    [game]
  );

  return {
    game,
    setTheme,
    setStartAt,
    setAnswer,
    isMaster,
    hasTheme,
    isInsider,
    hasStartAt,
    hasAnswer,
    loading,
  };
};
