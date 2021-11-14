import React, { VFC } from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { Entrance } from '../components/entrance/Entrance';

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const EntrancePage: VFC = () => {
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: '80%', textAlign: 'center' }}
      >
        <Grid item xs={8}>
          <Entrance />
        </Grid>
      </Grid>
    </Container>
  );
};

export default EntrancePage;
