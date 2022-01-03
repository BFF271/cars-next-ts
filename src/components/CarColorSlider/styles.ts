import styled, { css } from 'styled-components';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { Swiper } from 'swiper/react';

export const Container = styled.section`
  padding: 0 6.4rem;

  display: flex;
  gap: 1.2rem;
  align-items: flex-end;

  position: relative;

  @media (max-width: 1200px) {
    padding: 0;
  }
`;

export const Slider = styled(Swiper)`
  height: 28rem;

  .swiper-wrapper {
    align-items: flex-end;
  }

  @media (max-width: 1200px) {
    height: 16rem;
  }
`;

export const Slide = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  isActive: boolean;
};

export const Car = styled.div<Props>`
  ${({ theme, isActive }) => css`
    background: ${theme.colors.background_dark};
    width: 32rem;
    height: 20rem;

    padding: 3.8rem;
    border-radius: 0.8rem;
    box-shadow: 0px 2px 30px #0000001a;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    transition: all 0.2s ease;

    ${isActive &&
    css`
      background: linear-gradient(90deg, #b9baf1 0%, #e0d3ef 100%);
      height: 26rem;
    `}

    @media (max-width: 1200px) {
      width: 26rem;
      height: 16rem;
    }
  `}
`;

export const Thumb = styled.img<Props>`
  position: relative;
  z-index: 10;

  height: ${({ isActive }) => (isActive ? 20 : 14)}rem;
  transform: translateX(10%);

  transition: all 0.2s ease;

  @media (max-width: 1200px) {
    height: 14rem;
  }
`;

type NavigationButtonProps = {
  side: 'left' | 'right';
};

export const NavigationButton = styled.button<NavigationButtonProps>`
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.text_900};
  width: 4.2rem;
  height: 4.2rem;

  border: none;
  border-radius: 50%;
  margin-bottom: 6.4rem;
  box-shadow: 0px 5px 15px #0000001a;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  ${({ side }) =>
    side === 'left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}

  @media (max-width: 999px) {
    display: none;
  }
`;

const iconCSS = css`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.text_50};
`;

export const ArrowLeftIcon = styled(BsArrowLeft)`
  ${iconCSS}
`;

export const ArrowRightIcon = styled(BsArrowRight)`
  ${iconCSS}
`;
