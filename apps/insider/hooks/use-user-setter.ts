import { useCallback } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../libs/firebase';
import { useAuth } from './use-auth';

export const useUserSetter = (): {
  setUser: (name: string, avatar: string) => Promise<void>;
} => {
  const { user } = useAuth();
  const setUser = useCallback(
    async (name: string, avatar: string): Promise<void> => {
      await setDoc(doc(db, 'users', user.uid), {
        name,
        avatar,
      });
    },
    [user]
  );
  return { setUser };
};
