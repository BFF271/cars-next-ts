import { useCallback, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import { CarColorsSliderProps, DetailedCar } from '@components';

import { Database } from '@shared/utils';
import { CarType } from '@shared/types';

import * as S from '@pageStyles/CarDetails';

const CarColorSliderDynamic = dynamic<CarColorsSliderProps>(
  () => import('@components/CarColorSlider').then((mod) => mod.CarColorsSlider),
  { ssr: false }
);

type Params = {
  carId: string;
};

type Props = {
  car: CarType | null;
};

const CarDetailsPage: React.FC<Props> = ({ car }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelectCarColor = useCallback((newIndex: number) => {
    setCurrentIndex(newIndex);
  }, []);

  return (
    <S.Container>
      <S.Content>
        {!car && (
          <>
            <Head>
              <title>Oops... | Exotic Cars</title>
              <meta
                name="description"
                content={'Oops...this is a non-existent car'}
              />
            </Head>
            <S.Wrapper>
              <S.SadIcon />
              <S.Message>
                Oops...an error occurred contacting the server
                <br />
                or this is a non-existent car.
              </S.Message>
            </S.Wrapper>
          </>
        )}

        {car && (
          <>
            <Head>
              <title>
                {car.brand} {car.model} | Exotic Cars
              </title>
              <meta
                name="description"
                content={`Buy now ${car.brand} ${car.model}`}
              />
            </Head>
            <DetailedCar
              car={car}
              color={car.colors[currentIndex].color}
              image={car.colors[currentIndex].image}
              index={currentIndex}
            />
            {car.colors.length > 1 && (
              <CarColorSliderDynamic
                currentSlideIndex={currentIndex}
                carColors={car.colors}
                handleSelectCarColor={handleSelectCarColor}
              />
            )}
          </>
        )}
      </S.Content>
    </S.Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const cars = await Database.getDatabaseFileData<CarType[]>('cars.json');
  const paths = cars.map((car) => ({ params: { carId: car.id.toString() } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const { carId } = ctx.params as Params;

  const cars = await Database.getDatabaseFileData<CarType[]>('cars.json');
  const car = cars.find((car) => car.id === carId) || null;

  return {
    props: { car },
    revalidate: 60,
  };
};

export default CarDetailsPage;
