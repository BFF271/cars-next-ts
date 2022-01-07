import styled, { css } from 'styled-components';
import Image from 'next/image';
import { IoAdd, IoClose } from 'react-icons/io5';
import { motion, Variants } from 'framer-motion';

export const Container = styled.main``;

const formContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const Content = styled(motion.section).attrs({
  variants: formContainerVariants,
  initial: 'hidden',
  animate: 'visible',
})`
  max-width: 124rem;
  min-height: calc(100vh - 8.4rem);
  padding: 5.6rem 0.8rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  gap: 12rem;

  @media (max-width: 916px) {
    padding-bottom: 20rem;
  }
`;

export const FormSide = styled.form`
  width: 100%;
  max-width: 50rem;

  > div + div {
    margin-top: 1.6rem;
  }

  @media (max-width: 916px) {
    max-width: 100%;
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

export const Title = styled(motion.h1).attrs({
  variants: bottomToTopVariants,
})`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: 2.4rem;

    font-size: 4.8rem;
    font-weight: bold;
    color: ${theme.colors.primary};

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;

      background: ${theme.colors.primary};
      width: 100%;
      max-width: 32rem;
      height: 2px;

      @media (max-width: 916px) {
        display: none;
      }
    }

    @media (max-width: 916px) {
      text-align: center;
    }
  `}
`;

export const FormRow = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;

  > div {
    flex: 1;
  }

  @media (max-width: 916px) {
    flex-direction: column;

    > div {
      width: 100%;
    }
  }
`;

export const RowButtons = styled(motion.section).attrs({
  variants: bottomToTopVariants,
})`
  display: flex;
  gap: 0.8rem;

  @media (max-width: 916px) {
    align-self: flex-end;
  }
`;

export const RowButton = styled.button`
  background: transparent;
  width: 3rem;
  height: 3rem;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const iconCSS = css`
  width: 3rem;
  height: 3rem;
`;

export const AddIcon = styled(IoAdd)`
  ${iconCSS}
  color: ${({ theme }) => theme.colors.primary};
`;

export const RemoveIcon = styled(IoClose)`
  ${iconCSS}
  color: ${({ theme }) => theme.colors.error};
`;

export const ButtonContainer = styled(motion.div).attrs({
  variants: bottomToTopVariants,
})`
  margin-top: 6.2rem;

  button {
    height: 4.8rem;
    font-size: 1.8rem;
  }
`;

const bannerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const BannerContainer = styled(motion.div).attrs({
  variants: bannerVariants,
})`
  position: relative;
  width: 100%;
  max-width: 45rem;
  height: 60rem;

  display: flex;

  border-radius: 1rem;
  overflow: hidden;

  @media (max-width: 916px) {
    display: none;
  }
`;

export const Banner = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
