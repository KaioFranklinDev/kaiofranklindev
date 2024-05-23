// components/TechGrid.js
import React from 'react';
import styles from './TechGrid.module.css';
import { FaNode, FaReact } from 'react-icons/fa';
import { SiExpress, SiNextdotjs, SiCss3, SiJsonwebtokens } from 'react-icons/si';

const TechGrid = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <FaNode size={50} color="#ffffff" />
        <p>Node</p>
      </div>
      <div className={styles.card}>
        <SiExpress size={50} color="#FFFFFF" />
        <p>Express</p>
      </div>
      <div className={styles.card}>
        <FaReact size={50} color="#ffffff" />
        <p>React</p>
      </div>
      <div className={styles.card}>
        <SiNextdotjs size={50} color="#FFFFFF" />
        <p>Next.js</p>
      </div>
      <div className={styles.card}>
        <SiCss3 size={50} color="#ffffff" />
        <p>CSS</p>
      </div>
      <div className={styles.card}>
        <SiJsonwebtokens size={50} color="#ffffff" />
        <p>JWT</p>
      </div>
    </div>
  );
};

export default TechGrid;
