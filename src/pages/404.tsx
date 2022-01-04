import Link from 'next/link';

import { Button } from '@components';

import * as S from '@pageStyles/Custom404';

const Custom404: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.ImageContainer>
          <S.NotFoundImage
            src="/images/not-found.svg"
            alt="A couple driving a car in an empty place"
          />
        </S.ImageContainer>

        <S.Wrapper>
          <S.Title>Oops...</S.Title>
          <S.Description>
            <span>I think you have reached the end of the road.</span>
            <span>The page you requested was not found.</span>
          </S.Description>

          <Link href="/" passHref>
            <S.ButtonContainer>
              <Button>Return to Home</Button>
            </S.ButtonContainer>
          </Link>
        </S.Wrapper>
      </S.Content>
    </S.Container>
  );
};

export default Custom404;
