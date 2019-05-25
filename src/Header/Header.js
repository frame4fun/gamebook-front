import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles['header-left']}>
          <NavLink className={styles['header-text']} to="/">
            Home
          </NavLink>
          <NavLink className={styles['header-text']} to="/profile/">
            Profile
          </NavLink>
        </div>
        <div className={styles['header-right']}>
          <NavLink className={styles['header-text']} to="/signin/">
            Sign In
          </NavLink>
          <NavLink className={styles['header-text']} to="/signup/">
            Sign Up
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
