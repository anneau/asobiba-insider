import React, { VFC, useState } from 'react';
import Lottie from 'react-lottie';
import {
  Button,
  FormControl,
  TextField,
  Tabs,
  Tab,
  Box,
  FormLabel,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useUserSetter } from '../../hooks/use-user-setter';

type FormType = {
  name: string;
  // avatar: string;
};

const initState = {
  name: '',
  // avatar: '',
};

const avatarList = [
  {
    name: 'avocado',
    ja: 'アボカド',
  },
  {
    name: 'broccoli',
    ja: 'ブロッコリー',
  },
  {
    name: 'coffee',
    ja: 'コーヒー',
  },
  {
    name: 'donut',
    ja: 'ドーナツ',
  },
  {
    name: 'mushroom',
    ja: 'マッシュルーム',
  },
  {
    name: 'orange',
    ja: 'オレンジ',
  },
];

export const Form: VFC = () => {
  const { replace } = useRouter();
  const [tabValue, setTabValue] = useState(0);
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
        {/* <Box sx={{ maxWidth: 250, mb: 2 }}>
          <FormLabel>アバター: {avatarList[tabValue].ja}</FormLabel>
          <Tabs
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            value={tabValue}
            onChange={(_: React.SyntheticEvent, newValue: number) => {
              setTabValue(newValue);
              setState({ ...state, avatar: avatarList[newValue].name });
            }}
          >
            {avatarList.map((item) => (
              <Tab
                key={item.name}
                icon={
                  <Lottie
                    options={{
                      animationData: require(`../../public/lottie/${item.name}.json`),
                    }}
                    height={100}
                    width={100}
                  />
                }
              />
            ))}
          </Tabs>
        </Box> */}
        <Button
          variant="outlined"
          onClick={() => {
            setUser(state.name);
            replace('/game');
          }}
        >
          送信
        </Button>
      </FormControl>
    </>
  );
};
