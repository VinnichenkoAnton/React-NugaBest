import Container from '../UI/Container/Container';
import Title from '../UI/Title/Title';

import classes from './VideoWithText.module.scss';

import { VideoWithTextPropsTypes } from './VideoWithText.type';

const VideoWithText: React.FC<VideoWithTextPropsTypes> = ({ video, title, description }) => {
  return (
    <section className={classes.product}>
      <Container>
        <div className={classes.product__container}>
          <div className={classes.product__img}>
            <iframe
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={classes.product__wrapper}>
            <Title text={title} />
            <div className={classes.product__description}>{description}</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VideoWithText;
