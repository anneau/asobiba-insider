import React, { VFC } from 'react';
import { useGame } from '../../hooks/use-game';
import { useRouter } from 'next/router';
import { Animation } from '../common/Animation';
import { ThemeForm } from './ThemeForm';
import { StartButton } from './StartForm';

const useGamePage = () => {
  const { game, hasTheme, hasStartAt } = useGame();
  const { replace } = useRouter();

  if (!!game?.master && hasTheme && hasStartAt) {
    replace('/game');
  }
};

export const Entrance: VFC = () => {
  const { game, hasTheme, isMaster, hasStartAt } = useGame();
  useGamePage();

  if (!game) return <Animation name="load" />;

  if (!isMaster) return <Animation name="load" />;

  if (!hasTheme) {
    return <ThemeForm />;
  }

  if (!hasStartAt) {
    return <StartButton />;
  }

  return <Animation name="load" />;
};
