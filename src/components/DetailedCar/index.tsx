import Link from 'next/link';

import { CarType } from '@shared/types';

import * as S from './styles';

type DetailedCarProps = {
  car: CarType;
  color: string;
  image: string;
  index: number;
};

export function DetailedCar({ car, color, image, index }: DetailedCarProps) {
  return (
    <S.Container>
      <S.Details>
        <S.BrandLogo src={car.brandLogo} />
        <S.Info>
          <S.BrandModel>
            {car.brand} {car.model}
          </S.BrandModel>
          <S.Rent>
            ${car.rent.price}/{car.rent.period}
          </S.Rent>
        </S.Info>
      </S.Details>

      <S.Color>
        <S.ColorIndex>{`${index + 1}`.padStart(2, '0')}</S.ColorIndex>
        <S.ColorName>{color}</S.ColorName>
      </S.Color>

      <S.CarImageWrapper>
        <S.CarImage src={image} />
      </S.CarImageWrapper>

      <S.BookNowButtonContainer>
        <Link href="/" passHref>
          <S.BookNowButton>
            Book now
            <S.ArrowRightIcon />
          </S.BookNowButton>
        </Link>
      </S.BookNowButtonContainer>

      <S.BackToCatalogButtonContainer>
        <Link href="/" passHref>
          <S.BackToCatalogButton $isOutlined>
            <S.ArrowLeftIcon />
            Back to catalog
          </S.BackToCatalogButton>
        </Link>
      </S.BackToCatalogButtonContainer>
    </S.Container>
  );
}
