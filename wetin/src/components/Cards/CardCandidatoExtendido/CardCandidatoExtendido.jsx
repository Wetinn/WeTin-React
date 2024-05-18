import styles from "./CardCandidatoExtendido.module.css"
import React from "react";
import classNames from 'classnames';
import localIcon from '../../../utils/assets/icons/LocalIcon.png'
import callIcon from '../../../utils/assets/icons/CallIcon.png'
import emailIcon from '../../../utils/assets/icons/EmailIcon.png'
import starIcon from '../../../utils/assets/icons/StarIcon.png'

export default function CardCandidatoExtendido(props) {

    const cardClass = classNames(styles.card, {
        [styles.recomendacao]: props.recomendacao,
        [styles.favorito]: props.favorito,
    }
    )

    return(
        <>
        
        <div className={cardClass}>
            {props.recomendacao && (
                <div className={styles['textoRecomendacao']}>
                    <h3>Recomendado</h3>
                </div>
            )}
            {props.favorito && (
                <div className={styles['textoFavorito']}>
                    <img src={starIcon} alt="Icone estrela" />
                    <h3>Favorito</h3>
                </div>
            )}
            <img src={props.imagem} alt="Foto usuário" className={styles['fotoUsuario']}/>
            <h2>{props.nome}</h2>
            <div className="infos">
                <div className={styles["info"]}>
                    <img src={localIcon} alt="Icone localização"/>
                    <p>{props.localizacao}</p>
                </div>
                <div className={styles["info"]}>
                    <img src={callIcon} alt="Icone telefone"/>
                    <p>{props.telefone}</p>
                </div>
                <div className={styles["info"]}>
                    <img src={emailIcon} alt="Icone e-mail"/>
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
        
        </>
    );
}