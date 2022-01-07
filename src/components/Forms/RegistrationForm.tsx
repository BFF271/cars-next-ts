import Router from 'next/router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Button, FormGroup, Loader } from '@components';

import { api } from '@shared/services';
import { RegistrationSchema, registrationSchema } from '@shared/schemas';

import * as S from './styles';

export const RegistrationForm: React.FC = () => {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    defaultValues: { email: '', name: '', password: '' },
  });

  async function handleSubmitRegistrationForm({
    email,
    name,
    password,
  }: RegistrationSchema) {
    const newUser = { email, name, password };

    try {
      const { data } = await api.post('/signup', newUser);
      toast.success(data.message);

      Router.push('/signin');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response!.data.error);
      } else {
        toast.error('Something went wrong.');
      }
    }
  }

  return (
    <S.Form
      layoutId="form"
      onSubmit={handleSubmit(handleSubmitRegistrationForm)}
    >
      <S.FormFieldset>
        <S.FormTitle>Registration</S.FormTitle>

        <FormGroup
          title="Name"
          inputId="name"
          inputType="text"
          formRegistration={register('name')}
          error={errors.name}
        />

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
          <Button disabled={isSubmitting}>
            {isSubmitting ? <Loader /> : 'Register'}
          </Button>
        </S.ButtonContainer>
      </S.FormFieldset>
    </S.Form>
  );
};
