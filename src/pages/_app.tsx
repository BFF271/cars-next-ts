import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { AnimateSharedLayout } from 'framer-motion';

import { Layout } from '@components';

import { GlobalStyle, theme } from '@styles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnimateSharedLayout>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AnimateSharedLayout>
  );
};

export default MyApp;
