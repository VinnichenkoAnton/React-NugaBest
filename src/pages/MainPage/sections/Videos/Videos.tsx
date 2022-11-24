import Container from '../../../../components/UI/Container/Container';
import Title from '../../../../components/UI/Title/Title';

import classes from './Videos.module.scss';

import { videosList } from '../../../../data/data';

const Videos: React.FC = () => {
  return (
    <section className={classes.videos}>
      <Container>
        <Title text="Videos" />
        <ul className={classes.videos__content}>
          {videosList.map((item) => {
            return (
              <li className={classes.videos__item} key={item.id}>
                <iframe title={item.title} src={item.video}></iframe>
                <h3 className={classes.videos__subtitle}>{item.title}</h3>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Videos;
