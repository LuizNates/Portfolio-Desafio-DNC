import styles from './Projects.module.css'
import Card from '../Elementos/Card'
import Portfolio from '../../Image/projects/PortfolioInterativo.jpg'
import DncWeather from '../../Image/projects/DncWeather.jpg'
import CCxpDnc from '../../Image/projects/CCxpDnc.jpg'
import BootcampDnc from '../../Image/projects/BootcampDnc.jpg'

function Projects(){
    return(
        <div id='Projects' className={styles.projects}>
            <h1>Projetos</h1>
            <div id={styles.dupla1}>
                <Card
                img={Portfolio}
                site='https://portfolio-lg-nc.vercel.app'
                title='Portfólio Interativo'
                description='Um portfólio mega interativo criado com React'
                />
                <Card
                img={DncWeather}
                site='https://desafio-dnc-api-ln.netlify.app'
                title='Dnc Weather'
                description='Um site com consumo de API de tempo e localização'
                />
            </div>
            
            <div id={styles.dupla2}>
                <Card
                img={CCxpDnc}
                site='https://ccxp-dnc-ln.netlify.app'
                title='Ccxp + DNC'
                description='Um site de propaganda para a CCXP para treino com HTML e CSS'
                />
            <Card
                img={BootcampDnc}
                site='https://bootcampdncluiznates.netlify.app'
                title='Bootcamp DNC'
                description='Um site para fixa conteúdos de HTML e CSS'
            />
            </div>
            
        </div>
        
    )
}

export default Projects