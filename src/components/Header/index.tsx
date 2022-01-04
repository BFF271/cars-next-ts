import { useState } from 'react';

import { Button, Logo, SearchBar } from '@components';

import * as S from './styles';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <S.Container>
      <S.Content>
        <Logo />

        <SearchBar />

        <S.Buttons isMobileMenuOpen={isMobileMenuOpen}>
          <S.CloseMobileMenuButton onClick={handleCloseMobileMenu}>
            <S.CloseIcon />
          </S.CloseMobileMenuButton>

          <S.ButtonLink href="/">
            <S.ButtonContainer>
              <Button styleType="secondary">Sign up</Button>
            </S.ButtonContainer>
          </S.ButtonLink>
          <S.ButtonLink href="/">
            <S.ButtonContainer>
              <Button styleType="primary">Sign in</Button>
            </S.ButtonContainer>
          </S.ButtonLink>
        </S.Buttons>

        <S.OpenMobileMenuButton onClick={handleOpenMobileMenu}>
          <S.MenuIcon />
        </S.OpenMobileMenuButton>
      </S.Content>
    </S.Container>
  );
};
