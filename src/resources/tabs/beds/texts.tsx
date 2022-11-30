import classes from './texts.module.scss';

type texts = JSX.Element;

export const textN4: texts = (
  <ul className={classes.texts__list}>
    N4 je dnevni zdravstveni pregled:
    <li>* sprječavanje bolesti;</li>
    <li> * oporavak u skladu s karakteristikama organizma;</li>
    <li>* točkasti utjecaj na određene dijelove tijela.</li>
    <ul className={classes.texts__list}>
      Prednosti:
      <li>* dva unutarnja projektora - za vratnu i prsnu kralježnicu;</li>
      <li>* toplinski turmanijski blok za noge;</li>
      <li>* dodatna prostirka 45 mm viša od glavne - za učinkovit učinak na donji dio leđa.</li>
    </ul>
    <div className={classes.texts__paragraph}>
      Svrha opreme za masažu je poboljšanje zdravlja obnavljanjem kralježnice.
    </div>
  </ul>
);

export const textN5: texts = (
  <ul className={classes.texts__list}>
    N4 je dnevni zdravstveni pregled:
    <li>* sprječavanje bolesti;</li>
    <li> * oporavak u skladu s karakteristikama organizma;</li>
    <li>* točkasti utjecaj na određene dijelove tijela.</li>
    <ul className={classes.texts__list}>
      Prednosti:
      <li>* dva unutarnja projektora - za vratnu i prsnu kralježnicu;</li>
      <li>* toplinski turmanijski blok za noge;</li>
      <li>* dodatna prostirka 45 mm viša od glavne - za učinkovit učinak na donji dio leđa.</li>
    </ul>
    <div className={classes.texts__paragraph}>
      Svrha opreme za masažu je poboljšanje zdravlja obnavljanjem kralježnice.
    </div>
  </ul>
);
