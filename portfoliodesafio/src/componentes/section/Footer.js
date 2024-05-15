import styles from './Footer.module.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <div className={styles.footer}>
            <div id={styles.info}>
                <h3 id={styles.contato}>Meu contato:<br/>
                11 996087838</h3>
                <h3>Email:<br/>
                luizgunates@gmail.com</h3>
            </div>

            <div id={styles.links}>
                <a href='https://github.com/LuizNates'><FaGithub size={60}/></a>
                <a href='https://www.linkedin.com/in/luiz-gustavo-nates-caldato/'><FaLinkedin size={60}/></a>
            </div>
        </div>
            
    )
}

export default Footer