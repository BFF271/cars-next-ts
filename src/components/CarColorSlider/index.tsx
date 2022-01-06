import { useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import * as S from './styles';

SwiperCore.use([Navigation]);

type CarColor = {
  color: string;
  image: string;
};

export type CarColorsSliderProps = {
  currentSlideIndex: number;
  carColors: CarColor[];
  handleSelectCarColor: (newIndex: number) => void;
};

export function CarColorsSlider({
  currentSlideIndex,
  carColors,
  handleSelectCarColor,
}: CarColorsSliderProps) {
  const navPrevButton = useRef<HTMLButtonElement>(null);
  const navNextButton = useRef<HTMLButtonElement>(null);

  function onBeforeInit(Swiper: SwiperCore) {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const { navigation } = Swiper.params;
      navigation!.prevEl = navPrevButton.current;
      navigation!.nextEl = navNextButton.current;
    }
  }

  return (
    <S.Container>
      <S.NavigationButton ref={navPrevButton} side="left">
        <S.ArrowLeftIcon />
      </S.NavigationButton>

      <S.NavigationButton ref={navNextButton} side="right">
        <S.ArrowRightIcon />
      </S.NavigationButton>

      <S.Slider
        loop
        centeredSlides
        slidesPerView={1}
        spaceBetween={64}
        breakpoints={{
          1000: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          prevEl: navPrevButton.current,
          nextEl: navNextButton.current,
        }}
        slideToClickedSlide
        onTransitionEnd={(swiper) => handleSelectCarColor(swiper.realIndex)}
        onBeforeInit={(swiper) => onBeforeInit(swiper)}
      >
        {carColors.map(({ color, image }, index) => {
          const isActive = currentSlideIndex === index;

          return (
            <SwiperSlide key={color} style={{ height: 'auto' }}>
              <S.Slide>
                <S.Car isActive={isActive}>
                  <S.Thumb src={image} isActive={isActive} />
                </S.Car>
              </S.Slide>
            </SwiperSlide>
          );
        })}
      </S.Slider>
    </S.Container>
  );
}
