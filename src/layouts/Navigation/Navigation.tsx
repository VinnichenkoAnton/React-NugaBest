import classNames from 'classnames';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './Navigation.module.scss';

import { navigationList } from '../../data/data';

import { NavigationPropsTypes } from './Navigation.types';
import { MappedArrayType } from '../../types/GlobalTypes';

const Navigation: React.FC<NavigationPropsTypes> = ({ isActive }) => {
  const navItems: MappedArrayType = navigationList.map((item, i) => {
    return <NavigationItem key={i} text={item.text} to={item.to} />;
  });

  return (
    <nav className={classes.navigation}>
      <ul
        className={classNames(
          classes.navigation__list,
          isActive ? '' : classes.navigation__list_hidden,
        )}
      >
        {navItems}
      </ul>
    </nav>
  );
};

export default Navigation;
