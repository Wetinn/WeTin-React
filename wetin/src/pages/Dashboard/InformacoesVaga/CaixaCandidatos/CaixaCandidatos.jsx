import React, { useState } from "react"
import CardCandidatoExtendido from "../../../../components/Cards/CardCandidatoExtendido/CardCandidatoExtendido"
import styles from "./CaixaCandidatos.module.css"

export default function CaixaCandidatos(props){

    const [Candidato, setCandidato] = useState(props.listaCandidatos);


    const renderCandidatos = () => Candidato.map(candidato => (
            <React.Fragment key={candidato.id}>
                <CardCandidatoExtendido nome={candidato.nome} localizacao={candidato.cep} telefone={candidato.telefone} imagem="" email={candidato.email} />
            </React.Fragment>
    ))

    return (
        <>
            <h2 className={styles["texto-contador"]}>XX candidatos aplicaram para essa vaga</h2>
            <div className={styles["caixa-candidatos"]}>
                {renderCandidatos()}
            </div>
        </>
    )
}