import { doc, getDoc } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../libs/firebase';
import { useAuth } from './use-auth';

type User = {
  name: string;
  avatar: string;
};

export const useUser = (): { user: User | undefined; completed: boolean } => {
  const { user: auth } = useAuth();
  const [user, setUser] = useState<User | undefined>(undefined);
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    let mounted = true;
    if (!auth) return;
    (async () => {
      const ref = doc(db, 'users', auth.uid);
      const snap = await getDoc(ref);
      if (mounted) {
        if (snap.exists()) {
          const data = snap.data() as User;
          setUser(data);
        }
        setCompleted(true);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [auth]);

  return { user, completed };
};
