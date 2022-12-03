import 'react-image-gallery/styles/scss/image-gallery.scss';
import ImageGallery from 'react-image-gallery';

const ImagesGallery: React.FC<{
  images: any;
}> = ({ images }) => {
  return <ImageGallery items={images} />;
};

export default ImagesGallery;
