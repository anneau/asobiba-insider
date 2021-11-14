import React, { VFC } from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { Vote } from '../components/vote/Vote';

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const VotePage: VFC = () => {
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: '80%', textAlign: 'center' }}
      >
        <Grid item xs={8}>
          <Vote />
        </Grid>
      </Grid>
    </Container>
  );
};

export default VotePage;
