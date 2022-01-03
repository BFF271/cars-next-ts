import { CarType } from '@shared/types';

import * as S from './styles';

type Props = {
  car: CarType;
};

export function Car({ car }: Props) {
  return (
    <S.Container>
      <S.CarDetailsLink href={`/${car.id}`}>
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

          <S.Thumbnail src={car.thumbnail} />

          <S.Footer>
            <S.Rent>
              <S.CurrencySymbol>$</S.CurrencySymbol>
              <S.Price>{car.rent.price}</S.Price>
              <S.Period>/{car.rent.period}</S.Period>
            </S.Rent>
          </S.Footer>
        </S.Content>
      </S.CarDetailsLink>
    </S.Container>
  );
}
