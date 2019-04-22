import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const head = () => (
  <div className={styles.div}>
    <NavLink to="/signin/">Sign In</NavLink>
    <NavLink to="/signup/">Sign Up</NavLink>
  </div>
);

export default head;
