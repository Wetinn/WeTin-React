import React, { useState, useEffect } from "react";
import styles from './DashboardHome.module.css'
import CardCandidatoSimples from "../../../components/Cards/CardCandidatoSimples/CardCandidatoSimples";
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Overlay from "../../../components/Overlay/Overlay";
import ButtonGhosted from "../../../components/Buttons/ButtonGhosted/ButtonGhosted";
import axios from "axios";

export default function DashboardHome() {


    const [Candidato, setCandidato] = useState([])
    const [ExpandirSideBar, setExpandirSideBar] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }
    //Faz a requisição para o backend
    useEffect(() => {
        const fetchCandidatos = async () => {
            try {
                const response = await axios.get('/candidatos');
                const candidatosComCidade = await Promise.all(
                    response.data.map(async candidato => {
                        const cidade = await buscarCidadePorCep(candidato.cep);
                        return { ...candidato, cidade };
                    }))

                setCandidato(candidatosComCidade)
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
                console.log(loading)
                console.log(error)
            }
        };

        fetchCandidatos();
    });

    const buscarCidadePorCep = async (cep) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

            return response.data.localidade; // "localidade" é o campo que contém a cidade na resposta da ViaCEP
        } catch (error) {
            console.error('Erro ao buscar cidade pelo CEP:', error);
            return 'Cidade desconhecida'; // ou outro valor padrão
        }
    }

    const renderCandidatosFavoritos = () => Candidato.map(candidato => (
        <React.Fragment key={candidato.id}>
            <CardCandidatoSimples nome={candidato.nome} localizacao={candidato.cidade} telefone={candidato.telefone} imagem={candidato.imagem} />
        </React.Fragment>
    ))

    const renderCandidatosRecomendados = () => Candidato.map(candidato => (
        <React.Fragment key={candidato.id}>
            <CardCandidatoSimples nome={candidato.nome} localizacao={candidato.cidade} telefone={candidato.telefone} imagem={candidato.imagem} recomendacao />
        </React.Fragment>
    ))

    return (
        <>
            {ExpandirSideBar && <Overlay />}
            {ExpandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed funcaoExpandir={toggleExpandirSideBar} />
                <div className={styles["caixa-central"]}>

                    <div className={styles["caixa-candidatos"]}>
                        <h3>Candidatos Recomendados</h3>
                        <div className={styles["caixa-cards"]}>
                            {renderCandidatosRecomendados()}
                        </div>
                    </div>

                    <div className={styles["caixa-candidatos"]}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <h3>Candidatos Favoritados</h3>
                            <ButtonGhosted texto="MAIS +" path={"/dashboard/candidatos-favoritos"} />
                        </div>
                        <div className={styles["caixa-cards"]}>
                            {renderCandidatosFavoritos()}
                        </div>
                    </div>
                </div>
                <div className={styles["secao-graficos"]}>
                    <div className={styles["caixa-grafico"]}>
                        <h3>Aderência das vagas</h3>
                        <div className={styles["grafico"]}>
                        </div>
                        <p>
                            Para melhorar a aderência das vagas, considere otimizar os títulos e descrições das vagas com palavras-chave relevantes, promover as vagas em redes sociais e atualizar regularmente o conteúdo para manter o interesse dos candidatos
                        </p>
                    </div>
                    <div className={styles["caixa-grafico"]}>
                        <h3>Relação candidato vaga</h3>
                        <div className={styles["grafico"]}></div>
                    </div>
                </div>
            </div>
        </>
    );
}