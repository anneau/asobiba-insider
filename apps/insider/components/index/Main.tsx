import { useUser } from '../../hooks/use-user';
import React, { VFC } from 'react';
import { useRouter } from 'next/router';
import { Form } from './Form';

export const Main: VFC = () => {
  const { replace } = useRouter();
  const { user, completed } = useUser();
  if (!completed) return <p>Loading...</p>;
  if (user) {
    replace('/game');
    return <p>ゲーム画面に遷移します</p>;
  }

  return (
    <>
      <Form />
    </>
  );
};
