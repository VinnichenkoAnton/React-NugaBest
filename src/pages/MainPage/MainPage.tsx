// import { Helmet } from 'react-helmet';

import Header from '../../layouts/Header/Header';
import MainScreen from './sections/MainScreen/MainScreen';
// import Slider from '../../components/Slider/Slider';
import NumericInfo from './sections/NumericInfo/NumericInfo';
// import ContactUs from '../../components/ContactUs/ContactUs';
// import Tabs from '../../components/Tabs/Tabs';
// import Advantages from './sections/Advantages/Advantages';
// import Footer from '../../layouts/Footer/Footer';

// import { sliderImagesList } from '../../data/data';

const MainPage: React.FC = () => {
  return (
    <>
      {/* <Helmet>
        <meta
          name="description"
          content="Головна сторінка сайту Оберіг. Оберіг - охоронная компанія для фізичних осіб та організацій в с.Гатне"
        />
        <title>Оберіг</title>
      </Helmet> */}

      <Header />
      <MainScreen />

      {/* <Slider autoPlay={false} controls={true} sliderContent={sliderImagesList} /> */}
      <NumericInfo />
      {/* <Tabs />
      <Advantages />
      <Footer /> */}
    </>
  );
};

export default MainPage;
