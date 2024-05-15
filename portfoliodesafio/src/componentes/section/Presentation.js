import styles from './Presentation.module.css'
import ButtonA from '../Elementos/ButtonA'
import { useEffect, useState } from 'react'

function Presentation(){

    const [text, setText] = useState('');
    const toRotate = ['eu sou Luiz Gustavo Nates Caldato, seja bem vindo!', 'sou apaixonado por programação!'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)


    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    },[text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)


        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(true);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }


    return(
        <div id='Presentation' className={styles.presentation}>
            <h1>Olá, {text}<br/></h1><br/>
            <p>
            Como desenvolvedor Full-Stack, eu tenho o compromisso de desenvolver<br/>
            sites bem trabalhados, responsivos e interativos para os negócios.<br/>
            Meus projetos já mostraram muito das minhas habilidades, mas estou<br/>
            sempre em busca de novos desafios para me superar. Minhas habilidade<br/>
            são: HTML, CSS, JavaScript e React</p>

            <ButtonA link='https://www.linkedin.com/in/luiz-gustavo-nates-caldato/' text='Saber mais'></ButtonA>
        </div>
    )
}

export default Presentation