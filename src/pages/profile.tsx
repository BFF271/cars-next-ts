import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';

import { Forms } from '@components';

import * as S from '@pageStyles/Profile';

type Props = {
  email: string;
  name: string;
};

const ProfilePage: React.FC<Props> = ({ email, name }) => {
  return (
    <S.Container>
      <S.Content>
        <Head>
          <title>Profile | Exotic Cars</title>
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

          <Forms.ProfileForm currentEmail={email} currentName={name} />
        </S.FormContainer>
      </S.Content>
    </S.Container>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const session = await getSession({ req: ctx.req });

  if (!session || !session.user) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  const { email, name } = session.user;

  if (!email || !name) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      email: email,
      name: name,
    },
  };
};

export default ProfilePage;
