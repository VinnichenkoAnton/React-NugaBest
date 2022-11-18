import classNames from 'classnames';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './Navigation.module.scss';

import { navigationList } from '../../data/data';

const Navigation: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const navItems = navigationList.map((item, i) => {
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
