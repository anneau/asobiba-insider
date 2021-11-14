import React, { VFC } from 'react';
import { useGame } from '../../hooks/use-game';
import { Animation } from '../common/Animation';
import { Theme } from './Theme';
import { Timer } from './Timer';
import { AnswerForm } from './AnswerForm';
import { useRouter } from 'next/router';

const role = (isMaster: boolean, isInsider: boolean): string => {
  if (isMaster) return 'マスター';
  if (isInsider) return 'インサイダー';
  return '庶民';
};

const useVotePage = () => {
  const { hasAnswer, game } = useGame();
  const { push } = useRouter();

  if (hasAnswer && game?.theme === game?.answer) push('/vote');
};

export const Game: VFC = () => {
  const { game, isMaster, isInsider } = useGame();
  useVotePage();

  if (!game) return <Animation name="load" />;

  return (
    <>
      <p>あなたの役職は{role(isMaster, isInsider)}です</p>
      {isMaster || isInsider ? <Theme /> : <></>}
      <Timer />
      {!isMaster ? <AnswerForm /> : <></>}
    </>
  );
};
