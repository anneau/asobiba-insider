import React, { VFC } from 'react';
import { Button, Box } from '@mui/material';
import { useGame } from '../../hooks/use-game';

export const StartButton: VFC = () => {
  const { setStartAt } = useGame();
  return (
    <Box sx={{ typography: 'subtitle2', mb: 2 }}>
      <Button variant="outlined" onClick={setStartAt}>
        ゲームスタート
      </Button>
    </Box>
  );
};
