import Container from '../../../../components/UI/Container/Container';
import Title from '../../../../components/UI/Title/Title';
import ContactLink from '../../../../components/ContactLink/ContactLink';

import classes from './ContactsInfo.module.scss';

import { ReactComponent as Phoneicn } from '../../../../resources/header/phoneicn.svg';
import { ReactComponent as Emailicn } from '../../../../resources/header/emailicn.svg';
import { contactsList } from '../../../../data/data';

const ContactsInfo: React.FC = () => {
  return (
    <section className={classes.continfo}>
      <Container>
        <Title text="Naši kontakti" />
        {contactsList.map((item) => {
          return (
            <div className={classes.continfo__wrapper} key={item.id}>
              <div className={classes.continfo__info}>
                <p className={classes.continfo__description}>{item.address}</p>
                <div className={classes.continfo__subtitle}>Telefon</div>
                <ContactLink
                  className={classes.continfo__contactlink}
                  href={`tel:${item.phone}`}
                  Icn={Phoneicn}
                  text={item.phone}
                />
                <div className={classes.continfo__subtitle}>Ili nam pišite na mail</div>
                <ContactLink
                  className={classes.continfo__contactlink}
                  href={`mailto:${item.email}`}
                  Icn={Emailicn}
                  text={item.email}
                />
              </div>
              <div className={classes.continfo__map}>
                <iframe
                  title="Location"
                  src={item.map}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default ContactsInfo;
