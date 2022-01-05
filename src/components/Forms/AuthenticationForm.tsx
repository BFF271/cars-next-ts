import Router from 'next/router';
import { signIn, SignInResponse } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@components';

import * as S from './styles';
import { toast } from 'react-toastify';

const authenticationSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required.')
    .email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .nonempty('Password is required.')
    .min(8, { message: 'Password must be at least 8 characters long.' }),
});

type AuthenticationSchema = z.infer<typeof authenticationSchema>;

export const AuthenticationForm: React.FC = () => {
  const {
    formState: { errors },
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

        <S.FormGroup>
          <S.Label htmlFor="email">Email</S.Label>
          <S.Input type="text" id="email" {...register('email')} />
          {errors.email && (
            <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
          )}
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="password">Password</S.Label>
          <S.Input type="password" id="password" {...register('password')} />
          {errors.password && (
            <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
          )}
        </S.FormGroup>

        <S.ButtonContainer>
          <Button>Log In</Button>
        </S.ButtonContainer>
      </S.FormFieldset>
    </S.Form>
  );
};
