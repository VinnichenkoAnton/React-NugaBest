import Container from '../../../../components/UI/Container/Container';
import classes from './MainScreen.module.scss';

const MainScreen: React.FC = () => {
  return (
    <section className={classes.mainscreen}>
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
