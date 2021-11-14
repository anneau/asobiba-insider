import {
  Grid,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { useGame } from '../hooks/use-game';
import { useUsers } from '../hooks/use-users';
import { Animation } from '../components/common/Animation';
import { useVotes } from '../hooks/use-votes';

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const ResultPage: VFC = () => {
  const { game } = useGame();
  const { users } = useUsers();
  const { votes } = useVotes();
  const insider = users?.find((item) => item.uid === game?.insider);

  if (!insider) return <Animation name="load" />;
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: '80%', textAlign: 'center' }}
      >
        <Grid item xs={8}>
          <Box sx={{ typography: 'subtitle2', mb: 2 }}>
            インサイダーは「{insider.name}」でした
          </Box>

          <Box sx={{ typography: 'subtitle2', mb: 2 }}>
            <Animation name={insider.avatar} />
          </Box>

          <Box sx={{ typography: 'subtitle2', mb: 2 }}>
            <Table>
              <TableHead>投票結果</TableHead>
              <TableBody>
                {votes.map((vote, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {users.find((user) => user.uid === vote.iam).name}
                    </TableCell>
                    <TableCell>→</TableCell>
                    <TableCell>
                      {users.find((user) => user.uid === vote.vote).name}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResultPage;
