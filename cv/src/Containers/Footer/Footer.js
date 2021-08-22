import React from 'react';
import styles from './Footer.module.scss';
// import { Link } from 'react-router-dom';
import contact from '../../Media/contact.png';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <img alt={'contact'} src={contact} />
    </div>
  );
};

export default Footer;
