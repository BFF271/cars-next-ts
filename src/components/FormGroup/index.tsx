import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import * as S from './styles';

type Props = {
  title: string;
  inputId: string;
  inputType: string;
  placeholder?: string;
  error: FieldError | undefined;
  formRegistration: UseFormRegisterReturn;
};

export const FormGroup: React.FC<Props> = ({
  title,
  inputId,
  inputType,
  placeholder = '',
  error,
  formRegistration,
}) => {
  return (
    <S.Container>
      <S.Label htmlFor={inputId}>{title}</S.Label>
      <S.Input
        type={inputType}
        id={inputId}
        placeholder={placeholder}
        {...formRegistration}
      />
      {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </S.Container>
  );
};
