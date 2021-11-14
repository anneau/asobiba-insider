import React, { VFC, useState, useEffect } from 'react';
import { Button, FormControl, Tabs, Tab, Box, FormLabel } from '@mui/material';
import { Animation } from '../common/Animation';
import { useUsers } from '../../hooks/use-users';
import { useVoteSetter } from '../../hooks/use-vote-setter';
import { User } from '../../models/user';
import { useGame } from '../../hooks/use-game';
import { useUser } from '../../hooks/use-user';
import { useVotes } from '../../hooks/use-votes';
import { useRouter } from 'next/router';

const useResultPage = () => {
  const { users } = useUsers();
  const { votes } = useVotes();
  const { push } = useRouter();

  if (!!users && !!votes && users.length === votes.length) push('/result');
};

export const Vote: VFC = () => {
  const { users } = useUsers();
  const { user: myself } = useUser();
  const { game } = useGame();
  const { setVote } = useVoteSetter();
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const selectableUsers = users.filter(
    (user) => user.uid !== game?.master || user.uid !== myself.uid
  );

  return (
    <>
      <FormControl>
        <Box sx={{ maxWidth: 250, mb: 2 }}>
          <FormLabel>インサイダーは「{selectedUser?.name}」</FormLabel>
          {selectableUsers.map((item) => (
            <Button key={item.uid} onClick={() => setSelectedUser(item)}>
              <Animation name={item.avatar} />
            </Button>
          ))}
        </Box>
        <Button
          variant="outlined"
          onClick={() => setVote(selectedUser.uid)}
          disabled={!selectedUser}
        >
          送信
        </Button>
      </FormControl>
    </>
  );
};