import Head from 'next/head';

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

export default SignInPage;
