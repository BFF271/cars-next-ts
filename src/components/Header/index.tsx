import { useState } from 'react';

import { Logo, SearchBar } from '@components';

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

        <S.AuthButtons isMobileMenuOpen={isMobileMenuOpen}>
          <S.CloseMobileMenuButton onClick={handleCloseMobileMenu}>
            <S.CloseIcon />
          </S.CloseMobileMenuButton>

          <S.AuthButton styleType="secondary">Sign up</S.AuthButton>
          <S.AuthButton styleType="primary">Sign in</S.AuthButton>
        </S.AuthButtons>

        <S.OpenMobileMenuButton onClick={handleOpenMobileMenu}>
          <S.MenuIcon />
        </S.OpenMobileMenuButton>
      </S.Content>
    </S.Container>
  );
};
