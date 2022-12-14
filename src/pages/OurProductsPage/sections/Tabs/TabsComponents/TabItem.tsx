import { NavLink } from 'react-router-dom';

import classes from '../Tabs.module.scss';

import { TabItemPropsTypes } from '../Tabs.types';

const TabItem: React.FC<TabItemPropsTypes> = ({ title, img, id }) => {
  return (
    <NavLink to={`/products/${id}`} className={classes.tabs__wrapper}>
      <img className={classes.tabs__img} src={img} alt={title} />
      <div className={classes.tabs__overlay}>
        <h3 className={classes.tabs__title}>{title}</h3>
      </div>
    </NavLink>
  );
};

export default TabItem;
