import { useCallback } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../libs/firebase';
import { useAuth } from './use-auth';

export const useVoteSetter = (): {
  setVote: (uid: string) => Promise<void>;
} => {
  const { user } = useAuth();
  const setVote = useCallback(
    async (uid: string): Promise<void> => {
      await setDoc(
        doc(db, 'votes', 'hmuzwvtrQ97XMQzcoGLk'),
        {
          [user.uid]: uid,
        },
        { merge: true }
      );
    },
    [user]
  );
  return { setVote };
};
