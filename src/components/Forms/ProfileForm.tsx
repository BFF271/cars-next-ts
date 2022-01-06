import { signOut } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Button, Loader } from '@components';

import { api } from '@shared/services';

import * as S from './styles';

const profileSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required.')
    .email({ message: 'Invalid email address.' }),
  name: z.string().nonempty('Name is required.'),
});

type ProfileSchema = z.infer<typeof profileSchema>;

type Props = {
  currentEmail: string;
  currentName: string;
};

export const ProfileForm: React.FC<Props> = ({ currentEmail, currentName }) => {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: { email: currentEmail, name: currentName },
  });

  async function handleSubmitProfileForm({ email, name }: ProfileSchema) {
    const updatedUser = { email, name };

    try {
      const { data } = await api.patch('/update-profile', updatedUser);
      toast.success(data.message, {
        autoClose: 2000,
        onClose: () => {
          signOut();
        },
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response!.data.error);
      } else {
        toast.error('Something went wrong.');
      }
    }
  }

  return (
    <S.Form layoutId="form" onSubmit={handleSubmit(handleSubmitProfileForm)}>
      <S.FormFieldset>
        <S.FormTitle>Account settings</S.FormTitle>

        <S.FormGroup>
          <S.Label htmlFor="name">Name</S.Label>
          <S.Input type="text" id="name" {...register('name')} />
          {errors.name && (
            <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
          )}
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="email">Email</S.Label>
          <S.Input type="text" id="email" {...register('email')} />
          {errors.email && (
            <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
          )}
        </S.FormGroup>

        <S.ButtonContainer>
          <Button disabled={isSubmitting}>
            {isSubmitting ? <Loader /> : 'Save'}
          </Button>
        </S.ButtonContainer>
      </S.FormFieldset>
    </S.Form>
  );
};
