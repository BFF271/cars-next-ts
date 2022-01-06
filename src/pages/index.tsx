import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Car } from '@components';

import { Database } from '@shared/utils';
import { CarType } from '@shared/types';

import * as S from '@pageStyles/Home';

type Props = {
  cars: CarType[];
};

const HomePage: React.FC<Props> = ({ cars }) => {
  return (
    <S.Container>
      <S.Content>
        <Head>
          <title>Exotic Cars</title>
          <meta
            name="description"
            content="Dozens of cars await you behind the wheel."
          />
        </Head>

        {cars.length > 0 && (
          <S.CarList>
            {cars.map((car) => (
              <Car key={car.id} car={car} />
            ))}
          </S.CarList>
        )}

        {cars.length === 0 && (
          <S.Wrapper>
            <S.SadIcon />
            <S.Message>
              Oops...there are no cars registered in the system.
            </S.Message>
          </S.Wrapper>
        )}
      </S.Content>
    </S.Container>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const cars = await Database.getDatabaseFileData<CarType[]>('cars.json');

  return {
    props: { cars },
    revalidate: 10,
  };
};

export default HomePage;
