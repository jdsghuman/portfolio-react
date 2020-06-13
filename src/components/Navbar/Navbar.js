import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDesktop from './NavbarDesktop/NavbarDesktop';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import styles from './Navbar.module.scss';

const Navbar = ({ toggleSideDrawer }) => {

  return (
    <nav>
      <div className={styles.nav}>
        <div>
          <Link to="/">
            <img className={styles.nav__image} src="/images/JD-Develop-white.png" alt="Logo" />
          </Link>
        </div>
        <div className={styles.nav__right}>
          <div className={styles['nav__menu-mobile']}>
            {/* Mobile/Tablet menu icon */}
            <DrawerToggleButton click={toggleSideDrawer} />
          </div>
          <div className={styles.nav__desktop}>
            <NavbarDesktop />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;