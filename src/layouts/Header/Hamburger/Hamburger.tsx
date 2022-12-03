import classes from './Hamburger.module.scss';

import classNames from 'classnames';

import { ConcatinatedClassesType } from '../../../types/GlobalTypes';
import { HamburgerPropsTypes } from './Hamburger.type';

const Hamburger: React.FC<HamburgerPropsTypes> = ({ isActive, onClick }) => {
  const hamburgerClasses: ConcatinatedClassesType = classNames(
    classes.hamburger__span,
    isActive ? classes.hamburger__span_active : '',
  );
  return (
    <div className={classes.hamburger} onClick={onClick}>
      <span className={hamburgerClasses}></span>
      <span className={hamburgerClasses}></span>
      <span className={hamburgerClasses}></span>
    </div>
  );
};

export default Hamburger;
