import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../Button/Button';
import styles from './NavbarDesktop.module.scss';

const navbarDesktop = ({ goToHomePage }) => (
  <>
    <ul className={styles.nav__container}>
      <li className={styles.nav__list}>
        <NavLink
          to="/"
          onClick={goToHomePage}
          exact
          className={styles.nav__link}
          activeClassName={styles['nav__link--active']}>
          Home
        </NavLink>
      </li>
      <li className={styles.nav__list}>
        <NavLink
          to="/projects"
          className={styles.nav__link}
          activeClassName={styles['nav__link--active']}>
          Projects
            </NavLink>
      </li>
      <li className={styles.nav__list}>
        <NavLink to="/about"
          className={styles.nav__link}
          activeClassName={styles['nav__link--active']}>
          About
          </NavLink>
      </li>
      <li className={styles.nav__list}>
        <a className={styles['nav__desktop__resume']}
          href="/#/resume.pdf"
          target="_blank"
          rel="noopener noreferrer">
          <Button classes="btn">Resume</Button>
        </a>
      </li>
    </ul>
  </>
)

export default navbarDesktop;
