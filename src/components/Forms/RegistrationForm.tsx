import { FormEvent } from 'react';

import { Button } from '@components';

import * as S from './styles';

export const RegistrationForm: React.FC = () => {
  async function handleSubmitRegistrationForm(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
  }

  return (
    <S.Form onSubmit={handleSubmitRegistrationForm}>
      <S.FormFieldset>
        <S.FormTitle>Registration</S.FormTitle>

        <S.FormGroup>
          <S.Label htmlFor="name">Name</S.Label>
          <S.Input type="text" id="name" />
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="email">Email</S.Label>
          <S.Input type="text" id="email" />
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="password">Password</S.Label>
          <S.Input type="password" id="password" />
        </S.FormGroup>

        <Button>Register</Button>
      </S.FormFieldset>
    </S.Form>
  );
};
