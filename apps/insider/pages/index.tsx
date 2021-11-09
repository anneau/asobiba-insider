import { Grid } from '@mui/material';
import React, { VFC } from 'react';
import { Main } from '../components/index/Main';
import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Index: VFC = () => {
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: '80%', textAlign: 'center' }}
      >
        <Grid item xs={8}>
          <Main />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
