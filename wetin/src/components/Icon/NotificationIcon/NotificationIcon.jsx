import { useEffect, useState } from 'react';
import axios from "axios";
import styles from './NotificationIcon.module.css';

export default function Icon(props){

    const idEmpresa = sessionStorage.idEmpresa;
    const [qtdNotificacoes, setQtdNotificacoes] = useState(0);
    const [Texto, setTexto] = useState("");

    useEffect(() => {
        
        const fetchInformacoes = async () => {
            try {
                const response = await axios.get(`/empresas/${idEmpresa}/listar-notificacoes`);
                setQtdNotificacoes(response.data.length) 
            } catch (err) {
                setQtdNotificacoes("?") 
                console.log(err)
            }
        };

        fetchInformacoes();
    }, [idEmpresa])

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
