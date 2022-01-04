import { Forms } from '@components';

import * as S from '@pageStyles/SignUp';

const SignUpPage: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
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

export default SignUpPage;
