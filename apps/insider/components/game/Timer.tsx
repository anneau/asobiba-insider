import React, { VFC, useState, useEffect } from 'react';
import { useGame } from '../../hooks/use-game';
import { Box, Button } from '@mui/material';
import dayjs from 'dayjs';
import { Animation } from '../common/Animation';

export const Timer: VFC = () => {
  const { game, loading, hasStartAt, setStartAt, isMaster } = useGame();
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

  if (loading) return <Animation name="load" />;

  if (!hasStartAt && isMaster)
    return (
      <Box sx={{ typography: 'subtitle2', mb: 2 }}>
        <Button variant="outlined" onClick={setStartAt}>
          ゲームスタート
        </Button>
      </Box>
    );

  if (end.isBefore(current))
    return (
      <Box sx={{ typography: 'subtitle2', mb: 2 }}>
        <Animation name="notification" />
      </Box>
    );

  return (
    <Box sx={{ typography: 'subtitle2', mb: 2 }}>
      残り: {diff.min}分{diff.sec}秒
    </Box>
  );
};
