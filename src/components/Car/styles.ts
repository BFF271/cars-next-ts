import styled from 'styled-components';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {
    x: -40,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.65,
      staggerChildren: 0.1,
    },
  },
};

export const Container = styled(motion.li).attrs({
  variants: containerVariants,
  whileHover: {
    scale: 1.05,
  },
})``;

export const CarDetailsLink = styled(Link)``;

export const Content = styled.a`
  background: ${({ theme }) => theme.colors.shape};
  height: 100%;
  padding: 2.4rem 1.6rem;
  border-radius: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Details = styled.div``;

const textVariants: Variants = {
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

export const Brand = styled(motion.h2).attrs({
  variants: textVariants,
})`
  font-size: 1.7rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text_900};
`;

export const Model = styled(motion.h3).attrs({
  variants: textVariants,
})`
  font-size: 1.7rem;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text_900};
`;

const optionsButtonVariants: Variants = {
  hidden: {
    x: 20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.6,
    },
  },
};

export const OptionsButton = styled(motion.div).attrs({
  variants: optionsButtonVariants,
})`
  background: none;
  border: none;

  display: flex;
  gap: 0.2rem;
`;

export const Dot = styled.div`
  background: ${({ theme }) => theme.colors.text_200};
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
`;

const thumbnailVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const Thumbnail = styled(motion.img).attrs({
  variants: thumbnailVariants,
})`
  width: 24.4rem;
  margin-top: 0.6rem;
  align-self: center;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
`;

export const Rent = styled(motion.h4).attrs({
  variants: textVariants,
})`
  color: ${({ theme }) => theme.colors.text_900};
`;

export const CurrencySymbol = styled.sup`
  font-size: 1.4rem;
`;

export const Price = styled.span`
  font-size: 2.4rem;
`;

export const Period = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
`;
