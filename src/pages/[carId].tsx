import { useCallback, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';

import { CarColorsSlider, DetailedCar } from '@components';

import { CarType } from '@shared/types';

import * as S from '@pageStyles/CarDetails';

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
          <S.Wrapper>
            <S.SadIcon />
            <S.Message>
              Oops...an error occurred contacting the server
              <br />
              or this is a non-existent car.
            </S.Message>
          </S.Wrapper>
        )}

        {car && (
          <>
            <DetailedCar
              car={car}
              color={car.colors[currentIndex].color}
              image={car.colors[currentIndex].image}
              index={currentIndex}
            />
            {car.colors.length > 1 && (
              <CarColorsSlider
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
  const carsDatabasePath = path.join(process.cwd(), 'database', 'cars.json');
  const fileContent = fs.readFileSync(carsDatabasePath) as unknown as string;

  const cars: CarType[] = JSON.parse(fileContent);

  const paths = cars.map((car) => ({ params: { carId: car.id.toString() } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const { carId } = ctx.params as Params;

  const carsDatabasePath = path.join(process.cwd(), 'database', 'cars.json');
  const fileContent = fs.readFileSync(carsDatabasePath) as unknown as string;

  const cars: CarType[] = JSON.parse(fileContent);
  const car = cars.find((car) => car.id === +carId) || null;

  return {
    props: { car },
    revalidate: 60,
  };
};

export default CarDetailsPage;
