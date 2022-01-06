import styled from 'styled-components';
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

  div + div {
    margin-top: 1.6rem;
  }
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

export const ButtonContainer = styled(motion.div).attrs({
  variants: bottomToTopVariants,
})`
  button {
    height: 4.8rem;
    margin-top: 2.4rem;
    font-size: 1.8rem;
  }
`;
