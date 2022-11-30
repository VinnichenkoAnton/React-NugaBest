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
import n4 from '../resources/tabs/beds/imgs/n4.png';
import { textN4 } from '../resources/tabs/beds/texts';
import n5 from '../resources/tabs/beds/imgs/n5.jpg';
import { textN5 } from '../resources/tabs/beds/texts';

// //secondTabList
import t20 from '../resources/tabs/otherEquipment/imgs/t20.jpg';
import t11p from '../resources/tabs/otherEquipment/imgs/t11p.jpg';
import nm80 from '../resources/tabs/otherEquipment/imgs/nm80.jpg';
import nm90 from '../resources/tabs/otherEquipment/imgs/nm90.jpg';
import mhp100 from '../resources/tabs/otherEquipment/imgs/mhp100.jpg';
import e5 from '../resources/tabs/otherEquipment/imgs/e5.jpg';
import e3 from '../resources/tabs/otherEquipment/imgs/e3.jpg';
import nm200 from '../resources/tabs/otherEquipment/imgs/nm200.jpg';

// //ceramicslList
import ceramics1 from '../resources/ceramics/ceramics1.png';
import ceramics2 from '../resources/ceramics/ceramics2.png';
import ceramics3 from '../resources/ceramics/ceramics3.png';
import ceramics4 from '../resources/ceramics/ceramics4.png';

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
  { id: uuidv4(), img: established, title: 'Godine', amount: 10 },
  { id: uuidv4(), img: workers, title: 'Zaposlenici', amount: 100 },
  { id: uuidv4(), img: customers, title: 'Kupci', amount: 200 },
  { id: uuidv4(), img: prizes, title: 'Predmeti', amount: 50 },
];

export interface TabListTypes {
  id: string;
  title: string;
  img: string;
  subtitle?: string;
  description: string;
  additional?: JSX.Element;
}
export const firstTabList: TabListTypes[] = [
  {
    id: 'ft1',
    title: 'N4',
    img: n4,
    subtitle: 'MASAŽA UZ UDOBU',
    description:
      'Oprema N4 ima prekrasan moderan dizajn, besprijekornu kvalitetu i mnoge funkcije koje poboljšavaju zdravlje. Zahvaljujući preklopnom dizajnu, postalo je moguće prilagoditi duljinu masažera visini određene osobe. Tako će korištenje opreme biti ugodno za sve članove obitelji.',
    additional: textN4,
  },
  {
    id: 'ft2',
    title: 'N5',
    img: n5,
    subtitle: 'MASAŽA UZ UDOBU',
    description:
      'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
    additional: textN5,
  },
];

