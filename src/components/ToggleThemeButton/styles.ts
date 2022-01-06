import styled, { css } from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};

export const Container = styled(motion.button).attrs({
  variants: containerVariants,
  initial: 'hidden',
  animate: 'visible',
})`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 2000;

  background: ${({ theme }) => theme.colors.shape};
  width: 4.8rem;
  height: 4.8rem;

  border: none;
  border-radius: 50%;
  box-shadow: 0px 3px 15px #0000001a;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 916px) {
    bottom: 20rem;
    right: 0;
    border-radius: 50% 0 0 50%;
  }
`;

const iconCSS = css`
  width: 2.4rem;
  height: 2.4rem;
  stroke: ${({ theme }) => theme.colors.primary};
`;

export const SunIcon = styled(IoSunnyOutline)`
  ${iconCSS}
`;

export const MoonIcon = styled(IoMoonOutline)`
  ${iconCSS}
`;
