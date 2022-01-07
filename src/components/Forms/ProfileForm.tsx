import { signOut } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Button, FormGroup, Loader } from '@components';

import { api } from '@shared/services';
import { ProfileSchema, profileSchema } from '@shared/schemas';

import * as S from './styles';

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

        <S.ButtonContainer>
          <Button
            type="submit"
            name="submit-updated-profile"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader /> : 'Save'}
          </Button>
        </S.ButtonContainer>
      </S.FormFieldset>
    </S.Form>
  );
};
