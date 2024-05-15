import styles from './Card.module.css'
import ButtonA from '../Elementos/ButtonA'

function Card({img, site, title, description}){
    return(
        <div className={styles.card}>
            <a href={site}></a>
            <img src={img}></img>

            <section>
                <h3>{title}</h3>
                <p>{description}</p>
            </section>
            <ButtonA link={site} text='Clique aqui'></ButtonA>
        </div>
    )
}

export default Card