import styled, { css } from 'styled-components';
import Image from 'next/image';

export const Container = styled.main``;

export const Content = styled.section`
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
`;

export const Title = styled.h1`
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
`;

export const ButtonContainer = styled.div`
  margin-top: 6.2rem;

  button {
    height: 4.8rem;
    font-size: 1.8rem;
  }
`;

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 45rem;
  height: 60rem;

  display: flex;

  border-radius: 1rem;
  overflow: hidden;
`;

export const Banner = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
