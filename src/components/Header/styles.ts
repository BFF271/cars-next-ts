import styled, { css } from 'styled-components';
import { IoMenuOutline, IoClose } from 'react-icons/io5';

type AuthButtonsProps = {
  isMobileMenuOpen: boolean;
};

type AuthButtonProps = {
  styleType: 'primary' | 'secondary';
};

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.background_light};
  width: 100%;
  height: 8.4rem;

  padding: 2.4rem 0.8rem;
  box-shadow: 0px 10px 30px #0000001a;

  position: sticky;
  top: 0;
  z-index: 100000;
`;

export const Content = styled.nav`
  width: 100%;
  max-width: 124rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AuthButtons = styled.section<AuthButtonsProps>`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 916px) {
    background: ${({ theme }) => theme.colors.background_light};

    flex-direction: column-reverse;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;

    transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);

    ${({ isMobileMenuOpen }) =>
      isMobileMenuOpen
        ? css`
            transform: translateX(0%);
          `
        : css`
            transform: translateX(-100%);
          `}
  }
`;

export const AuthButton = styled.button<AuthButtonProps>`
  ${({ theme, styleType }) => css`
    background: transparent;
    padding: 0.8rem 1.6rem;
    border-radius: 1.2rem;
    border: 2px solid transparent;

    font-size: 1.6rem;
    font-weight: 700;
    color: ${theme.colors.primary};

    transition: all 0.2s ease;

    ${styleType === 'primary' &&
    css`
      border-color: ${theme.colors.primary};

      &:hover {
        background: ${theme.colors.primary};
        color: ${theme.colors.text_50};
      }
    `}

    ${styleType === 'secondary' &&
    css`
      &:hover {
        border-color: ${theme.colors.primary};
      }
    `}

    @media (max-width: 916px) {
      font-size: 3.2rem;
    }
  `}
`;

export const OpenMobileMenuButton = styled.button`
  background: none;
  border: none;
  display: none;

  @media (max-width: 916px) {
    display: block;
  }
`;

export const MenuIcon = styled(IoMenuOutline)`
  width: 2.8rem;
  height: 2.8rem;
  color: ${({ theme }) => theme.colors.text_900};
`;

export const CloseMobileMenuButton = styled.button`
  display: none;

  background: transparent;
  width: 4.8rem;
  height: 4.8rem;
  border: none;

  position: absolute;
  bottom: 2.4rem;
  z-index: 20;

  @media (max-width: 916px) {
    display: block;
  }
`;

export const CloseIcon = styled(IoClose)`
  width: 2.4rem;
  height: 2.4rem;
  color: ${({ theme }) => theme.colors.primary};
`;
