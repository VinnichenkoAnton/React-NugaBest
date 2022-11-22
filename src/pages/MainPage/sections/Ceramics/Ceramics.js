import Container from '../../../../components/UI/Container/Container';
import Title from '../../../../components/UI/Title/Title';
import CeramicsItem from './CeramicsItem/CeramicsItem';

import classes from './Ceramics.module.scss';

import { ceramicsList } from '../../../../data/data';

const Ceramics = () => {
  return (
    <section className={classes.ceramics}>
      <Container>
        <Title text="TURMANIJEVA KERAMIKA" />
        <ul className={classes.ceramics__list}>
          {ceramicsList.map((item, index) => {
            return (
              <CeramicsItem
                key={item.id}
                Icn={item.icn}
                title={item.title}
                description={item.description}
                order={index}
              />
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Ceramics;
