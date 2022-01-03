import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled(Link)``;

export const Logo = styled.a`
  font-size: 1.6rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text_900};

  cursor: pointer;
`;

export const HighlightedText = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
`;
