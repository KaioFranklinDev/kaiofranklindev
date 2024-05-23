import React from 'react';
import styles from './header.module.css';


const Header = () => {
  return (
    <header className={styles.header}>
      <nav >
        <ul >
          <li>
            <a href='#home' >Início</a>
          </li>
          <li>
            <a href='#casaverde'>Serviços</a>
          </li>
          <li>
            <a href='#tecnologias' >Tecnologias</a>
          </li>
          <li>
            <a href='#tecnologias' >Contato</a>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
