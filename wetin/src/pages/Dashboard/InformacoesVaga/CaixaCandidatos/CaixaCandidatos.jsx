import React from "react"
import styles from "./CaixaCandidatos.module.css"

export default function CaixaCandidatos(props) {

    const renderizarCards = () =>{
        if(typeof props.renderFunction === "function"){
            return props.renderFunction();
        }
    }


    return (
        <>
            <h2 className={styles["texto-contador"]}>{props.quantidadeCandidatos || 0} candidatos aplicaram para essa vaga</h2>
            <div className={styles["caixa-candidatos"]}>
                {renderizarCards()}
            </div>
        </>
    )
}