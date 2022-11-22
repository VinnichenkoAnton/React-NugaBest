import Container from '../../../../components/UI/Container/Container';
import Title from '../../../../components/UI/Title/Title';

import classes from './Health.module.scss';

const Health: React.FC = () => {
  return (
    <section className={classes.health}>
      <Container>
        <Title className={classes.health__title} text="ZDRAVLJE, SPA I WELLNES I U VAŠEM DOMU" />
        <p className={classes.health__description}>
          Medicinsku opremu Nuga Best možete koristiti i u udobnosti vlastitog doma, ukoliko se
          odlučite za kupnju ovih kvalitetnih proizvoda za postizanje boljeg zdravlja, vitalnosti i
          kvalitete života.
        </p>
        <p className={classes.health__description}>
          Naša medicinska oprema je namijenjena za kućnu uporabu, a najbolji i trajni rezultati
          dobivaju se njezinim višekratnim i svakodnevnim korištenjem kod kuće.
        </p>
      </Container>
    </section>
  );
};

export default Health;
