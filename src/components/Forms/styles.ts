import styled, { css } from 'styled-components';

export const Form = styled.form`
  background: ${({ theme }) => theme.colors.background_light};
  width: 44rem;
  height: auto;

  padding: 2.4rem;
  border-radius: 1rem 1rem 0 0;
  margin-left: auto;

  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 2.4rem;

  button {
    height: 4.8rem;
    margin-top: 2.4rem;
    font-size: 1.8rem;
  }

  @media (max-width: 916px) {
    position: relative;
    left: 0;

    background: ${({ theme }) => theme.colors.shape};
    width: 100%;
    border-radius: 0;
    margin-left: 0;
  }
`;

export const FormFieldset = styled.fieldset`
  border: 0;
`;

export const FormTitle = styled.legend`
  margin-bottom: 2.4rem;

  font-size: 3.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 1.6rem;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.4rem;

  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_900};
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 4.4rem;
    padding: 1.2rem;
    border: 1px solid ${theme.colors.text_300};
    border-radius: 0.8rem;

    font-size: 1.6rem;
    color: ${theme.colors.text_900};

    caret-color: ${theme.colors.primary};

    &:focus {
      border-color: ${theme.colors.primary};
    }
  `}
`;

export const ErrorMessage = styled.span`
  margin-top: 0.4rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.error};
`;
