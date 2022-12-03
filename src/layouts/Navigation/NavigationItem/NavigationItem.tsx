import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import classes from './NavigationItem.module.scss';

import { NavigationItemProps } from './NavigationItem.type';

const NavigationItem: React.FC<NavigationItemProps> = ({ text, to }) => {
  return (
    <li className={classes.navitem}>
      <NavLink
        end
        className={({ isActive }) => classNames(isActive ? classes.navitem_active : '')}
        to={to}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
