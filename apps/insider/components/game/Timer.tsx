import React, { VFC, useState, useEffect } from 'react';
import { useGame } from '../../hooks/use-game';
import { Box } from '@mui/material';
import dayjs from 'dayjs';

export const Timer: VFC = () => {
  const { game } = useGame();
  const [diff, setDiff] = useState({ min: 0, sec: 0 });

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

  return (
    <>
      <Box sx={{ typography: 'subtitle2', mb: 2 }}>
        残り: {diff.min}分{diff.sec}秒
      </Box>
    </>
  );
};
