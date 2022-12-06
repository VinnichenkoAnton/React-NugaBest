import { useState, useEffect, useCallback } from 'react';

import classes from './NumericItem.module.scss';

import { NumericItemPropsTypes } from './NumericItem.type';

const NumericItem: React.FC<NumericItemPropsTypes> = ({ img, title, amount }) => {
  const [slideNumber, setSlideNumber] = useState<number>(0);
  const [sliderTrigger, setSliderTrigger] = useState<boolean>(false);

  const increment: () => void = useCallback(() => {
    const counter: () => void = (length: number = 1500) => {
      setSlideNumber(0);
      let n: number = amount;
      let start: number = Date.now();
      let end: number = start + length;
      let interval: number = length / n;
      const sInt: NodeJS.Timer = setInterval(() => {
        let time: number = Date.now();
        if (time < end) {
          let count: number = Math.floor((time - start) / interval);
          setSlideNumber(count);
        } else {
          setSlideNumber(n);
          clearInterval(sInt);
        }
      }, interval);
    };

    counter();
  }, [amount]);

  document.addEventListener('scroll', async () => {
    const element: HTMLElement = document.getElementById('root')!;
    const elementPosition: number = element!.getBoundingClientRect().top;

    if (window.pageYOffset > elementPosition) setSliderTrigger(true);
  });

  useEffect(() => {
    if (sliderTrigger) {
      increment();
    }
  }, [sliderTrigger, increment]);
  return (
    <li className={classes.numericitem}>
      <div className={classes.numericitem__img}>
        <img src={img} alt={title} />
      </div>
      <div className={classes.numericitem__amount} data-amount={amount}>
        {slideNumber}
      </div>
      <p className={classes.numericitem__title}>{title}</p>
    </li>
  );
};

export default NumericItem;
