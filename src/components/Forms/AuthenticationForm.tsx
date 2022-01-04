import { FormEvent } from 'react';

import { Button } from '@components';

import * as S from './styles';

export const AuthenticationForm: React.FC = () => {
  async function handleSubmitAuthenticationForm(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
  }

  return (
    <S.Form onSubmit={handleSubmitAuthenticationForm}>
      <S.FormFieldset>
        <S.FormTitle>Authentication</S.FormTitle>

        <S.FormGroup>
          <S.Label htmlFor="email">Email</S.Label>
          <S.Input type="text" id="email" />
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="password">Password</S.Label>
          <S.Input type="password" id="password" />
        </S.FormGroup>

        <S.ButtonContainer>
          <Button>Log In</Button>
        </S.ButtonContainer>
      </S.FormFieldset>
    </S.Form>
  );
};
