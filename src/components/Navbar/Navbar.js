import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import NavbarDesktop from './NavbarDesktop/NavbarDesktop';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import styles from './Navbar.module.scss';

const Navbar = ({ toggleSideDrawer }) => {
  let history = useHistory();

  const reset = () => {
    history.push('/');
  }
  return (
    <nav>
      <div className={styles.nav}>
        <div>
          <Link to="/">
            <img onClick={reset} className={styles.nav__image} src="/images/JD-Develop-white.png" alt="Logo" />
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