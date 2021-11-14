import { collection, getDocs } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../libs/firebase';
import { useAuth } from './use-auth';
import { User } from '../models/user';

export const useUsers = (): { users: User[]; completed: boolean } => {
  const { user: auth } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    let mounted = true;
    if (!auth) return;
    (async () => {
      const snap = await getDocs(collection(db, 'users'));
      const tempUsers: User[] = [];
      if (mounted) {
        snap.forEach((doc) => {
          tempUsers.push(doc.data() as User);
        });
        setUsers(tempUsers);
        setCompleted(true);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [auth, setUsers]);

  return { users, completed };
};
