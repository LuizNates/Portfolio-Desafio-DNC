import styles from './Timeline.module.css'
import TimelineLN from '../../Image/TimelineLN.png';

function Timeline(){
    return(
        <div className={styles.timeline}>
            <h1>Sobre mim</h1>
            <div id={styles.year}>
            <p>02.2024</p>
            <p>03.2024</p>
            <p>04.2024</p>
            <p>05.2024</p>
            </div>
            
            
            <img src={TimelineLN}/><br/>

            <div id={styles.acontecimentos}>
                <p>
                    Início do curso de tecnologia da Escola DNC,<br/>
                    com 0 conhecimentos de programação<br/> e desenvolvimento web.
                </p>

                <p>
                    Domínio de HTMl e CSS para criação de páginas estilizadas, mas nem um pouco interativas.
                </p>

                <p>
                    Integração de JavaScript em minhas atividades para tornar as páginas interativas.
                </p>

                <p>
                    Uso do React.js para unir tudo isso e criar páginas iterativas e estilizadas de uma vez.
                </p>
            </div>
            
        </div>
        
    )
}

export default Timeline