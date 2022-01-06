import styled, { css } from 'styled-components';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const Container = styled(motion.section).attrs({
  variants: containerVariants,
  initial: 'hidden',
  animate: 'visible',
})`
  height: 100%;
  margin-bottom: 4.8rem;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 6.5rem 6rem repeat(3, 5rem) 25rem 5rem;
  grid-column-gap: 1.6rem;
  grid-row-gap: 1.6rem;

  @media (max-width: 916px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Details = styled.header`
  grid-area: 1 / 1 / 3 / 6;

  display: flex;
  align-items: center;

  @media (max-width: 916px) {
    flex-direction: column;
  }
`;

const brandLogoVariants: Variants = {
  hidden: {
    y: -25,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.5,
    },
  },
};

export const BrandLogo = styled(motion.img).attrs({
  variants: brandLogoVariants,
})`
  width: 100%;
  max-width: min(12.4rem, 35vw);
  height: auto;
  margin-right: 4rem;

  @media (max-width: 916px) {
    margin: 0;
  }
`;

export const Info = styled.div`
  @media (max-width: 916px) {
    text-align: center;
  }
`;

const titleVariants: Variants = {
  hidden: {
    y: 25,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.5,
    },
  },
};

export const BrandModel = styled(motion.h2).attrs({
  variants: titleVariants,
})`
  font-size: min(5rem, 10vw);
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text_900};

  @media (max-width: 916px) {
    margin: 1.2rem 0 0.6rem;
  }
`;

export const Rent = styled(motion.span).attrs({
  variants: titleVariants,
})`
  display: block;
  font-size: min(4rem, 7vw);
  font-weight: 400;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.text_900};
`;

export const Color = styled.div`
  grid-area: 2 / 8 / 4 / 9;
  text-align: right;

  @media (max-width: 916px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const colorTextVariants: Variants = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.5,
    },
  },
};

export const ColorIndex = styled(motion.h4).attrs({
  variants: colorTextVariants,
})`
  font-size: min(5rem, 10vw);
  color: ${({ theme }) => theme.colors.text_900};
`;

export const ColorName = styled(motion.span).attrs({
  variants: colorTextVariants,
})`
  display: block;
  font-size: min(3rem, 8vw);
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text_900};
`;

export const CarImageWrapper = styled.div`
  grid-area: 3 / 3 / 7 / 8;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const carImageVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const CarImage = styled(motion.img).attrs({
  variants: carImageVariants,
})`
  width: 100%;
`;

type ButtonType = {
  $isOutlined?: boolean;
};

const Button = styled.a<ButtonType>`
  ${({ theme, $isOutlined }) => css`
    background: ${theme.colors.text_900};
    width: 100%;
    max-width: 24rem;
    height: 5rem;

    padding: 1.6rem 3.2rem;
    border-radius: 99999px;
    border: 1px solid ${theme.colors.text_900};

    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    font-size: 1.6rem;
    color: ${theme.colors.text_50};

    transition: all 0.2s ease;

    &:hover {
      background: transparent;
      color: ${theme.colors.text_900};
    }

    ${$isOutlined &&
    css`
      background: transparent;
      color: ${theme.colors.text_900};

      &:hover {
        background: ${theme.colors.text_900};
        color: ${theme.colors.text_50};
      }
    `}
  `}
`;

const backToCatalogButtonContainerVariants: Variants = {
  hidden: {
    x: -25,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.5,
    },
  },
};

export const BackToCatalogButtonContainer = styled(motion.div).attrs({
  variants: backToCatalogButtonContainerVariants,
})`
  grid-area: 5 / 1 / 6 / 3;

  @media (max-width: 916px) {
    align-self: center;
  }
`;

export const BackToCatalogButton = styled(Button)``;

const bookNowButtonContainerVariants: Variants = {
  hidden: {
    x: 25,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.5,
    },
  },
};

export const BookNowButtonContainer = styled(motion.div).attrs({
  variants: bookNowButtonContainerVariants,
})`
  grid-area: 7 / 4 / 8 / 6;
  display: flex;
  justify-content: center;
`;

export const BookNowButton = styled(Button)``;

const iconCSS = css`
  height: 1.6rem;
  flex-shrink: 0;
`;

export const ArrowLeftIcon = styled(BsArrowLeft)`
  ${iconCSS}
`;

export const ArrowRightIcon = styled(BsArrowRight)`
  ${iconCSS}
`;
