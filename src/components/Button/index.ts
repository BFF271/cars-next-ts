import styled, { css } from 'styled-components';

type ButtonProps = {
  styleType?: 'primary' | 'secondary';
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, styleType = 'primary' }) => css`
    background: transparent;
    width: 100%;
    height: 100%;

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
  `}
`;
