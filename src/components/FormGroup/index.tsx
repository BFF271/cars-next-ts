import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import * as S from './styles';

type Props = {
  title: string;
  inputId: string;
  inputType?: string;
  placeholder?: string;
  error: FieldError | undefined;
  formRegistration: UseFormRegisterReturn;
  isSelectField?: boolean;
  selectFieldOptions?: any[];
};

export const FormGroup: React.FC<Props> = ({
  title,
  inputId,
  inputType = 'text',
  placeholder = '',
  error,
  formRegistration,
  isSelectField = false,
  selectFieldOptions = [],
}) => {
  return (
    <S.Container>
      <S.Label htmlFor={inputId}>{title}</S.Label>
      {isSelectField ? (
        <S.Select id={inputId} {...formRegistration}>
          {selectFieldOptions.map((fieldOption) => (
            <option key={fieldOption} value={fieldOption}>
              {fieldOption}
            </option>
          ))}
        </S.Select>
      ) : (
        <S.Input
          type={inputType}
          id={inputId}
          placeholder={placeholder}
          {...formRegistration}
        />
      )}
      {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </S.Container>
  );
};
