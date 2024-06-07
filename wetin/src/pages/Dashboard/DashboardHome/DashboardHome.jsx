import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './DashboardHome.module.css'
import CardCandidatoSimples from "../../../components/Cards/CardCandidatoSimples/CardCandidatoSimples";
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Overlay from "../../../components/Overlay/Overlay";
import ButtonGhosted from "../../../components/Buttons/ButtonGhosted/ButtonGhosted";
import Loading from "../../../components/Loading/Loading";
import ErrorWarning from "../../../components/ErrorWarning/ErrorWarning";
import BarChart from "../../../components/BarChart/BarChart";
import HalfDoughnutChart from "../../../components/HalfDougnutChart/HalfDougnutChart";

export default function DashboardHome() {

    const [ExpandirSideBar, setExpandirSideBar] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [Candidato, setCandidato] = useState([])
    const [CandidatosAux, setCandidatoAux] = useState([])
    const [aderenciaVagasDados, setAderenciaVagasDados] = useState([]);
    const [candidatoVagaDados, setCandidatoVagaDados] = useState([]);

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }
    //Faz a requisição para o backend
    useEffect(() => {
        const fetchInformacoes = async () => {
            try {
                const candidatosResponse = await axios.get('/candidatos');
                const candidatosComCidade = await Promise.all(
                    candidatosResponse.data.map(async candidato => {
                        const cidade = await buscarCidadePorCep(candidato.cep);
                        return { ...candidato, cidade };
                    }))
                setCandidato(candidatosComCidade) 

                const aderenciaResponse = await axios.get('/empresas/6653542ba7c08d5171246144/consultar-visibilidade');
                setAderenciaVagasDados(aderenciaResponse.data)

                const cadidatoVagaResponse = await axios.get('/empresas/6653542ba7c08d5171246144/consultar-relacao-vaga-candidato');
                setCandidatoVagaDados(cadidatoVagaResponse.data)

                setLoading(false);
            } catch (err) {
                setError(true);
                setLoading(false);
                console.log(err)
            }
        };

        fetchInformacoes();
    });

    const buscarCidadePorCep = async (cep) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

            return response.data.localidade;
        } catch (error) {
            console.error('Erro ao buscar cidade pelo CEP:', error);
            return 'Cidade desconhecida';
        }
    }

    const renderCandidatosFavoritos = () => Candidato.map(candidato => (
        <React.Fragment key={candidato.id}>
            <CardCandidatoSimples nome={candidato.nome} localizacao={candidato.cidade} telefone={candidato.telefone} imagem={candidato.imagem} info={candidato} />
        </React.Fragment>
    ))

    const renderCandidatosRecomendados = () => Candidato.map(candidato => (
        <React.Fragment key={candidato.id}>
            <CardCandidatoSimples nome={candidato.nome} localizacao={candidato.cidade} telefone={candidato.telefone} imagem={candidato.imagem} info={candidato} recomendacao />
        </React.Fragment>
    ))

    return (
        <>
            {error && <ErrorWarning />}
            {loading && <Loading />}
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
                            <h2>{`${aderenciaVagasDados}%`}</h2>
                            <HalfDoughnutChart data={aderenciaVagasDados} />
                        </div>
                        <p>
                            Para melhorar a aderência das vagas, considere otimizar os títulos e descrições das vagas com palavras-chave relevantes, promover as vagas em redes sociais e atualizar regularmente o conteúdo para manter o interesse dos candidatos
                        </p>
                    </div>
                    <div className={styles["caixa-grafico"]}>
                        <h3>Relação candidato vaga</h3>
                        <div className={styles["grafico"]}>
                            <BarChart qtdVagas={candidatoVagaDados.qtdVagas} qtdCandidatos={candidatoVagaDados.qtdCandidatos}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}