import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { AnimateSharedLayout } from 'framer-motion';
import { Provider } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';

import { Layout } from '@components';

import { store } from '@store';

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <AnimateSharedLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimateSharedLayout>
      </SessionProvider>
    </Provider>
  );
};

export default MyApp;
