import Container from '../../../../components/UI/Container/Container';
import NumericItem from './NumericItem/NumericItem';
import Title from '../../../../components/UI/Title/Title';

import classes from './NumericInfo.module.scss';

import { numericInfoList } from '../../../../data/data';

const NumericInfo: React.FC = () => {
  const numItems = numericInfoList.map(({ id, img, title, amount }) => {
    return <NumericItem key={id} img={img} title={title} amount={amount} />;
  });

  return (
    <section className={classes.numericinfo}>
      <Container>
        <Title className={classes.numericinfo__header} text="O NAMA U BROJKAMA" />
        <ul className={classes.numericinfo__list}>{numItems}</ul>
      </Container>
    </section>
  );
};

export default NumericInfo;
