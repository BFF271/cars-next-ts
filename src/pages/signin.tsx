import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { getSession } from 'next-auth/react';

import { Forms } from '@components';

import * as S from '@pageStyles/SignIn';

const SignInPage: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <Head>
          <title>Sign In | Exotic Cars</title>
          <meta
            name="description"
            content="Access our system in search of your best four-wheel friend."
          />
        </Head>

        <S.FormContainer>
          <S.BannerContainer>
            <S.Banner
              src="/images/banner.jpg"
              alt="Car Banner"
              layout="fill"
              priority
            />
          </S.BannerContainer>

          <Forms.AuthenticationForm />
        </S.FormContainer>
      </S.Content>
    </S.Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession({ req: ctx.req });

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default SignInPage;
