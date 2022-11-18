import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Container from '../../components/UI/Container/Container';
import Hamburger from './Hamburger/Hamburger';
import Navigation from '../Navigation/Navigation';

import classes from './Header.module.scss';

import logo from '../../resources/header/logo.png';

const Header: React.FC = () => {
  const [navigationIsVisible, setNavigatioinIsVisible] = useState<boolean>(false);
  const clickHandler = () => {
    setNavigatioinIsVisible((prevState) => !prevState);
  };
  return (
    <header className={classes.header}>
      <Container>
        <Hamburger isActive={navigationIsVisible} onClick={clickHandler} />
        <div className={classes.header__wrapper}>
          <NavLink to="/" className={classes.header__logo}>
            <div className={classes.header__icn}>
              <img src={logo} alt="Logo" />
            </div>
            <h1 className={classes.header__title}>NUGA BEST</h1>
          </NavLink>
          <Navigation isActive={navigationIsVisible} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
