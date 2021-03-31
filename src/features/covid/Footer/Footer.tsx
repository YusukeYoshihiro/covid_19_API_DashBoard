import React from 'react';
import styles from './Footer.module.css';


const Footer:React.FC = () => {
  return (
    <footer className={styles.footerStyles}>
      Copyright &copy;  {new Date().getFullYear()}  Yusuke Yoshihiro <br/>Referring <a href="https://covid19api.com"> &nbsp; A free API for data on the Coronavirus </a>
    </footer>
  )
}

export default Footer
