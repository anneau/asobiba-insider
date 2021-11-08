import { doc, getDoc } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../libs/firebase';
import { useAuth } from './use-auth';

export const useName = (): { name: string | undefined; first: boolean } => {
  const { user } = useAuth();
  const [name, setName] = useState<string | undefined>(undefined);
  const [first, setFirst] = useState(false);
  useEffect(() => {
    if (!user) return;
    (async () => {
      console.log(db, user.uid);
      const ref = doc(db, 'users', user.uid);
      const snap = await getDoc(ref);
      if (snap) {
        console.log(snap);
        setName('コボ');
      } else {
        setFirst(true);
      }
    })();
  }, [user]);

  return { name, first };
};
