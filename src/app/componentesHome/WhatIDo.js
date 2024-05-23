// components/WhatIDo.js
import { FaDesktop, FaPaintBrush, FaMobileAlt, FaSearch } from 'react-icons/fa';
import styles from './WhatIDo.module.css';

const WhatIDo = () => {
  return (
    <section className={styles.whatIDoSection}>
      
      <div className={styles.services}>
        <div className={styles.service}>
          <FaDesktop className={styles.icon} />
          <h3>Web Design</h3>
          <p>Criação de sistema web, atraente, responsivo.</p>
        </div>
        <div className={styles.service}>
          <FaPaintBrush className={styles.icon} />
          <h3>UI/UX Design</h3>
          <p>Para que o usuário tenha uma melhor experiência do sistema web.</p>
        </div>
        <div className={styles.service}>
          <FaMobileAlt className={styles.icon} />
          <h3>Desenvolvimento de Aplicativos</h3>
          <p>Desenvolvimento de um aplicativo leve, atraente e fluido.</p>
        </div>
        <div className={styles.service}>
          <FaSearch className={styles.icon} />
          <h3>SEO Google</h3>
          <p>Para que o sistema fique otimizado, melhorando o ranking da pesquisa do seu site no Google.</p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
