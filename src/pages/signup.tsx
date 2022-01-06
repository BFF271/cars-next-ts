import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { getSession } from 'next-auth/react';

import { Forms } from '@components';

import * as S from '@pageStyles/SignUp';

const SignUpPage: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <Head>
          <title>Sign Up | Exotic Cars</title>
          <meta
            name="description"
            content="Create your account in search of your best friend on four wheels."
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

          <Forms.RegistrationForm />
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

export default SignUpPage;
