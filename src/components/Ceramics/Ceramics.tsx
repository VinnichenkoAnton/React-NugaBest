import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';
import Container from '../UI/Container/Container';
import Title from '../UI/Title/Title';
import CeramicsItem from './CeramicsItem/CeramicsItem';

import classes from './Ceramics.module.scss';

import { ceramicsList } from '../../data/data';

const Ceramics: React.FC = () => {
  return (
    <section className={classes.ceramics}>
      <Container>
        <Title text="TURMANIJEVA KERAMIKA" />
        <ul className={classes.ceramics__list}>
          {ceramicsList.map((item) => {
            return (
              <AnimationOnScroll animateIn="animate__backInUp" key={item.id}>
                <CeramicsItem
                  key={item.id}
                  icn={item.icn}
                  title={item.title}
                  description={item.description}
                />
              </AnimationOnScroll>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Ceramics;
