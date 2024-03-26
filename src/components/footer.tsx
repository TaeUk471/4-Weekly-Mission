import React from 'react';

import iconFacebook from '../assets/logo/facebook.svg';
import iconTwitter from '../assets/logo/twitter.svg';
import iconYoutube from '../assets/logo/youtube.svg';
import iconInstagram from '../assets/logo/instagram.svg';
import styles from '../styles/components/Footer.module.css';

const Footer = () => {
  const facebook = 'https://www.facebook.com/?locale=ko_KR';
  const twitter = 'https://twitter.com/?lang=ko';
  const youtube = 'https://www.youtube.com/';
  const instagram = 'https://www.instagram.com/';

  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.footerBox}>
          <span className={styles.copyright}>©codeit - 2023</span>
          <div className={styles.footerLinks}>
            <a className={styles.footerLink} href='privacy.html'>
              Privacy Policy
            </a>
            <a className={styles.footerLink} href='faq.html'>
              FAQ
            </a>
          </div>
          <div className={styles.sns}>
            <a href={facebook} target='_blank' rel='noopener noreferrer'>
              <img src={iconFacebook.src as string} alt='facebook 홈페이지로 연결된 facebook 로고' />
            </a>
            <a href={twitter} target='_blank' rel='noopener noreferrer'>
              <img src={iconTwitter.src as string} alt='twitter 홈페이지로 연결된 twitter 로고' />
            </a>
            <a href={youtube} target='_blank' rel='noopener noreferrer'>
              <img src={iconYoutube.src as string} alt='youtube 홈페이지로 연결된 youtube 로고' />
            </a>
            <a href={instagram} target='_blank' rel='noopener noreferrer'>
              <img src={iconInstagram.src as string} alt='instagram 홈페이지로 연결된 instagram 로고' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
