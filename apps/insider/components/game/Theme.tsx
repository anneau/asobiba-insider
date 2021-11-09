import React, { VFC } from 'react';
import { useGame } from '../../hooks/use-game';
import { Box } from '@mui/material';

export const Theme: VFC = () => {
  const { game } = useGame();

  return (
    <>
      <Box sx={{ typography: 'subtitle2', mb: 2 }}>テーマ: {game?.theme}</Box>
    </>
  );
};
