import styles from "./CardVaga.module.css"
import React, { useState } from "react";
import classNames from 'classnames';
import { useNavigate } from "react-router-dom";
import PopUpConfirmation from "../../PopUps/PopUpConfirmation/PopUpConfirmation"
import axios from "axios";

export default function CardVaga(props) {

    const [popUpDelete, setPopUpDelete] = useState(false);

    const renderPopUpDelete = (event) => {
        event.stopPropagation();
        setPopUpDelete(true)
    }

    const closePopUp = () => {
        setPopUpDelete(false)
    }
    


    const cardClass = classNames(styles.card, {
        [styles.rascunho]: props.status === "ENCERRADA",
        }
    )

    const deleteCard = () => {
        const deleteVaga = async () => {
            try {
                setPopUpDelete(false)
                await axios.delete(`/vagas/cancelar-vaga/${props.info.id}`);
            } catch (e){
                console.log(e);
            }
        }
        deleteVaga();
    }

    const navigate = useNavigate();

    const redirectInformacoesVaga = () =>{
        navigate(`/dashboard/informacoes-vaga/${props.info.id}`)
    }

    const redirectEdicaoVaga = (event) => {
        event.stopPropagation();
        navigate(`/dashboard/editarVaga/${props.info.id}`)
    }

    return (
        <>
            {popUpDelete && 
            <PopUpConfirmation 
                danger 
                idVaga={props.info.idVaga} 
                onClose={closePopUp} 
                onDelete={deleteCard}
                texto={`Você realmente deseja deletar a vaga ${props.info.titulo}?`}
                textoBotao1="Confirmar deleção"
                textoBotao2="Cancelar"/>}

            <div className={cardClass} onClick={() => redirectInformacoesVaga()}>
                {props.status === "ENCERRADA" && (
                    <div className={styles['textoRascunho']}>
                        <h3>Encerrada</h3>
                    </div>
                )}
                <img src={props.imagem} alt="Foto vaga" className={styles['fotoVaga']} />
                <h2>{props.titulo}</h2>

                <div className={styles["info"]}>
                    <p className={styles["texto-vaga"]}>{props.descricao}</p>
                </div>
                <div className={styles["info"]}>
                    <button className={styles["botao-editar"]} onClick={redirectEdicaoVaga}></button>
                    <button className={styles["botao-deletar"]} onClick={renderPopUpDelete}></button>
                </div>
            </div>

        </>
    );
}