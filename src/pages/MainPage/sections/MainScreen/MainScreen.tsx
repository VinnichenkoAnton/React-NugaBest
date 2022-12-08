import Container from '../../../../components/UI/Container/Container';
import classes from './MainScreen.module.scss';

import backgroundImg from '../../../../resources/mainScreen/mainScreen.jpg';
import backgroundImg2 from '../../../../resources/mainScreen/mainScreen2.jpg';

const MainScreen: React.FC = () => {
  return (
    <section className={classes.mainscreen}>
      <div className={classes.mainscreen__background}>
        <picture>
          <source media="(max-width: 576px)" srcSet={backgroundImg2}></source>
          <img src={backgroundImg} alt="N5" />
        </picture>
      </div>
      <Container>
        <h2 className={classes.mainscreen__title}>BOL U LEĐIMA?</h2>
        <h3 className={classes.mainscreen__subtitle}>zaboravi na nju</h3>
        <h4 className={classes.mainscreen__description}>
          Poklanjamo Vam tretmane na medicinskoj opremi za masažu i korekciju kralježnice.
          Zaboravite bolove u leđima
        </h4>
      </Container>
    </section>
  );
};

export default MainScreen;
