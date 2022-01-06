import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { Header } from '@components';

import { useReduxSelector } from '@shared/hooks';

import { selectThemeType } from '@store/slices/theme/selectors';

import { GlobalStyle, theme } from '@styles';
import dynamic from 'next/dynamic';

const ToggleThemeButton = dynamic<unknown>(
  () =>
    import('@components/ToggleThemeButton').then(
      (mod) => mod.ToggleThemeButton
    ),
  { ssr: false }
);

export const Layout: React.FC = ({ children }) => {
  const themeType = useReduxSelector(selectThemeType);

  return (
    <ThemeProvider theme={theme[themeType]}>
      <GlobalStyle />

      <Header />
      <ToggleThemeButton />
      {children}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        style={{ zIndex: 9999999, fontSize: 16 }}
      />
    </ThemeProvider>
  );
};
