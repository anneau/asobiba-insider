import React, { VFC, useState } from 'react';
import { useGame } from '../../hooks/use-game';
import { Box, Button, TextField } from '@mui/material';

export const AnswerForm: VFC = () => {
  const { setAnswer } = useGame();
  const [state, setState] = useState('');

  return (
    <>
      <Box sx={{ maxWidth: 250, mb: 2 }}>
        <TextField
          label="答え（全てひらがな）"
          variant="outlined"
          onChange={(e) => setState(e.target.value)}
        />
      </Box>
      <Box sx={{ typography: 'subtitle2', mb: 2 }}>
        <Button variant="outlined" onClick={() => setAnswer(state)}>
          送信
        </Button>
      </Box>
    </>
  );
};