export const secondTabList: TabListTypes[] = [
  {
    id: 'st1',
    title: 'T20 Turmanijev tepih (prostirka za krevet)',
    img: t20,
    subtitle: 'MASAŽA UZ UDOBU',
    description:
      'Oprema N4 ima prekrasan moderan dizajn, besprijekornu kvalitetu i mnoge funkcije koje poboljšavaju zdravlje. Zahvaljujući preklopnom dizajnu, postalo je moguće prilagoditi duljinu masažera visini određene osobe. Tako će korištenje opreme biti ugodno za sve članove obitelji.',
    additional: textN4,
  },
  {
    id: 'st2',
    title: 'T11P Turmanijev tepih s dodatkom nanodijamantne keramike',
    img: t11p,
    subtitle: 'MASAŽA UZ UDOBU',
    description:
      'Oprema N4 ima prekrasan moderan dizajn, besprijekornu kvalitetu i mnoge funkcije koje poboljšavaju zdravlje. Zahvaljujući preklopnom dizajnu, postalo je moguće prilagoditi duljinu masažera visini određene osobe. Tako će korištenje opreme biti ugodno za sve članove obitelji.',
    additional: textN4,
  },
  {
    id: 'st3',
    title: 'NM-80H',
    img: nm80,
    subtitle: 'MASAŽA UZ UDOBU',
    description:
      'Oprema N4 ima prekrasan moderan dizajn, besprijekornu kvalitetu i mnoge funkcije koje poboljšavaju zdravlje. Zahvaljujući preklopnom dizajnu, postalo je moguće prilagoditi duljinu masažera visini određene osobe. Tako će korištenje opreme biti ugodno za sve članove obitelji.',
    additional: textN4,
  },
  {
    id: 'st4',
    title: 'NM-90 Turmanijski pojas',
    img: nm90,
    subtitle: 'MASAŽA UZ UDOBU',
    description:
      'Oprema N4 ima prekrasan moderan dizajn, besprijekornu kvalitetu i mnoge funkcije koje poboljšavaju zdravlje. Zahvaljujući preklopnom dizajnu, postalo je moguće prilagoditi duljinu masažera visini određene osobe. Tako će korištenje opreme biti ugodno za sve članove obitelji.',
    additional: textN4,
  },
  {
    id: 'st5',
    title: 'Turmanijev prsluk MHP-100',
    img: mhp100,
    subtitle: 'MASAŽA UZ UDOBU',
    description:
      'Oprema N4 ima prekrasan moderan dizajn, besprijekornu kvalitetu i mnoge funkcije koje poboljšavaju zdravlje. Zahvaljujući preklopnom dizajnu, postalo je moguće prilagoditi duljinu masažera visini određene osobe. Tako će korištenje opreme biti ugodno za sve članove obitelji.',
    additional: textN4,
  },
  {
    id: 'st6',
    title: 'E5 Masažer za stopala',
    img: e5,
    subtitle: 'MASAŽA UZ UDOBU',
    description:
      'Oprema N4 ima prekrasan moderan dizajn, besprijekornu kvalitetu i mnoge funkcije koje poboljšavaju zdravlje. Zahvaljujući preklopnom dizajnu, postalo je moguće prilagoditi duljinu masažera visini određene osobe. Tako će korištenje opreme biti ugodno za sve članove obitelji.',
    additional: textN4,
  },
  {
    id: 'st7',
    title: 'E3 Turmanijev pojas miostimulator',
    img: e3,
    subtitle: 'MASAŽA UZ UDOBU',
    description:
      'Oprema N4 ima prekrasan moderan dizajn, besprijekornu kvalitetu i mnoge funkcije koje poboljšavaju zdravlje. Zahvaljujući preklopnom dizajnu, postalo je moguće prilagoditi duljinu masažera visini određene osobe. Tako će korištenje opreme biti ugodno za sve članove obitelji.',
    additional: textN4,
  },
  {
    id: 'st8',
    title: 'NM-200 tourmanium projektor',
    img: nm200,
    subtitle: 'MASAŽA UZ UDOBU',
    description:
      'Oprema N4 ima prekrasan moderan dizajn, besprijekornu kvalitetu i mnoge funkcije koje poboljšavaju zdravlje. Zahvaljujući preklopnom dizajnu, postalo je moguće prilagoditi duljinu masažera visini određene osobe. Tako će korištenje opreme biti ugodno za sve članove obitelji.',
    additional: textN4,
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
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.7041354684916!2d15.9814916!3d45.797154799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d65e8eb09a8b%3A0x4cb3e454815ba580!2zQm9zdXRza2EgdWwuIDksIDEwMDAwLCBaYWdyZWIsINCl0L7RgNCy0LDRgtC40Y8!5e0!3m2!1sru!2sua!4v1669366841599!5m2!1sru!2shr',
  },
  {
    id: uuidv4(),
    address: 'Ulica Franа Supila 11, 51000 Rijeka',
    phone: '+385922305759',
    email: 'mail@gmail.com',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.0050614405422!2d14.439549116149967!3d45.328520250506344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764a11e05eab4e1%3A0x14ef195e2f8acc61!2zVWwuIEZyYW5hIFN1cGlsYSAxMSwgNTEwMDAsIFJpamVrYSwg0KXQvtGA0LLQsNGC0LjRjw!5e0!3m2!1sru!2sua!4v1669367402479!5m2!1sru!2shr',
  },
  {
    id: uuidv4(),
    address: 'Prve poljanice 6, 10000, Zagreb',
    phone: '+385925027264',
    email: 'mail@gmail.com',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.075803162102!2d16.067253716159108!3d45.82976461699578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476678174539b82b%3A0x9060faaf869119!2zUHJ2ZSBwb2xqYW5pY2UgNiwgMTAwMDAsIFphZ3JlYiwg0KXQvtGA0LLQsNGC0LjRjw!5e0!3m2!1sru!2sua!4v1669367501034!5m2!1sru!2shr',
  },
  {
    id: uuidv4(),
    address: 'ul. Dužice 20, 10000, Zagreb',
    phone: '+385924178472',
    email: 'mail@gmail.com',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.7758786456557!2d15.951302216158433!3d45.79571761928102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d69460bce77f%3A0x9dbe615f52d9f297!2zRHXFvmljZSB1bC4gMjAsIDEwMDAwLCBaYWdyZWIsINCl0L7RgNCy0LDRgtC40Y8!5e0!3m2!1sru!2sua!4v1669367715961!5m2!1sru!2shr',
  },
  {
    id: uuidv4(),
    address: 'Komarski put 14, 10000, Zagreb',
    phone: '+385991927120',
    email: 'mail@gmail.com',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.4861807498096!2d15.90592671615864!3d45.80152071889158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d146f5e4392d%3A0x4f056aae757a8699!2zS29tYXJza2kgcHV0IDE0LCAxMDAwMCwgWmFncmViLCDQpdC-0YDQstCw0YLQuNGP!5e0!3m2!1sru!2sua!4v1669367789071!5m2!1sru!2shr',
  },
];
