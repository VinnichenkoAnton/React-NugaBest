import { v4 as uuidv4 } from 'uuid';

//numericInfoList
import established from '../resources/numericInfo/established.svg';
import workers from '../resources/numericInfo/workers.svg';
import customers from '../resources/numericInfo/customers.svg';
import prizes from '../resources/numericInfo/prizes.svg';

// //firstTabList
//N4
import n4 from '../resources/tabs/beds/imgs/n4.png';
import n4_2 from '../resources/tabs/beds/n4/n4_2.jpg';
import n4_3 from '../resources/tabs/beds/n4/n4_3.jpg';
import n4_4 from '../resources/tabs/beds/n4/n4_4.jpg';
import n4_5 from '../resources/tabs/beds/n4/n4_5.jpg';
import { textN4 } from './tabsTexts/tabsTexts';
//N5
import n5 from '../resources/tabs/beds/imgs/n5.jpg';
import n5_2 from '../resources/tabs/beds/n5/n5_2.jpg';
import { textN5 } from './tabsTexts/tabsTexts';

// //secondTabList
//T20
import t20 from '../resources/tabs/otherEquipment/imgs/t20.jpg';
import t20_2 from '../resources/tabs/otherEquipment/t20/t20_2.jpg';
import { textT20 } from './tabsTexts/tabsTexts';
//T11P
import t11p from '../resources/tabs/otherEquipment/imgs/t11p.jpg';
import t11p_2 from '../resources/tabs/otherEquipment/t11p/t11p_2.jpg';
import { textT11P } from './tabsTexts/tabsTexts';
//NM80
import nm80 from '../resources/tabs/otherEquipment/imgs/nm80.jpg';
import nm80_2 from '../resources/tabs/otherEquipment/nm80/nm80_2.jpg';
import nm80_3 from '../resources/tabs/otherEquipment/nm80/nm80_3.jpg';
import nm80_4 from '../resources/tabs/otherEquipment/nm80/nm80_4.jpg';
import nm80_5 from '../resources/tabs/otherEquipment/nm80/nm80_5.jpg';
import { textNM80 } from './tabsTexts/tabsTexts';
//NM90
import nm90 from '../resources/tabs/otherEquipment/imgs/nm90.jpg';
import nm90_2 from '../resources/tabs/otherEquipment/nm90/nm90_2.jpg';
import nm90_3 from '../resources/tabs/otherEquipment/nm90/nm90_3.jpg';
import nm90_4 from '../resources/tabs/otherEquipment/nm90/nm90_4.jpg';
import nm90_5 from '../resources/tabs/otherEquipment/nm90/nm90_5.jpg';
import nm90_6 from '../resources/tabs/otherEquipment/nm90/nm90_6.jpg';
import { textNM90 } from './tabsTexts/tabsTexts';
//MHP100
import mhp100 from '../resources/tabs/otherEquipment/imgs/mhp100.jpg';
import mhp100_2 from '../resources/tabs/otherEquipment/mhp100/mhp100_2.jpg';
import { textMHP100 } from './tabsTexts/tabsTexts';
//E5
import e5 from '../resources/tabs/otherEquipment/imgs/e5.jpg';
import e5_2 from '../resources/tabs/otherEquipment/e5/e5_2.jpg';
import e5_3 from '../resources/tabs/otherEquipment/e5/e5_3.jpg';
import e5_4 from '../resources/tabs/otherEquipment/e5/e5_4.jpg';
import e5_5 from '../resources/tabs/otherEquipment/e5/e5_5.jpg';
import { textE5 } from './tabsTexts/tabsTexts';
//E3
import e3 from '../resources/tabs/otherEquipment/imgs/e3.jpg';
import e3_2 from '../resources/tabs/otherEquipment/e3/e3_2.jpg';
import e3_3 from '../resources/tabs/otherEquipment/e3/e3_3.jpg';
import e3_4 from '../resources/tabs/otherEquipment/e3/e3_4.jpg';
import e3_5 from '../resources/tabs/otherEquipment/e3/e3_5.jpg';
import { textE3 } from './tabsTexts/tabsTexts';
//NM200
import nm200 from '../resources/tabs/otherEquipment/imgs/nm200.jpg';
import nm200_2 from '../resources/tabs/otherEquipment/nm200/nm200_2.jpg';
import nm200_3 from '../resources/tabs/otherEquipment/nm200/nm200_3.jpg';
import nm200_4 from '../resources/tabs/otherEquipment/nm200/nm200_4.jpg';
import nm200_5 from '../resources/tabs/otherEquipment/nm200/nm200_5.jpg';
import { textNM200 } from './tabsTexts/tabsTexts';

//ceramicslList
import ceramics1 from '../resources/ceramics/ceramics1.png';
import ceramics2 from '../resources/ceramics/ceramics2.png';
import ceramics3 from '../resources/ceramics/ceramics3.png';
import ceramics4 from '../resources/ceramics/ceramics4.png';

//Types
import { CeramicsListTypes } from '../types/GlobalTypes';
import { TabListTypes } from '../types/GlobalTypes';
import { NavigationListTypes } from './data.types';
import { NumericListTypes } from './data.types';
import { VideosListTypes } from './data.types';
import { ContactsListTypes } from './data.types';

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

