import { Grid } from '@mui/material';
import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { Game } from '../components/game/Game';

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const GamePage: VFC = () => {
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: '80%', textAlign: 'center' }}
      >
        <Grid item xs={8}>
          <Game />
        </Grid>
      </Grid>
    </Container>
  );
};

export default GamePage;
