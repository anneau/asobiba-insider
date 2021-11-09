import React, { VFC, useState } from 'react';
import { FormControl, Button, TextField, Box } from '@mui/material';
import { useGame } from '../../hooks/use-game';

type FormType = {
  theme: string;
};

export const Master: VFC = () => {
  const [state, setState] = useState<FormType>({ theme: '' });
  const { setTheme } = useGame();
  return (
    <>
      <Box sx={{ typography: 'subtitle2', mb: 2 }}>あなたがマスターです</Box>
      <FormControl>
        <Box sx={{ maxWidth: 250, mb: 2 }}>
          <TextField
            label="お題"
            variant="outlined"
            onChange={(e) => setState({ theme: e.target.value })}
          />
        </Box>
        <Button variant="outlined" onClick={() => setTheme(state.theme)}>
          送信
        </Button>
      </FormControl>
    </>
  );
};