export const numericInfoList: NumericListTypes[] = [
  { id: uuidv4(), img: established, title: 'Godine', amount: 10 },
  { id: uuidv4(), img: workers, title: 'Zaposlenici', amount: 100 },
  { id: uuidv4(), img: customers, title: 'Kupci', amount: 200 },
  { id: uuidv4(), img: prizes, title: 'Predmeti', amount: 50 },
];

export const firstTabList: TabListTypes[] = [
  {
    id: 'ft1',
    title: 'N4',
    img: n4,
    gallery: [n4, n4_2, n4_3, n4_4, n4_5],
    subtitle: 'MASA??A UZ UDOBU',
    description:
      'Oprema N4 ima prekrasan moderan dizajn, besprijekornu kvalitetu i mnoge funkcije koje pobolj??avaju zdravlje. Zahvaljuju??i preklopnom dizajnu, postalo je mogu??e prilagoditi duljinu masa??era visini odre??ene osobe. Tako ??e kori??tenje opreme biti ugodno za sve ??lanove obitelji.',
    additionalInfo: textN4,
  },
  {
    id: 'ft2',
    title: 'N5',
    img: n5,
    gallery: [n5, n5_2],
    subtitle: 'SKLOPIVI KOMBINIRANI TOPLINSKI STIMULATOR ZA MASA??USKU',
    description:
      'N5 SKLOPIVI KOMBINIRANI TOPLINSKI STIMULATOR pru??a ugodnu toplinsku masa??u simultanim kretanjem automatiziranih projektora od turmanijeve keramike.',
    additionalInfo: textN5,
  },
];

export const secondTabList: TabListTypes[] = [
  {
    id: 'st1',
    title: 'T20 Turmanijev tepih (prostirka za krevet)',
    img: t20,
    gallery: [t20, t20_2],
    description:
      'Smanjite bolove u mi??i??ima i stres, postanite opu??teniji, bolje spavajte no??u, postanite energi??niji i opu??teniji tijekom dana. Sve to i jo?? mnoge druge dobrobiti za Va??e zdravlje posti??i ??ete svakodnevnim kori??tenjem turmanijevih prostirki. Turmanijeve prostirke sastoje se od podloge na koju su ugra??eni diskovi od turmanijeve keramike. Redovitim kori??tenjem regulira se metabolizam, poti??e se detoksikacija tijela, balans tjelesnih teku??ina, kao i regulacija tjelesne te??ine. Mo??e se koristiti i kao infracrvena sauna.',
    additionalInfo: textT20,
  },
  {
    id: 'st2',
    title: 'T11P Turmanijev tepih s dodatkom nanodijamantne keramike',
    img: t11p,
    gallery: [t11p, t11p_2],
    description:
      'Turmanijev tepih s dodatkom nanodijamantne turmanijeve keramike ima pobolj??ana svojstva. Poseban dizajn grija??a omogu??uje savitljiost i mobilnost kao i prilagodbu razli??itim namjenama. Grija??i element je karbonska tkanina koja je fleksibilna i nezapaljiva',
    additionalInfo: textT11P,
  },
  {
    id: 'st3',
    title: 'NM-80H',
    img: nm80,
    gallery: [nm80, nm80_2, nm80_3, nm80_4, nm80_5],
    description:
      'U??inak turmanijevih tepiha na pobolj??anje zdravlja odnosno pobolj??anje cirkulacije krvi, imuniteta i skladnog rada ??iv??anog sustava temelji se na djelovanju infracrvene topline, ionizacije i magnetoterapije koju emitira turmanijeva keramika. U??inak se zasniva na principima orijentalnih tretmana akupresure i moksa terapije. Namijenjena je tretiranju cijelog tijela, poticanju cirkulacije, opu??tanju mi??i??nog gr??a, smirivanju svih vrsta bolova (u le??ima, kod artritisa, fibromijalgije, migrene, menstrualnih bolova), problema sa spavanjem, a mo??e se koristiti i za prevenciju, te kao ??isti wellness i opu??tanje.',
    additionalInfo: textNM80,
  },
  {
    id: 'st4',
    title: 'NM-90 Turmanijski pojas',
    img: nm90,
    gallery: [nm90, nm90_2, nm90_3, nm90_4, nm90_5, nm90_6],
    description:
      '70 posto uredskih radnika do 40. godine ??ivota pokazuje prve simptome i??ijasa! Do dobi od 50 godina to postaje bolest koja vas sprje??ava da ??ivite punim ??ivotom. Turmanijski pojas NM-90 pomo??i ??e vam u brizi o zdravlju va??ih le??a.',
    additionalInfo: textNM90,
  },
  {
    id: 'st5',
    title: 'Turmanijev prsluk MHP-100',
    img: mhp100,
    gallery: [mhp100, mhp100_2],
    description:
      'Turmanijev prsluk poma??e u o??uvanju zdravlja, normalne funkcije i vitalnosti di??nog sustava. Sastoji se od ??vrste, savitljive, bar??unaste podloge i eko ko??e na koju su pri??vr????eni diskovi od turmanjeve keramike. Namijenjen je pobolj??anju funkcija di??nog i kardiovaskularnog sustava.',
    additionalInfo: textMHP100,
  },
  {
    id: 'st6',
    title: 'E5 Masa??er za stopala',
    img: e5,
    gallery: [e5, e5_2, e5_3, e5_4, e5_5],
    description:
      'Masa??er za stopala E5 je inovativni proizvod u kojem se uspjej??no kombiniraju akupresura, infracrvena toplinai miostimulacija. Proizvod je izra??en na bazi turmanijeve keramike i najnovijeg razvoja Nuga Besta ??? nanodijamantnog turmanija, koji imaju jedinstvena ljekovita svojstva. Masa??er E-5 je koristan za osobe koje moraju puno vremena provoditi na nogama ili imaju sjedila??ki posao.',
    additionalInfo: textE5,
  },
  {
    id: 'st7',
    title: 'E3 Turmanijev pojas miostimulator',
    img: e3,
    gallery: [e3, e3_2, e3_3, e3_4, e3_5],
    description:
      'Nedostatak vremena za tjelovje??bu i brigu o zdravlju i vitkosti Va??eg tijela uspje??no ??ete rije??iti uporabom turmanijevog pojasa miostimulatora E3. E3 je multifunkcionalna oprema ??ije se djelovanje temelji na u??incima turmanijeve keramike i niskofrekventne struje.',
    additionalInfo: textE3,
  },
  {
    id: 'st8',
    title: 'NM-200 tourmanium projektor',
    img: nm200,
    gallery: [nm200, nm200_2, nm200_3, nm200_4, nm200_5],
    description:
      'Gdje se mo??e nabaviti takav lijek koji je uvijek pri ruci i spas u slu??aju iznenadne muke? Postoji takav alat! Ovo je kompaktni tourmanium projektor NM-200.',
    additionalInfo: textNM200,
  },
];

