import Image from "next/image";
import styles from "./page.module.css";
import ListaTecnologias from "./componentesHome/ListaTecnologias";
import TechGrid from "./componentesHome/TechGrid";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import EuFaco from "./componentesHome/EuFaco";
import WhatIDo from "./componentesHome/WhatIDo";
import Contato from "./componentesHome/Contato";





export default function Home() {
  return (
    <>
      <main className={styles.main}> 
        <div id="home" className={styles.nomeFoto}>
          <div className={styles.batata}>
            <h1 id="casaverde"> Kaio Franklin</h1>
            <p> desenvolvedor web full stack</p>
            <a href="https://www.linkedin.com/in/kaio-franklin-dev" className={styles.socialLink}><FaLinkedin /></a>
            <a href="https://github.com/KaioFranklinDev" className={styles.socialLink}><FaGithub /></a>
            <a href="https://api.whatsapp.com/send/?phone=558699453112&text&type=phone_number&app_absent=0" className={styles.socialLink}><IoLogoWhatsapp /></a>
            <div>
              <p>Apaixonado por tecnologia e inovação. Tenho 26 anos e dedico minha carreira à criação de soluções web
                eficientes e modernas. Minha experiência abrange diversas tecnologias, incluindo React, Node.js, JWT, CSS e
                HTML, o que me permite desenvolver tanto o front-end quanto o back-end de aplicações web.
              </p>
            </div>           
          </div>
          <div className={styles.divImage}>
            <Image 
              src="/img/fotoProfissa.png"
              alt="imagem do profisonal de ti"
              width={300}
              height={250}
            />
          </div>
          
        </div>
        <EuFaco  />
        <WhatIDo />
        <ListaTecnologias />
        <TechGrid />
        <Contato />

        
        

      </main>
    </>
  );
}
