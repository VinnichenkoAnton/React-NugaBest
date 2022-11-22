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
// import { ReactComponent as Videoicn } from '../resources/tabs/private/icns/videoicn.svg';
// import { ReactComponent as Houseicn } from '../resources/tabs/private/icns/houseicn.svg';
// import { ReactComponent as Flaticn } from '../resources/tabs/private/icns/flaticn.svg';
// import { ReactComponent as Alarmicn } from '../resources/tabs/private/icns/alarmicn.svg';
// import { ReactComponent as Complexicn } from '../resources/tabs/private/icns/complexicn.svg';
// import video from '../resources/tabs/private/imgs/video.jpg';
// import house from '../resources/tabs/private/imgs/house.jpg';
// import flat from '../resources/tabs/private/imgs/flat.jpg';
// import alarm from '../resources/tabs/private/imgs/alarm.jpg';
// import complex from '../resources/tabs/private/imgs/complex.jpg';

// //secondTabList
// import { ReactComponent as Enterpreneuricn } from '../resources/tabs/business/icns/enterpreneuricn.svg';
// import { ReactComponent as Storeicn } from '../resources/tabs/business/icns/storeicn.svg';
// import { ReactComponent as Officeicn } from '../resources/tabs/business/icns/officeicn.svg';
// import { ReactComponent as Buildingicn } from '../resources/tabs/business/icns/buildingicn.svg';
// import { ReactComponent as Warehouseicn } from '../resources/tabs/business/icns/warehouseicn.svg';
// import { ReactComponent as Industryicn } from '../resources/tabs/business/icns/industryicn.svg';
// import enterpreneur from '../resources/tabs/business/imgs/enterpreneur.jpg';
// import store from '../resources/tabs/business/imgs/store.jpg';
// import office from '../resources/tabs/business/imgs/office.jpeg';
// import building from '../resources/tabs/business/imgs/building.jpg';
// import warehouse from '../resources/tabs/business/imgs/warehouse.jpg';
// import industry from '../resources/tabs/business/imgs/industry.jpg';

// //advantagesList
// import { ReactComponent as Locationicn } from '../resources/advantages/icns/locationicn.svg';
// import { ReactComponent as Allinclusiveicn } from '../resources/advantages/icns/allinclusiveicn.svg';
// import { ReactComponent as Responsibilityicn } from '../resources/advantages/icns/responsibilityicn.svg';
// import { ReactComponent as Remotecntrlicn } from '../resources/advantages/icns/remotectrlicn.svg';
// import { ReactComponent as Professionalicn } from '../resources/advantages/icns/professionalicn.svg';
// import { ReactComponent as Individualicn } from '../resources/advantages/icns/individualicn.svg';

// //reviewsList
// import reviewImage1 from '../resources/reviews/review_1.jpg';
// import reviewImage2 from '../resources/reviews/review_2.jpg';
// import reviewImage3 from '../resources/reviews/review_3.jpg';

// //ceramicslList
import { ReactComponent as ContactIcn } from '../resources/ceramics/contacticn.svg';
import { ReactComponent as InfoIcn } from '../resources/ceramics/infoicn.svg';
import { ReactComponent as MeetingIcn } from '../resources/ceramics/meetingicn.svg';
import { ReactComponent as ProtectedIcn } from '../resources/ceramics/protectedicn.svg';

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

