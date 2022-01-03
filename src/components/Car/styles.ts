import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.li``;

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

export const Brand = styled.h2`
  font-size: 1.7rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text_900};
`;

export const Model = styled.h3`
  font-size: 1.7rem;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text_900};
`;

export const OptionsButton = styled.div`
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

export const Thumbnail = styled.img`
  width: 24.4rem;
  margin-top: 0.6rem;
  align-self: center;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
`;

export const Rent = styled.h4`
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
