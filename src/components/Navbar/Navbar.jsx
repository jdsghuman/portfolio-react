import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavbarDesktop from './NavbarDesktop/NavbarDesktop'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import styles from './Navbar.module.scss'

const Navbar = ({ toggleSideDrawer }) => {
  const location = useLocation()

  const goToHomePage = () => {
    location.pathname === '/' && window.location.reload()
  }
  return (
    <nav>
      <div className={styles.nav}>
        <div>
          <Link to="/" onClick={goToHomePage}>
            <img
              className={styles.nav__image}
              src="/images/JD-Develop-white.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className={styles.nav__right}>
          <div className={styles['nav__menu-mobile']}>
            {/* Mobile/Tablet menu icon */}
            <DrawerToggleButton click={toggleSideDrawer} />
          </div>
          <div className={styles.nav__desktop}>
            <NavbarDesktop goToHomePage={goToHomePage} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
