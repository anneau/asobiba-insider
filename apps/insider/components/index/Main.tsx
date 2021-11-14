import { useUser } from '../../hooks/use-user';
import React, { VFC } from 'react';
import { useRouter } from 'next/router';
import { Form } from './Form';
import { Animation } from '../common/Animation';

export const Main: VFC = () => {
  const { replace } = useRouter();
  const { user, completed } = useUser();
  if (!completed) return <Animation name="load" />;
  if (user) {
    replace('/entrance');
    return <Animation name="load" />;
  }

  return <Form />;
};
