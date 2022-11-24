import { v4 as uuidv4 } from 'uuid';

//sliderImagesList
import sliderImage1 from '../resources/slider/imgs/img1.jpg';
import sliderImage2 from '../resources/slider/imgs/img2.jpg';
import sliderImage3 from '../resources/slider/imgs/img3.jpg';

//numericInfoList
import established from '../resources/numericInfo/established.svg';
import workers from '../resources/numericInfo/workers.svg';
import customers from '../resources/numericInfo/customers.svg';
import prizes from '../resources/numericInfo/prizes.svg';

// //firstTabList
import { ReactComponent as Videoicn } from '../resources/tabs/private/icns/videoicn.svg';
import { ReactComponent as Houseicn } from '../resources/tabs/private/icns/houseicn.svg';
import { ReactComponent as Flaticn } from '../resources/tabs/private/icns/flaticn.svg';
import { ReactComponent as Alarmicn } from '../resources/tabs/private/icns/alarmicn.svg';
import { ReactComponent as Complexicn } from '../resources/tabs/private/icns/complexicn.svg';
import video from '../resources/tabs/private/imgs/video.jpg';
import house from '../resources/tabs/private/imgs/house.jpg';
import flat from '../resources/tabs/private/imgs/flat.jpg';
import alarm from '../resources/tabs/private/imgs/alarm.jpg';
import complex from '../resources/tabs/private/imgs/complex.jpg';

// //secondTabList
import { ReactComponent as Enterpreneuricn } from '../resources/tabs/business/icns/enterpreneuricn.svg';
import { ReactComponent as Storeicn } from '../resources/tabs/business/icns/storeicn.svg';
import { ReactComponent as Officeicn } from '../resources/tabs/business/icns/officeicn.svg';
import { ReactComponent as Buildingicn } from '../resources/tabs/business/icns/buildingicn.svg';
import { ReactComponent as Warehouseicn } from '../resources/tabs/business/icns/warehouseicn.svg';
import { ReactComponent as Industryicn } from '../resources/tabs/business/icns/industryicn.svg';
import enterpreneur from '../resources/tabs/business/imgs/enterpreneur.jpg';
import store from '../resources/tabs/business/imgs/store.jpg';
import office from '../resources/tabs/business/imgs/office.jpeg';
import building from '../resources/tabs/business/imgs/building.jpg';
import warehouse from '../resources/tabs/business/imgs/warehouse.jpg';
import industry from '../resources/tabs/business/imgs/industry.jpg';

// //ceramicslList
import ceramics1 from '../resources/ceramics/ceramics1.png';
import ceramics2 from '../resources/ceramics/ceramics2.png';
import ceramics3 from '../resources/ceramics/ceramics3.png';
import ceramics4 from '../resources/ceramics/ceramics4.png';

// //footerSocialList
// import { ReactComponent as InstagramIcn } from '../resources/footer/instagramicn.svg';
// import { ReactComponent as FacebookIcn } from '../resources/footer/facebookicn.svg';
// import { ReactComponent as YoutubeIcn } from '../resources/footer/youtubeicn.svg';

interface NavigationListTypes {
  text: string;
  to: string;
}
export const navigationList: NavigationListTypes[] = [
  {
    text: 'O NAMA',
    to: '/',
  },
  {
    text: 'PROIZVODI',
    to: '/products',
  },
  {
    text: 'KONTAKTI',
    to: '/contacts',
  },
];

export interface SliderImagesListTypes {
  img: string;
  alt: string;
}
export const sliderImagesList: SliderImagesListTypes[] = [
  { img: sliderImage1, alt: 'NugaBest photo 1' },
  { img: sliderImage2, alt: 'NugaBest photo 2' },
  { img: sliderImage3, alt: 'NugaBest photo 3' },
];

interface NumericListTypes {
  id: string;
  img: string;
  title: string;
  amount: number;
}
export const numericInfoList: NumericListTypes[] = [
  { id: uuidv4(), img: established, title: 'Років', amount: 10 },
  { id: uuidv4(), img: workers, title: 'Працівників', amount: 100 },
  { id: uuidv4(), img: customers, title: 'Клієнтів', amount: 200 },
  { id: uuidv4(), img: prizes, title: "Об'єктів", amount: 50 },
];

