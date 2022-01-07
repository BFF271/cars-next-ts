import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';

import { Button, Logo, SearchBar } from '@components';

import * as S from './styles';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleUserSignOut = () => {
    signOut();
  };

  return (
    <S.Container>
      <S.Content>
        <Logo />

        <SearchBar />

        <S.Buttons isMobileMenuOpen={isMobileMenuOpen}>
          <S.CloseMobileMenuButton
            type="button"
            name="close-mobile-menu"
            onClick={handleCloseMobileMenu}
          >
            <S.CloseIcon />
          </S.CloseMobileMenuButton>

          {!session && (
            <>
              <S.ButtonLink href="/signup">
                <S.ButtonContainer>
                  <Button
                    type="button"
                    name="sign-up"
                    onClick={handleCloseMobileMenu}
                    styleType="secondary"
                  >
                    Sign up
                  </Button>
                </S.ButtonContainer>
              </S.ButtonLink>
              <S.ButtonLink href="/signin">
                <S.ButtonContainer>
                  <Button
                    type="button"
                    name="sign-in"
                    onClick={handleCloseMobileMenu}
                  >
                    Sign in
                  </Button>
                </S.ButtonContainer>
              </S.ButtonLink>
            </>
          )}

          {session && (
            <>
              <S.ButtonLink href="/profile">
                <S.ButtonContainer>
                  <Button
                    type="button"
                    name="profile-link"
                    onClick={handleCloseMobileMenu}
                  >
                    Profile
                  </Button>
                </S.ButtonContainer>
              </S.ButtonLink>
              <S.ButtonContainer>
                <Button
                  type="button"
                  name="sign-out"
                  onClick={handleUserSignOut}
                  styleType="secondary"
                >
                  Sign out
                </Button>
              </S.ButtonContainer>
            </>
          )}
        </S.Buttons>

        <S.OpenMobileMenuButton
          type="button"
          name="open-mobile-menu"
          onClick={handleOpenMobileMenu}
        >
          <S.MenuIcon />
        </S.OpenMobileMenuButton>
      </S.Content>
    </S.Container>
  );
};
