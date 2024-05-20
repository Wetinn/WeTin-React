import styles from "./CardVaga.module.css"
import React from "react";
import classNames from 'classnames';

export default function CardVaga(props) {

    const cardClass = classNames(styles.card, {
        [styles.rascunho]: props.rascunho,
    }
    )

    return (
        <>

            <div className={cardClass}>
                {props.rascunho && (
                    <div className={styles['textoRascunho']}>
                        <h3>Rascunho</h3>
                    </div>
                )}
                <img src={props.imagem} alt="Foto vaga" className={styles['fotoVaga']} />
                <h2>{props.titulo}</h2>

                <div className={styles["info"]}>
                    <p className={styles["texto-vaga"]}>{props.descricao}</p>
                </div>
                <div className={styles["info"]}>
                    <button className={styles["botao-editar"]}></button>
                    <button className={styles["botao-deletar"]}></button>
                </div>
            </div>

        </>
    );
}