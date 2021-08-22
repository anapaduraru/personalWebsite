import React from 'react';
import styles from './Header.module.scss';
import logo from '../../Media/logo.png';
import { Link } from 'react-router-dom';
// import { theme } from '../../theme';

const Header = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.firstChild}>
          <Link to="/"><h3>Home</h3></Link>
          <Link to="/projects"><h3>Projects</h3></Link>
        </div>
        <div className={styles.secondChild}>
          <Link to="/"><img alt={'logo'} src={logo} /></Link>
          <h3> Frontend Developer </h3>
        </div>
        <div className={styles.thirdChild}>
          <Link to="/resume"><h3>Resume</h3></Link>
          <Link to="/contact"><h3>Contact</h3></Link>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.firstChild}>
          <Link to="/"><img alt={'logo'} src={logo} /></Link>
          <h3> Frontend Developer </h3>
        </div>
        <div className={styles.secondChild}>
          <div className={styles.firstColumn}>
            <Link to="/"><h3>Home</h3></Link>
            <Link to="/projects"><h3>Projects</h3></Link>
          </div>
          <div className={styles.secondColumn}>
            <Link to="/resume"><h3>Resume</h3></Link>
            <Link to="/contact"><h3>Contact</h3></Link>
          </div>
        </div>
      </div>

    </div>


  );
};

export default Header;
