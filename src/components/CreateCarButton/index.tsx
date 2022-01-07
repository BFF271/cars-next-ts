import React from 'react';
import { createPortal } from 'react-dom';
import Router from 'next/router';
import { useSession } from 'next-auth/react';

import * as S from './styles';

export const CreateCarButton: React.FC = () => {
  const { data: session } = useSession();

  function handleNavigateToNewCarPage() {
    Router.push('/new-car');
  }

  if (!session) {
    return null;
  }

  return createPortal(
    <S.Container
      type="button"
      name="create-car"
      onClick={handleNavigateToNewCarPage}
    >
      <S.CarIcon />
    </S.Container>,
    document.querySelector('#root-new-car')!
  );
};
