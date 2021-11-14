import { Grid } from '@mui/material';
import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { Master } from '../components/game/Master';
import { Theme } from '../components/game/Theme';
import { Timer } from '../components/game/Timer';
import { useGame } from '../hooks/use-game';

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const role = (isMaster: boolean, isInsider: boolean): string => {
  if (isMaster) return 'マスター';
  if (isInsider) return 'インサイダー';
  return '庶民';
};

export const Game: VFC = () => {
  const { game, isMaster, isInsider, hasTheme, hasStartAt } = useGame();
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
          {isMaster && !hasTheme ? <Master /> : <></>}
          {hasTheme ? (
            <p>あなたの役職は{role(isMaster, isInsider)}です</p>
          ) : null}
          {(isMaster || isInsider) && hasTheme ? <Theme /> : <></>}
          {hasStartAt ? <Timer /> : <></>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Game;
