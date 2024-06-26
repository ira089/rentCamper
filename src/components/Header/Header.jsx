import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.link} to="/catalog">
        Catalog
      </NavLink>
      <NavLink className={styles.link} to="/favorites">
      Favorites
      </NavLink>
      
    </div>
  );
};
export default Header;