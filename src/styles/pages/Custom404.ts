import styled, { css } from 'styled-components';

export const Container = styled.main`
  height: calc(100vh - 8.4rem);

  @media (max-width: 916px) {
    height: auto;
  }
`;

export const Content = styled.div`
  max-width: 124rem;
  height: 100%;
  padding: 5.6rem 0.8rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;

  @media (max-width: 916px) {
    flex-direction: column;
    padding-bottom: 20rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 70rem;

  @media (max-width: 916px) {
    max-width: 48rem;
  }
`;

export const NotFoundImage = styled.img`
  width: 100%;
`;

export const Wrapper = styled.div`
  @media (max-width: 916px) {
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 12rem;
    color: ${theme.colors.primary};

    @media (max-width: 916px) {
      font-size: min(6.4rem, 15vw);
    }
  `}
`;

export const Description = styled.h2`
  ${({ theme }) => css`
    margin-top: 0.8rem;

    font-size: 2rem;
    font-weight: 400;
    color: ${theme.colors.text_600};

    span {
      display: block;
      line-height: 2.4rem;
    }

    @media (max-width: 916px) {
      font-size: min(2rem, 4.5vw);
    }
  `}
`;

export const ButtonContainer = styled.div`
  width: 100%;
  max-width: 24rem;
  height: 6rem;

  margin-top: 1.6rem;

  @media (max-width: 916px) {
    max-width: 20rem;
    height: 5.4rem;
  }
`;
