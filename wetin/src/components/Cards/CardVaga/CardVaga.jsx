import styles from "./CardVaga.module.css"
import React from "react";
import classNames from 'classnames';
import { useNavigate } from "react-router-dom";

export default function CardVaga(props) {

    const cardClass = classNames(styles.card, {
        [styles.rascunho]: props.rascunho,
        }
    )

    const navigate = useNavigate();

    const redirectInformacoesVaga = () =>{
        navigate(`/dashboard/informacoes-vaga/${props.info.id}`)
    }

    return (
        <>

            <div className={cardClass} onClick={() => redirectInformacoesVaga()}>
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