import styles from './Navbar.module.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <div className={styles.a}>
                <ul>
                    <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                    <li><Nav.Link>Tecnologias</Nav.Link></li>
                    <li><Nav.Link href='#Presentation'>Sobre mim</Nav.Link></li>
            </ul>
            </div>

            <div className={styles.b}>
                <ul>
                    <li><a href='https://github.com/LuizNates'><FaGithub size={30}/></a></li>
                    <li><a href='https://www.linkedin.com/in/luiz-gustavo-nates-caldato/'><FaLinkedin size={30}/></a></li>
                </ul>
            </div>

        </div>
        
    )
}

export default Navbar