import { Helmet } from 'react-helmet';

import Header from '../../layouts/Header/Header';
import ContactsInfo from './sections/ContactsInfo/ContactsInfo';

const ContactsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Kontakt stranica web stranice Nuga Best Croatia. Nuga Best Croatia je ovlašteni distributer ekskluzivnih medicinskih proizvoda Nuga Best"
        />
        <title>Nuga Best Croatia</title>
      </Helmet>
      <Header />
      <ContactsInfo />
    </>
  );
};

export default ContactsPage;
