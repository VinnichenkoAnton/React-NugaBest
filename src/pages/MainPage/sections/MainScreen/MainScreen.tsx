import Container from '../../../../components/UI/Container/Container';
import classes from './MainScreen.module.scss';

import backgroundImg from '../../../../resources/mainScreen/mainScreen.jpg';

const MainScreen: React.FC = () => {
  return (
    <section className={classes.mainscreen}>
      <div className={classes.mainscreen__background}>
        <img src={backgroundImg} alt="N5" />
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
