// import { Helmet } from 'react-helmet';

import Header from '../../layouts/Header/Header';
import Tabs from './sections/Tabs/Tabs';

const AboutCompanyPage: React.FC = () => {
  return (
    <>
      {/* <Helmet>
        <meta
          name="description"
          content="Cторінка Наші Послуги сайту Оберіг. Оберіг - охоронная компанія для фізичних осіб та організацій в с.Гатне"
        />
        <title>Оберіг</title>
      </Helmet> */}
      <Header />
      <Tabs />
    </>
  );
};

export default AboutCompanyPage;
