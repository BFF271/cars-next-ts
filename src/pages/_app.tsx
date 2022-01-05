import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { AnimateSharedLayout } from 'framer-motion';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Layout } from '@components';

import { GlobalStyle, theme } from '@styles';
import { SessionProvider } from 'next-auth/react';

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <AnimateSharedLayout>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <Layout>
            <Component {...pageProps} />
          </Layout>

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
      </AnimateSharedLayout>
    </SessionProvider>
  );
};

export default MyApp;
