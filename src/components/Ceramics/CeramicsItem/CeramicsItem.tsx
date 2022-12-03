import classes from './CeramicsItem.module.scss';

import { CeramicsListTypes } from '../../../types/GlobalTypes';

const CeramicsItem: React.FC<CeramicsListTypes> = ({ icn, title, description }) => {
  return (
    <li className={classes.ceramics__item}>
      <div>
        <div className={classes.ceramics__icn}>
          <img src={icn} alt={title} />
        </div>
      </div>
      <h3 className={classes.ceramics__subtitle}>{title}</h3>
      <ul className={classes.ceramics__list}>
        {description.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </li>
  );
};

export default CeramicsItem;
