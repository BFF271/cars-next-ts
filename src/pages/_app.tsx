import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Layout } from '@components';

import { GlobalStyle, theme } from '@styles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
