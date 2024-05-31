
import { useEffect, useState } from 'react';
import styles from './NotificationIcon.module.css';

export default function Icon(props){

    const [qtdNotificacoes, setQtdNotificacoes] = useState(0);
    const [Texto, setTexto] = useState("");

    useEffect(() => {
        
        const getQuantidadeNotificacoes = setInterval(() => {
            //Faz a requisição para o backend

            setQtdNotificacoes(prevQtd => prevQtd + 1);
            

        }, 2000)
        return () => clearInterval(getQuantidadeNotificacoes);
    }, [])

    useEffect(() => {
        if (qtdNotificacoes > 99) {
            setTexto("99");
        } else {
            setTexto(`${qtdNotificacoes}`);
        }
    }, [qtdNotificacoes]);

    return(
        <>
        <div className={styles["caixa-icone"]} onClick={props.onClick}>
            <div className={styles["contador-notificacoes"]}>{Texto}</div>
            <img className={styles["icon"]} src={props.src} alt={props.alt} />
        </div>
        </>
    );
}
