import React, { VFC } from 'react';
import { Box, Button } from '@mui/material';
import { useTimer } from '../../hooks/use-timer';
import { useGame } from '../../hooks/use-game';
import { Animation } from '../common/Animation';

export const Timer: VFC = () => {
  const { loading, hasStartAt, setStartAt, isMaster } = useGame();
  const { current, end, diff } = useTimer();

  if (loading) return <Animation name="load" />;

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
