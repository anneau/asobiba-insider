import { useEffect, useState } from 'react';
import { db } from '../libs/firebase';
import { useAuth } from './use-auth';
import { Vote } from '../models/vote';
import { doc, onSnapshot } from '@firebase/firestore';

export const useVotes = (): { votes: Vote[]; loading: boolean } => {
  const { user: auth } = useAuth();
  const [votes, setVotes] = useState<Vote[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!auth) return;
    setLoading(true);
    const ref = doc(db, 'votes', 'hmuzwvtrQ97XMQzcoGLk');
    const unsub = onSnapshot(ref, (doc) => {
      const data = doc.data();
      setVotes(
        Object.keys(data).map((key) => ({ iam: key, vote: data[key] } as Vote))
      );
      setLoading(false);
    });
    return () => {
      unsub();
    };
  }, [auth]);

  return { votes, loading };
};
