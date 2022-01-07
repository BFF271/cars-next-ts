import { CarType } from '@shared/types';

import * as S from './styles';

type Props = {
  car: CarType;
};

export function Car({ car }: Props) {
  const currencyFractionDigits = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).resolvedOptions().maximumFractionDigits;

  const formattedPrice = car.rent.price.toLocaleString('en-US', {
    maximumFractionDigits: currencyFractionDigits,
  });

  return (
    <S.Container>
      <S.CarDetailsLink href={`/car/${car.id}`}>
        <S.Content>
          <S.Header>
            <S.Details>
              <S.Brand>{car.brand}</S.Brand>
              <S.Model>{car.model}</S.Model>
            </S.Details>

            <S.OptionsButton>
              <S.Dot />
              <S.Dot />
              <S.Dot />
            </S.OptionsButton>
          </S.Header>

          <S.ThumbnailContainer>
            <S.Thumbnail
              src={car.thumbnail}
              alt={`${car.brand} ${car.model}`}
              width={300}
              height={200}
            />
          </S.ThumbnailContainer>

          <S.Footer>
            <S.Rent>
              <S.CurrencySymbol>$</S.CurrencySymbol>
              <S.Price>{formattedPrice}</S.Price>
              <S.Period>/{car.rent.period}</S.Period>
            </S.Rent>
          </S.Footer>
        </S.Content>
      </S.CarDetailsLink>
    </S.Container>
  );
}
