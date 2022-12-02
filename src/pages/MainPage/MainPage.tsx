// import { Helmet } from 'react-helmet';

import Header from '../../layouts/Header/Header';
import MainScreen from './sections/MainScreen/MainScreen';
// import Slider from '../../components/Slider/Slider';
import NumericInfo from './sections/NumericInfo/NumericInfo';
import VideoWithText from '../../components/VideoWithText/VideoWithText';
import Health from './sections/Health/Health';
import Ceramics from '../../components/Ceramics/Ceramics';
import Videos from './sections/Videos/Videos';

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
      <VideoWithText
        video="https://www.youtube.com/embed/Z_41lwfaNmk"
        title="VODEĆA MEĐUNARODNA KOMPANIJA"
        description='"Mi služimo čovječanstvu u skladu sa svojim srcem, donoseći zdravlje, integritet i ljubav. U našima salonima, koristeći novu tehnologiju zdravlja i jedinstveni marketing, postižemo svoj glavni cilj - usrećiti ljude!"'
      />
      <Health />
      <Ceramics />
      <Videos />
    </>
  );
};

export default MainPage;
