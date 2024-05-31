import React, { useEffect, useState } from "react";
import styles from './Detalhes.module.css'
import axios from "axios";

export default function Detalhes(props) {


    return (
        <>
            <div className={styles["caixa-descricao-vaga"]}>
                <div className={styles["card"]}>
                    <h2>Descrição da vaga</h2>
                    <p>{props.descricao}</p>
                </div>
                <div className={styles["card"]}>
                    <h2>Requisitos</h2>
                    <p>{props.requisitos}</p>
                </div>
                <div className={styles["card"]}>
                    <h2>Responsabilidades</h2>
                    <p>{props.responsabilidades}</p>
                </div>
            </div>
        </>
    );
}