import React, { VFC, useState } from 'react';
import {
  Button,
  FormControl,
  TextField,
  Tabs,
  Tab,
  Box,
  FormLabel,
} from '@mui/material';
import { Animation } from '../common/Animation';
import { useRouter } from 'next/router';
import { useUserSetter } from '../../hooks/use-user-setter';
import { avatars } from '../../libs/avatars';

type FormType = {
  name: string;
  avatar: string;
};

const initState = {
  name: '',
  avatar: '',
};

export const Form: VFC = () => {
  const { replace } = useRouter();
  const [state, setState] = useState<FormType>(initState);
  const { setUser } = useUserSetter();
  return (
    <>
      <FormControl>
        <Box sx={{ maxWidth: 250, mb: 2 }}>
          <TextField
            label="ユーザー名"
            variant="outlined"
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </Box>
        <Box sx={{ maxWidth: 250, mb: 2 }}>
          <FormLabel>
            アバター: {avatars.find((item) => item.name === state.avatar)?.ja}
          </FormLabel>
          <Box sx={{ maxWidth: 250, mb: 2 }}>
            {avatars.map((avatar, index) => (
              <Button
                key={index}
                onClick={() => setState({ ...state, avatar: avatar.name })}
              >
                <Animation name={avatar.name} />
              </Button>
            ))}
          </Box>
        </Box>
        <Button
          variant="outlined"
          disabled={!state.avatar || !state.name}
          onClick={() => {
            setUser(state.name, state.avatar);
            replace('/entrance');
          }}
        >
          送信
        </Button>
      </FormControl>
    </>
  );
};
