import React, { VFC, useState } from 'react';
import { Button, FormControl, Tabs, Tab, Box, FormLabel } from '@mui/material';
import { Animation } from '../common/Animation';
import { useUsers } from '../../hooks/use-users';
import { User } from '../../models/user';

export const Vote: VFC = () => {
  const { users } = useUsers();
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [tabValue, setTabValue] = useState(0);
  return (
    <>
      <FormControl>
        <Box sx={{ maxWidth: 250, mb: 2 }}>
          <FormLabel>インサイダーは「{selectedUser?.name}」</FormLabel>
          <Tabs
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            value={tabValue}
            onChange={(_: React.SyntheticEvent, newValue: number) => {
              setTabValue(newValue);
              setSelectedUser(users[newValue]);
            }}
          >
            {users.map((item) => (
              <Tab key={item.uid} icon={<Animation name={item.avatar} />} />
            ))}
          </Tabs>
        </Box>
        <Button variant="outlined">送信</Button>
      </FormControl>
    </>
  );
};
