import { Helmet } from 'react-helmet';

import Header from '../../layouts/Header/Header';
import Ceramics from '../../components/Ceramics/Ceramics';
import Tabs from './sections/Tabs/Tabs';

const AboutCompanyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Stranica naših proizvoda na web stranici Nuga Best Croatia. Nuga Best Croatia je ovlašteni distributer ekskluzivnih medicinskih proizvoda Nuga Best"
        />
        <title>Nuga Best Croatia</title>
      </Helmet>
      <Header />
      <Tabs />
      <Ceramics />
    </>
  );
};

export default AboutCompanyPage;
