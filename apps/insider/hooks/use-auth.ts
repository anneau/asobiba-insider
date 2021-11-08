import { signInAnonymously, User } from '@firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../libs/firebase';

export const useAuth = (): {
  user: User | undefined;
  loading: boolean;
} => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
      setLoading(false);
    }
    let mounted = true;
    (async () => {
      setLoading(true);
      const user = await signInAnonymously(auth);
      if (mounted) {
        setUser(user.user);
        setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return { user, loading };
};
