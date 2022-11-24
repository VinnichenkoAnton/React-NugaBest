// import { Helmet } from 'react-helmet';

import Header from '../../layouts/Header/Header';
import ContactsInfo from './sections/ContactsInfo/ContactsInfo';

const ContactsPage: React.FC = () => {
  return (
    <>
      {/* <Helmet>
        <meta
          name="description"
          content="Сторінка контактів сайту компанії Оберіг. Оберіг - охоронная компанія для фізичних осіб та організацій в с.Гатне"
        />
        <title>Оберіг</title>
      </Helmet> */}
      <Header />
      <ContactsInfo />
    </>
  );
};

export default ContactsPage;