export const firstTabList = [
  {
    id: 'ft1',
    title: 'Відеоспостереження',
    img: video,
    icn: Videoicn,
    description:
      'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
    eqvprice: 'Від 5000 грн',
    monthprice: 'Від 300грн/місяць',
  },
  {
    id: 'ft2',
    title: 'Охорона будинків',
    img: house,
    icn: Houseicn,
    description:
      'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
    eqvprice: 'Від 5000 грн',
    monthprice: 'Від 300грн/місяць',
  },
  {
    id: 'ft3',
    title: 'Охорона квартир',
    img: flat,
    icn: Flaticn,
    description:
      'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
    eqvprice: 'Від 5000 грн',
    monthprice: 'Від 300грн/місяць',
  },
  {
    id: 'ft4',
    title: 'Охоронна сигналізація',
    img: alarm,
    icn: Alarmicn,
    description:
      'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
    eqvprice: 'Від 5000 грн',
    monthprice: 'Від 300грн/місяць',
  },
  {
    id: 'ft5',
    title: 'Охорона житлових комплексів',
    img: complex,
    icn: Complexicn,
    description:
      'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
    eqvprice: 'Від 5000 грн',
    monthprice: 'Від 300грн/місяць',
  },
];

export const secondTabList = [
  {
    id: 'st1',
    title: 'Охорона підприємств',
    img: enterpreneur,
    icn: Enterpreneuricn,
    description:
      'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
    eqvprice: 'Від 5000 грн',
    monthprice: 'Від 300грн/місяць',
  },
  {
    id: 'st2',
    title: 'Охорона магазинів',
    img: store,
    icn: Storeicn,
    description:
      'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
    eqvprice: 'Від 5000 грн',
    monthprice: 'Від 300грн/місяць',
  },
  {
    id: 'st3',
    title: 'Охорона офісів',
    img: office,
    icn: Officeicn,
    description:
      'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
    eqvprice: 'Від 5000 грн',
    monthprice: 'Від 300грн/місяць',
  },
  {
    id: 'st4',
    title: 'Охоронна будівництва',
    img: building,
    icn: Buildingicn,
    description:
      'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
    eqvprice: 'Від 5000 грн',
    monthprice: 'Від 300грн/місяць',
  },
  {
    id: 'st5',
    title: 'Охорона нежитлових приміщень',
    img: warehouse,
    icn: Warehouseicn,
    description:
      'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
    eqvprice: 'Від 5000 грн',
    monthprice: 'Від 300грн/місяць',
  },
  {
    id: 'st6',
    title: "Охорона промислових об'єктів",
    img: industry,
    icn: Industryicn,
    description:
      'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
    eqvprice: 'Від 5000 грн',
    monthprice: 'Від 300грн/місяць',
  },
];

export interface CeramicsListTypes {
  id?: string;
  title: string;
  description: string[];
  icn: string;
}
export const ceramicsList: CeramicsListTypes[] = [
  {
    id: uuidv4(),
    title: 'TURMALIN',
    description: [
      'Potiče jačanje metabolizma stanica, izmjenu tvari u organizmu',
      'Potiče jačanje imuniteta',
      'Poboljšava dotok hrane u organe i tkiva',
      'Poboljšava kvalitetu krvi',
      'Razrjeđuje gustu',
    ],
    icn: ceramics1,
  },
  {
    id: uuidv4(),
    title: 'ELVAN',
    description: [
      'Mineral koristan za zdravlje kože',
      'Apsorbira štetne tvari i teške elemente',
      'Čisti vodu',
      'Izvor je dugovalnog infracrvenog zračenja',
    ],
    icn: ceramics2,
  },
  {
    id: uuidv4(),
    title: 'GERMANIJ',
    description: [
      'Prenosi kisik (O2) u tkivima organizma',
      'Ima biocidni učinak (antivirusna, antifugicidna, antibakterijska svojstva)',
      'Smanjuje bol',
      'Stimulira imunitet',
    ],
    icn: ceramics3,
  },
  {
    id: uuidv4(),
    title: 'VULKANSKE STIJENE',
    description: [
      'Zahvaljujući njima legura poprima čvrstoću',
      'Glavna je prednost: Dugo zadržavanje topline',
    ],
    icn: ceramics4,
  },
];

