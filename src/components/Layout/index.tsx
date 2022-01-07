import dynamic from 'next/dynamic';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { CreateCarButton, Header } from '@components';

import { useReduxSelector } from '@shared/hooks';

import { selectThemeType } from '@store/slices/theme/selectors';

import { GlobalStyle, theme } from '@styles';

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
      <CreateCarButton />
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
