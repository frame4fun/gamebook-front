import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => (
  <div className={styles.header}>
    <div className={styles['header-left']}>
      <NavLink className={styles['header-text']} to="/">
        Home
      </NavLink>
      <NavLink className={styles['header-text']} to="/profile">
        Profile
      </NavLink>
      <NavLink className={styles['header-text']} to="/stories">
        Stories
      </NavLink>
    </div>
    <div className={styles['header-right']}>
      <NavLink className={styles['header-text']} to="/login">
        Sign In
      </NavLink>
      <NavLink className={styles['header-text']} to="/signup">
        Sign Up
      </NavLink>
    </div>
  </div>
);

export default Header;
