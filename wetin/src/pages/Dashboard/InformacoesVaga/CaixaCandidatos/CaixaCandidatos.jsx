import React from "react"
import styles from "./CaixaCandidatos.module.css"

export default function CaixaCandidatos(props) {

    return (
        <>
            <h2 className={styles["texto-contador"]}>XX candidatos aplicaram para essa vaga</h2>
            <div className={styles["caixa-candidatos"]}>
                {() => props.renderFunction()}
            </div>
        </>
    )
}