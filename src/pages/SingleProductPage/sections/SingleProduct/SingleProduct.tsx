// import ImageGallery from 'react-image-gallery';
// @import '~react-image-gallery/styles/scss/image-gallery.scss';
import Container from '../../../../components/UI/Container/Container';
import Title from '../../../../components/UI/Title/Title';

import classes from './SingleProduct.module.scss';

import { TabListTypes } from '../../../../data/data';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const SingleProduct: React.FC<TabListTypes> = ({
  img,
  title,
  subtitle,
  description,
  additional,
}) => {
  return (
    // <ImageGallery items={images} />
    <section className={classes.product}>
      <Container>
        <div className={classes.product__container}>
          <div className={classes.product__img}>{<img src={img} alt={title} />}</div>
          <div className={classes.product__wrapper}>
            <Title text={title} />
            <div className={classes.product__subtitle}>{subtitle}</div>
            <div className={classes.product__description}>{description}</div>
            <div className={classes.product__additional}>{additional}</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SingleProduct;
