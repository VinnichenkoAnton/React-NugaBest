import { ReactNode } from 'react';
import Container from '../../components/UI/Container/Container';
import Title from '../../components/UI/Title/Title';

import classes from './SingleProduct.module.scss';

interface SingleProductPropsTypes {
  picture: ReactNode;
  title: string;
  description: string;
}
const SingleProduct: React.FC<SingleProductPropsTypes> = ({ picture, title, description }) => {
  return (
    <section className={classes.product}>
      <Container>
        <div className={classes.product__container}>
          <div className={classes.product__img}>{picture}</div>
          <div className={classes.product__wrapper}>
            <Title text={title} />
            <div className={classes.product__description}>{description}</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SingleProduct;
