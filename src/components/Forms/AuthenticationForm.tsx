import Router from 'next/router';
import { signIn, SignInResponse } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Button, FormGroup, Loader } from '@components';

import { authenticationSchema, AuthenticationSchema } from '@shared/schemas';

import * as S from './styles';

export const AuthenticationForm: React.FC = () => {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<AuthenticationSchema>({
    resolver: zodResolver(authenticationSchema),
    defaultValues: { email: '', password: '' },
  });

  async function handleSubmitAuthenticationForm({
    email,
    password,
  }: AuthenticationSchema) {
    try {
      const result = (await signIn('credentials', {
        email,
        password,
        redirect: false,
      })) as unknown as SignInResponse;

      if (result.error) {
        throw new Error(result.error);
      }

      Router.replace('/');
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <S.Form
      layoutId="form"
      onSubmit={handleSubmit(handleSubmitAuthenticationForm)}
    >
      <S.FormFieldset>
        <S.FormTitle>Authentication</S.FormTitle>

        <FormGroup
          title="Email"
          inputId="email"
          inputType="text"
          formRegistration={register('email')}
          error={errors.email}
        />

        <FormGroup
          title="Password"
          inputId="password"
          inputType="password"
          formRegistration={register('password')}
          error={errors.password}
        />

        <S.ButtonContainer>
          <Button
            type="submit"
            name="submit-authentication"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader /> : 'Log In'}
          </Button>
        </S.ButtonContainer>
      </S.FormFieldset>
    </S.Form>
  );
};
