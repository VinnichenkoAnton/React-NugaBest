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
              <CeramicsItem
                key={item.id}
                icn={item.icn}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Ceramics;
