import React, { useEffect, useState, createContext } from 'react';

import Arrows from './SliderComponents/Controls/Arrows';
import Dots from './SliderComponents/Controls/Dots';
import SlidesList from './SliderComponents/SlidesList';

import classes from './Slider.module.scss';

import { SliderImagesListTypes } from '../../data/data';

export const SliderContext = createContext<SliderContextTypes>({
  goToSlide: () => {},
  changeSlide: () => {},
  slidesCount: null,
  slideNumber: null,
  items: [],
});

type SliderContextTypes = {
  goToSlide: (number: number) => void;
  changeSlide: (direction: number) => void;
  slidesCount: number | null;
  slideNumber: number | null;
  items: SliderImagesListTypes[] | [] | null;
};

interface SliderPropsTypes {
  autoPlay?: boolean;
  autoPlayTime?: number;
  width?: string;
  height?: string;
  controls?: boolean;
  subdivided?: boolean;
  sliderContent: SliderImagesListTypes[] | [];
}
const Slider: React.FC<SliderPropsTypes> = ({
  autoPlay = true,
  autoPlayTime = 4000,
  width = '100%',
  height = '100%',
  controls = false,
  subdivided = false,
  sliderContent,
}) => {
  const [items, setItems] = useState<SliderImagesListTypes[] | []>([]);
  const [slide, setSlide] = useState<number>(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  useEffect(() => {
    setItems(sliderContent);
  }, [sliderContent]);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number: number) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (event: any) => {
    const touchDown = event.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (event: any) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = event.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide]); // when images uploaded or slide changed manually we start timer

  return (
    <section
      style={{ width, height }}
      className={classes.slider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        {controls && <Arrows />}
        <SlidesList subdivided={subdivided} />
        <Dots />
      </SliderContext.Provider>
    </section>
  );
};

export default Slider;
