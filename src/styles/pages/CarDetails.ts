import styled, { css } from 'styled-components';
import { BsEmojiFrown } from 'react-icons/bs';

export const Container = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(
        125deg,
        ${theme.colors.background_light} 0%,
        ${theme.colors.background_dark} 100%
      )
      0% 0% no-repeat padding-box;
  `}
`;

export const Content = styled.main`
  max-width: 124rem;
  min-height: calc(100vh - 8.4rem);
  padding: 5.6rem 0.8rem 24rem;
  margin: 0 auto;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SadIcon = styled(BsEmojiFrown)`
  font-size: 9.2rem;
  color: ${({ theme }) => theme.colors.error};
`;

export const Message = styled.p`
  margin: 1.2rem 0;
  font-size: 2.4rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.error};
`;

export const TryAgainButton = styled.button`
  ${({ theme }) => css`
    background: none;
    width: 100%;
    max-width: 16rem;

    padding: 0.8rem 1.6rem;
    border-radius: 1.2rem;
    border: 2px solid ${theme.colors.error};

    font-size: 1.6rem;
    font-weight: 700;
    color: ${theme.colors.error};

    transition: all 0.2s ease;

    &:hover {
      background: ${theme.colors.error};
      color: ${theme.colors.text_50};
    }
  `}
`;
