import styles from "./CardCandidatoSimples.module.css"
import React from "react";
import classNames from 'classnames';
import localIcon from '../../../utils/assets/icons/LocalIcon.png'
import callIcon from '../../../utils/assets/icons/CallIcon.png'

export default function CardCandidatoSimples(props) {

    const cardClass = classNames(styles.card, { 
        [styles.recomendacao]: props.recomendacao,
    })

    return(
        <>
        
        <div className={cardClass}>
            {props.recomendacao && 
                <div className={styles['textoRecomendacao']}>
                    <h3>Recomendado</h3>
                </div>
            }
            <img src={props.imagem} alt="" className={styles['fotoUsuario']}/>
            <h2>{props.nome}</h2>
            <div className={styles["infos"]}>
                <div className={styles["info"]}>
                    <img src={localIcon} alt="Icone localização"/>
                    <p>{props.localizacao}</p>
                </div>
                <div className={styles["info"]}>
                    <img src={callIcon} alt="Icone telefone"/>
                    <p>{props.telefone}</p>
                </div>
            </div>
        </div>
        
        </>
    );
}