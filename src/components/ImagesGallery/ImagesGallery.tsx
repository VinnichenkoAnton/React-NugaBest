import 'react-image-gallery/styles/scss/image-gallery.scss';
import ImageGallery from 'react-image-gallery';

import { ImagesGalleryTypes } from '../../types/GlobalTypes';

const ImagesGallery: React.FC<{
  images: ImagesGalleryTypes;
}> = ({ images }) => {
  return <ImageGallery items={images} />;
};

export default ImagesGallery;
