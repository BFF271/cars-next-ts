import React from 'react';
import { createPortal } from 'react-dom';

import { useReduxDispatch, useReduxSelector } from '@shared/hooks';

import { toggleTheme } from '@store/slices/theme';
import { selectThemeType } from '@store/slices/theme/selectors';

import * as S from './styles';

export const ToggleThemeButton: React.FC = () => {
  const themeType = useReduxSelector(selectThemeType);
  const dispatch = useReduxDispatch();

  function handleToggleTheme() {
    dispatch(toggleTheme());
  }

  return createPortal(
    <S.Container type="button" name="toggle-theme" onClick={handleToggleTheme}>
      {themeType === 'light' ? <S.SunIcon /> : <S.MoonIcon />}
    </S.Container>,
    document.querySelector('#root-toggle-theme')!
  );
};