export const ceramicsList: CeramicsListTypes[] = [
  {
    id: uuidv4(),
    title: 'TURMALIN',
    description: [
      'Poti??e ja??anje metabolizma stanica, izmjenu tvari u organizmu',
      'Poti??e ja??anje imuniteta',
      'Pobolj??ava dotok hrane u organe i tkiva',
      'Pobolj??ava kvalitetu krvi',
      'Razrje??uje gustu',
    ],
    icn: ceramics1,
  },
  {
    id: uuidv4(),
    title: 'ELVAN',
    description: [
      'Mineral koristan za zdravlje ko??e',
      'Apsorbira ??tetne tvari i te??ke elemente',
      '??isti vodu',
      'Izvor je dugovalnog infracrvenog zra??enja',
    ],
    icn: ceramics2,
  },
  {
    id: uuidv4(),
    title: 'GERMANIJ',
    description: [
      'Prenosi kisik (O2) u tkivima organizma',
      'Ima biocidni u??inak (antivirusna, antifugicidna, antibakterijska svojstva)',
      'Smanjuje bol',
      'Stimulira imunitet',
    ],
    icn: ceramics3,
  },
  {
    id: uuidv4(),
    title: 'VULKANSKE STIJENE',
    description: [
      'Zahvaljuju??i njima legura poprima ??vrsto??u',
      'Glavna je prednost: Dugo zadr??avanje topline',
    ],
    icn: ceramics4,
  },
];

export const videosList: VideosListTypes[] = [
  {
    id: uuidv4(),
    title: 'U??inak TURMANIJA i NANO-DIJAMANTNE Turmanijeve keramike na LJUDSKO TIJELO',
    video: 'https://www.youtube.com/embed/OJuHxaFhbNc',
  },
  {
    id: uuidv4(),
    title: 'TOP 5 razloga za kupnju NUGA BEST N5 masa??era',
    video: 'https://www.youtube.com/embed/HtmuzXLYS04',
  },
  {
    id: uuidv4(),
    title: 'Najpopularniji NUGA BEST proizvod | Prednosti Turmanijeve Prostirke',
    video: 'https://www.youtube.com/embed/2S48_rcvEp8',
  },
  {
    id: uuidv4(),
    title: 'Za??to je TURMANIJ dobar za va??e tijelo? UNIVERZALNI ure??aj za JA??ANJE ZDRAVLJA',
    video: 'https://www.youtube.com/embed/a3VV2rGUeVc',
  },
  {
    id: uuidv4(),
    title:
      'Rije??it ??e vas BOLOVA u NOGAMA! Podcast s lije??nikom o prevenciji bolesti nogu i masa??i. Zdravlje TV',
    video: 'https://www.youtube.com/embed/rUNPBgVsIwg',
  },
  {
    id: uuidv4(),
    title: 'KAKO pobolj??ati cjelokupno stanje TIJELA | Prednosti toplinskog stimulatora MHP-100',
    video: 'https://www.youtube.com/embed/-Gk4mlC5VAE',
  },
];

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
    address: 'Ulica Fran?? Supila 11, 51000 Rijeka',
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
    address: 'ul. Du??ice 20, 10000, Zagreb',
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
