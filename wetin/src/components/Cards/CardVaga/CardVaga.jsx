import styles from "./CardVaga.module.css"
import React, { useState } from "react";
import classNames from 'classnames';
import { useNavigate } from "react-router-dom";
import PopUpConfirmation from "../../PopUps/PopUpConfirmation/PopUpConfirmation"
import axios from "axios";
import PopUpSuccess from "../../PopUps/PopUpSuccess/PopUpSuccess";
import DeleteAnimation from '../../../utils/assets/gifs/DeleteAnimation.gif'

export default function CardVaga(props) {

    const [popUpDelete, setPopUpDelete] = useState(false);
    const [popUpSuccess, setPopUpSuccess] = useState(false);

    const renderPopUpDelete = (event) => {
        event.stopPropagation();
        setPopUpDelete(true)
    }

    const closePopUpDelete = () => {
        setPopUpDelete(false)
    }

    const closePopUpSuccess = () => {
        props.getObject([])
        setPopUpSuccess(false)
    }
    


    const cardClass = classNames(styles.card, {
        [styles.rascunho]: props.status === "CANCELADA",
        }
    )

    const deleteCard = () => {
        const deleteVaga = async () => {
            console.log(props.status)
            try {
                setPopUpDelete(false)
                await axios.delete(`/vagas/cancelar-vaga/${props.info.idVaga}`);
                setPopUpSuccess(true)
            } catch (e){
                console.log(e);
            }
        }
        deleteVaga();
    }

    const navigate = useNavigate();

    const redirectInformacoesVaga = () =>{
        navigate(`/dashboard/informacoes-vaga/${props.info.idVaga}`)
    }

    const redirectEdicaoVaga = (event) => {
        event.stopPropagation();
        navigate(`/dashboard/editarVaga/${props.info.idVaga}`)
    }

    return (
        <>
            {popUpDelete && 
            <PopUpConfirmation 
                danger 
                idVaga={props.info.idVaga} 
                onClose={closePopUpDelete} 
                onDelete={deleteCard}
                texto={`Você realmente deseja encerrar a vaga ${props.info.titulo}?`}
                textoBotao1="Confirmar deleção"
                textoBotao2="Cancelar"/>}

            {popUpSuccess  && 
            <PopUpSuccess
                texto="Vaga encerrada com sucesso"
                imagem={DeleteAnimation}
                textoBotao1="Fechar"
                alt="Imagem encerramento efetuado"
                onClose={closePopUpSuccess}
            />}

            <div className={cardClass} onClick={() => redirectInformacoesVaga()}>
                {props.status === "CANCELADA" && (
                    <div className={styles['textoRascunho']}>
                        <h3>Cancelada</h3>
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