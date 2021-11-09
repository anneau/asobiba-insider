import { Grid } from '@mui/material';
import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { Master } from '../components/game/Master';
import { Theme } from '../components/game/Theme';
import { useGame } from '../hooks/use-game';
import { useAuth } from '../hooks/use-auth';

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Game: VFC = () => {
  const { user } = useAuth();
  const { game } = useGame();
  const isMaster = user?.uid === game?.master;
  const hasTheme = !!game?.theme;
  if (!game) return <p>Loading...</p>;
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: '80%', textAlign: 'center' }}
      >
        <Grid item xs={8}>
          {isMaster && !hasTheme ? <Master /> : null}
          {isMaster && hasTheme ? <Theme /> : null}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Game;
