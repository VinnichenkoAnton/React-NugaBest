import Container from '../../../../components/UI/Container/Container';
import Title from '../../../../components/UI/Title/Title';
import ImagesGallery from '../../../../components/ImagesGallery/ImagesGallery';

import classes from './SingleProduct.module.scss';

import { TabListTypes } from '../../../../data/data';

const SingleProduct: React.FC<TabListTypes> = ({
  gallery,
  title,
  subtitle,
  description,
  additionalInfo,
}) => {
  const images:
    | {
        original: string;
        thumbnail: string;
      }[]
    | undefined = gallery?.map((item) => {
    return {
      original: item,
      thumbnail: item,
    };
  });
  return (
    <section className={classes.product}>
      <Container>
        <div className={classes.product__container}>
          <ImagesGallery images={images} />
          <div className={classes.product__wrapper}>
            <Title text={title} marginBottom="noMarginBottom" />
            <div className={classes.product__subtitle}>{subtitle}</div>
            <div className={classes.product__description}>{description}</div>
            <div className={classes.product__additional}>{additionalInfo}</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SingleProduct;
