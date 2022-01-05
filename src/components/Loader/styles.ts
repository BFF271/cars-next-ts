import styled, { css, keyframes } from 'styled-components';

const loadAnimation = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    border-radius: 50%;
    width: 2.4rem;
    height: 2.4rem;

    margin: 0 auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999rem;
    border-top: 0.4rem solid ${theme.colors.primary_light};
    border-right: 0.4rem solid ${theme.colors.primary_light};
    border-bottom: 0.4rem solid ${theme.colors.primary_light};
    border-left: 0.4rem solid ${theme.colors.primary};
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: ${loadAnimation} 1.1s infinite linear;
    animation: ${loadAnimation} 1.1s infinite linear;

    &::after {
      border-radius: 50%;
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`;
