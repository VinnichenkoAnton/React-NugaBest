import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';

// import classes from './ImagesGallery.module.scss';

const ImagesGallery: React.FC<{ images: any }> = ({ images }) => {
  return <ImageGallery items={images} />;
};

export default ImagesGallery;

// originalClass: any
// originalClass,
// originalClass={classes.gallery__img}
