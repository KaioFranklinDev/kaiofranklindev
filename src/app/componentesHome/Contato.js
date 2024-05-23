import styles from './Contato.module.css'
import { MdOutlineHomeWork, MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
export default function Contato() {
    return(
        <section id='contato' className={styles.contato}>
            <div>
                <h2>Meus contatos</h2>
            </div>
            <div className={styles.traco} />
            <div>
                
                <p><IoMdCall /> +5586994533112</p>
                <p><MdOutlineHomeWork /> Ininga, Teresina-PI</p>
                <p><MdEmail /> kaiofranklindev@gmail.com</p>
            </div>
        </section>
    )
}