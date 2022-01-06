import styled, { css } from 'styled-components';
import { motion, Variants } from 'framer-motion';

export const Form = styled(motion.form)`
  background: ${({ theme }) => theme.colors.background_light};
  width: 44rem;
  height: auto;

  padding: 2.4rem;
  border-radius: 1rem 1rem 0 0;
  margin-left: auto;

  position: absolute;
  z-index: 10;
  bottom: -1px;
  left: 2.4rem;

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

const bottomToTopVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
    },
  },
};

export const FormTitle = styled(motion.legend).attrs({
  variants: bottomToTopVariants,
})`
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

export const Label = styled(motion.label).attrs({
  variants: bottomToTopVariants,
})`
  margin-bottom: 0.4rem;

  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_900};
`;

export const Input = styled(motion.input).attrs({
  variants: bottomToTopVariants,
})`
  ${({ theme }) => css`
    width: 100%;
    height: 4.4rem;
    padding: 1.2rem;
    border: 1px solid ${theme.colors.text_300};
    border-radius: 1.2rem;

    font-size: 1.6rem;
    color: ${theme.colors.black};

    caret-color: ${theme.colors.primary};

    transition: border-color 0.2s;

    &:focus {
      border-color: ${theme.colors.primary};
    }
  `}
`;

const errorMessageVariants: Variants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const ErrorMessage = styled(motion.span).attrs({
  variants: errorMessageVariants,
})`
  margin-top: 0.4rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.error};
`;

export const ButtonContainer = styled(motion.div).attrs({
  variants: bottomToTopVariants,
})`
  button {
    height: 4.8rem;
    margin-top: 2.4rem;
    font-size: 1.8rem;
  }
`;