// export const firstTabList = [
//   {
//     id: 'ft1',
//     title: 'Відеоспостереження',
//     img: video,
//     icn: Videoicn,
//     description:
//       'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
//     eqvprice: 'Від 5000 грн',
//     monthprice: 'Від 300грн/місяць',
//   },
//   {
//     id: 'ft2',
//     title: 'Охорона будинків',
//     img: house,
//     icn: Houseicn,
//     description:
//       'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
//     eqvprice: 'Від 5000 грн',
//     monthprice: 'Від 300грн/місяць',
//   },
//   {
//     id: 'ft3',
//     title: 'Охорона квартир',
//     img: flat,
//     icn: Flaticn,
//     description:
//       'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
//     eqvprice: 'Від 5000 грн',
//     monthprice: 'Від 300грн/місяць',
//   },
//   {
//     id: 'ft4',
//     title: 'Охоронна сигналізація',
//     img: alarm,
//     icn: Alarmicn,
//     description:
//       'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
//     eqvprice: 'Від 5000 грн',
//     monthprice: 'Від 300грн/місяць',
//   },
//   {
//     id: 'ft5',
//     title: 'Охорона житлових комплексів',
//     img: complex,
//     icn: Complexicn,
//     description:
//       'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
//     eqvprice: 'Від 5000 грн',
//     monthprice: 'Від 300грн/місяць',
//   },
// ];

// export const secondTabList = [
//   {
//     id: 'st1',
//     title: 'Охорона підприємств',
//     img: enterpreneur,
//     icn: Enterpreneuricn,
//     description:
//       'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
//     eqvprice: 'Від 5000 грн',
//     monthprice: 'Від 300грн/місяць',
//   },
//   {
//     id: 'st2',
//     title: 'Охорона магазинів',
//     img: store,
//     icn: Storeicn,
//     description:
//       'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
//     eqvprice: 'Від 5000 грн',
//     monthprice: 'Від 300грн/місяць',
//   },
//   {
//     id: 'st3',
//     title: 'Охорона офісів',
//     img: office,
//     icn: Officeicn,
//     description:
//       'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
//     eqvprice: 'Від 5000 грн',
//     monthprice: 'Від 300грн/місяць',
//   },
//   {
//     id: 'st4',
//     title: 'Охоронна будівництва',
//     img: building,
//     icn: Buildingicn,
//     description:
//       'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
//     eqvprice: 'Від 5000 грн',
//     monthprice: 'Від 300грн/місяць',
//   },
//   {
//     id: 'st5',
//     title: 'Охорона нежитлових приміщень',
//     img: warehouse,
//     icn: Warehouseicn,
//     description:
//       'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
//     eqvprice: 'Від 5000 грн',
//     monthprice: 'Від 300грн/місяць',
//   },
//   {
//     id: 'st6',
//     title: "Охорона промислових об'єктів",
//     img: industry,
//     icn: Industryicn,
//     description:
//       'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
//     eqvprice: 'Від 5000 грн',
//     monthprice: 'Від 300грн/місяць',
//   },
// ];

// export const advantagesList = [
//   {
//     id: uuidv4(),
//     subtitle: 'Працюємо під ключ',
//     description:
//       'Беремо на себе всі питання: охоронна сигналізація, сервісне обслуговування, цілодобовий захист',
//     icn: Allinclusiveicn,
//   },
//   {
//     id: uuidv4(),
//     subtitle: 'Ми завжди поряд',
//     description: 'Групи швидкого реагування завжди на чергуванні поряд з Вами. Прибуття 2-10 хв',
//     icn: Locationicn,
//   },
//   {
//     id: uuidv4(),
//     subtitle: 'Відповідальність',
//     description: "Ми сумлінно виконуємо свої обов'язки і виїзджаємо на кожен виклик",
//     icn: Responsibilityicn,
//   },
//   {
//     id: uuidv4(),
//     subtitle: 'Пультова система',
//     description: 'Власний пульт моніторингу працює 24/7',
//     icn: Remotecntrlicn,
//   },
//   {
//     id: uuidv4(),
//     subtitle: 'Професіоналізм',
//     description: 'У нас працюють лише висококваліфіковані спеціалісти',
//     icn: Professionalicn,
//   },
//   {
//     id: uuidv4(),
//     subtitle: 'Персональний підхід',
//     description: 'Ми працюємо з клієнтом індивідуально для задоволення потреб кожного',
//     icn: Individualicn,
//   },
// ];

