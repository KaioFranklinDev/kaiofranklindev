import styles from './Footer.module.css';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kaio-franklin-dev" className={styles.socialLink}><FaLinkedin /> </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/KaioFranklinDev" className={styles.socialLink}><FaGithub /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=558699453112&text&type=phone_number&app_absent=0" className={styles.socialLink}><IoLogoWhatsapp /></a>
        </div>
        <div className={styles.footerLinks}><a href='#' target="_blank" rel="noopener noreferrer">Privacidade</a></div>
        <p>&copy; 2024 Kaio Franklin Dev. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