export interface VideosListTypes {
  id: string;
  title: string;
  video: string;
}
export const videosList: VideosListTypes[] = [
  {
    id: uuidv4(),
    title: 'Učinak TURMANIJA i NANO-DIJAMANTNE Turmanijeve keramike na LJUDSKO TIJELO',
    video: 'https://www.youtube.com/embed/OJuHxaFhbNc',
  },
  {
    id: uuidv4(),
    title: 'TOP 5 razloga za kupnju NUGA BEST N5 masažera',
    video: 'https://www.youtube.com/embed/HtmuzXLYS04',
  },
  {
    id: uuidv4(),
    title: 'Najpopularniji NUGA BEST proizvod | Prednosti Turmanijeve Prostirke',
    video: 'https://www.youtube.com/embed/2S48_rcvEp8',
  },
  {
    id: uuidv4(),
    title: 'Zašto je TURMANIJ dobar za vaše tijelo? UNIVERZALNI uređaj za JAČANJE ZDRAVLJA',
    video: 'https://www.youtube.com/embed/a3VV2rGUeVc',
  },
  {
    id: uuidv4(),
    title:
      'Riješit će vas BOLOVA u NOGAMA! Podcast s liječnikom o prevenciji bolesti nogu i masaži. Zdravlje TV',
    video: 'https://www.youtube.com/embed/rUNPBgVsIwg',
  },
  {
    id: uuidv4(),
    title: 'KAKO poboljšati cjelokupno stanje TIJELA | Prednosti toplinskog stimulatora MHP-100',
    video: 'https://www.youtube.com/embed/-Gk4mlC5VAE',
  },
];

export interface ContactsListTypes {
  id: string;
  address: string;
  phone: string;
  email: string;
  map: string;
}
export const contactsList: ContactsListTypes[] = [
  {
    id: uuidv4(),
    address: 'Bosutska, 9, 10000 Zagreb',
    phone: '+385923435203',
    email: 'mail@gmail.com',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.4190019442008!2d30.394320315727978!3d50.358741079462746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c9cf4d9d10cb%3A0xe0d580cdbf6c61af!2z0LLRg9C7LiDQmtC40ZfQstGB0YzQutCwLCAxMzgsINCT0LDRgtC90LUsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC7LiwgMDgxNjA!5e0!3m2!1sru!2sua!4v1667228260087!5m2!1sru!2sua',
  },
  {
    id: uuidv4(),
    address: 'Ulica Franа Supila 11, 51000 Rijeka',
    phone: '+385922305759',
    email: 'mail@gmail.com',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.4190019442008!2d30.394320315727978!3d50.358741079462746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c9cf4d9d10cb%3A0xe0d580cdbf6c61af!2z0LLRg9C7LiDQmtC40ZfQstGB0YzQutCwLCAxMzgsINCT0LDRgtC90LUsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC7LiwgMDgxNjA!5e0!3m2!1sru!2sua!4v1667228260087!5m2!1sru!2sua',
  },
  {
    id: uuidv4(),
    address: 'Prve poljanice 6, 10000, Zagreb',
    phone: '+385925027264',
    email: 'mail@gmail.com',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.4190019442008!2d30.394320315727978!3d50.358741079462746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c9cf4d9d10cb%3A0xe0d580cdbf6c61af!2z0LLRg9C7LiDQmtC40ZfQstGB0YzQutCwLCAxMzgsINCT0LDRgtC90LUsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC7LiwgMDgxNjA!5e0!3m2!1sru!2sua!4v1667228260087!5m2!1sru!2sua',
  },
  {
    id: uuidv4(),
    address: 'ul. Dužice 20, 10000, Zagreb',
    phone: '+385924178472',
    email: 'mail@gmail.com',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.4190019442008!2d30.394320315727978!3d50.358741079462746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c9cf4d9d10cb%3A0xe0d580cdbf6c61af!2z0LLRg9C7LiDQmtC40ZfQstGB0YzQutCwLCAxMzgsINCT0LDRgtC90LUsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC7LiwgMDgxNjA!5e0!3m2!1sru!2sua!4v1667228260087!5m2!1sru!2sua',
  },
  {
    id: uuidv4(),
    address: 'Komarski put 14, 10000, Zagreb',
    phone: '+385991927120',
    email: 'mail@gmail.com',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.4190019442008!2d30.394320315727978!3d50.358741079462746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c9cf4d9d10cb%3A0xe0d580cdbf6c61af!2z0LLRg9C7LiDQmtC40ZfQstGB0YzQutCwLCAxMzgsINCT0LDRgtC90LUsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC7LiwgMDgxNjA!5e0!3m2!1sru!2sua!4v1667228260087!5m2!1sru!2sua',
  },
];

// export const footerSocialList = [
//   { id: uuidv4(), link: '#', Icn: InstagramIcn },
//   { id: uuidv4(), link: '#', Icn: FacebookIcn },
//   { id: uuidv4(), link: '#', Icn: YoutubeIcn },
// ];
