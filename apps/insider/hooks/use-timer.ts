import { useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useGame } from './use-game';

type Diff = {
  min: number;
  sec: number;
};

export const useTimer = (): {
  start: Dayjs;
  end: Dayjs;
  current: Dayjs;
  diff: Diff;
} => {
  const { game } = useGame();
  const [diff, setDiff] = useState<Diff>({ min: 0, sec: 0 });

  const start = dayjs(game?.start_at ?? 0);
  const end = start.add(5, 'm');
  const current = dayjs();

  useEffect(() => {
    let mounted = true;
    const id = setInterval(() => {
      const diffMin = end.diff(current, 'm');
      const diffSec = end.diff(current, 's') - diffMin * 60;
      if (mounted) setDiff({ min: diffMin, sec: diffSec });
    }, 1000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, [end, current]);

  return { start, end, current, diff };
};