// export const reviewsList = [
//   {
//     img: reviewImage1,
//     alt: 'Фото першого автора',
//     title: 'Ложкіна Олена',
//     description:
//       'Задоволена роботою компанії на всі 100, кілька разів спрацювувала сигналізація, екіпаж прибуває буквально за пару хвилин. Лайк за оперативність!!!',
//   },
//   {
//     img: reviewImage2,
//     alt: 'Фото другого автора',
//     title: 'Миль Богдан',
//     description:
//       'Якість охорони на рівні. Ціни доступні. Рекомендую. Користуюсь послугами компанії уже більше року.',
//   },
//   {
//     img: reviewImage3,
//     alt: 'Фото третього автора',
//     title: 'Кобка Анастасія',
//     description:
//       'Все дуже оперативно і якісно: лишила на сайті заявку, менш ніж через 2 хвилини зателефонував менеджер, який проконсультував мене максимально повно і зрозуміло, відповівши на всі питання, які в мене виникли як у дуже далекої від техніки людини)) Уже наступного ранку працівники встановили всі датчики',
//   },
// ];

export const ceramicsList = [
  {
    id: uuidv4(),
    title: 'TURMALIN',
    description: [
      'Pri zagrijavanju zrači niskofrekventnim magnetnim poljem/, isijava INF. zračenje, Anione',
      'Potiče jačanje metabolizma stanica, izmjenu tvari u organizmu. Potiče obnovu limfnog i hormonalnog sustava',
      'Potiče jačanje imuniteta',
      'Osigurava energiju za organizam',
      'Poboljšava dotok hrane u organe i tkiva',
      'Poboljšava kvalitetu krvi',
      'Razrjeđuje gustu',
    ],
    icn: ContactIcn,
  },
  {
    id: uuidv4(),
    title: 'ELVAN',
    description: [
      'Pri zagrijavanju zrači niskofrekventnim magnetnim poljem/, isijava INF. zračenje, Anione',
      'Potiče jačanje metabolizma stanica, izmjenu tvari u organizmu. Potiče obnovu limfnog i hormonalnog sustava',
      'Potiče jačanje imuniteta',
      'Osigurava energiju za organizam',
      'Poboljšava dotok hrane u organe i tkiva',
      'Poboljšava kvalitetu krvi',
      'Razrjeđuje gustu',
    ],
    icn: InfoIcn,
  },
  {
    id: uuidv4(),
    title: 'GERMANIJ',
    description: [
      'Pri zagrijavanju zrači niskofrekventnim magnetnim poljem/, isijava INF. zračenje, Anione',
      'Potiče jačanje metabolizma stanica, izmjenu tvari u organizmu. Potiče obnovu limfnog i hormonalnog sustava',
      'Potiče jačanje imuniteta',
      'Osigurava energiju za organizam',
      'Poboljšava dotok hrane u organe i tkiva',
      'Poboljšava kvalitetu krvi',
      'Razrjeđuje gustu',
    ],
    icn: MeetingIcn,
  },
  {
    id: uuidv4(),
    title: 'VULKANSKE STIJENE',
    description: [
      'Pri zagrijavanju zrači niskofrekventnim magnetnim poljem/, isijava INF. zračenje, Anione',
      'Potiče jačanje metabolizma stanica, izmjenu tvari u organizmu. Potiče obnovu limfnog i hormonalnog sustava',
      'Potiče jačanje imuniteta',
      'Osigurava energiju za organizam',
      'Poboljšava dotok hrane u organe i tkiva',
      'Poboljšava kvalitetu krvi',
      'Razrjeđuje gustu',
    ],
    icn: ProtectedIcn,
  },
];

// export const footerSocialList = [
//   { id: uuidv4(), link: '#', Icn: InstagramIcn },
//   { id: uuidv4(), link: '#', Icn: FacebookIcn },
//   { id: uuidv4(), link: '#', Icn: YoutubeIcn },
// ];
