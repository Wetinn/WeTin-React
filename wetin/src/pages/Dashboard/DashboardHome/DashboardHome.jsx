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

    const user = JSON.parse(sessionStorage.user);
    const cep = user.cep;
    console.log(cep)
    const idEmpresa = sessionStorage.idEmpresa
    const [ExpandirSideBar, setExpandirSideBar] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [Candidatos, setCandidatos] = useState([])
    const [CandidatosRecomendados, setCandidatosRecomendados] = useState([])
    const [aderenciaVagasDados, setAderenciaVagasDados] = useState([]);
    const [candidatoVagaDados, setCandidatosVagaDados] = useState([]);

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }
    //Faz a requisição para o backend
    useEffect(() => {
        const fetchInformacoes = async () => {
            try {
                const candRecomendadosRes = await axios.get(`/candidatos/candidatos-proximos/`, {params: {cep}})
                const candidatosResponse = await axios.get('/candidatos');
                try{
                    const aderenciaResponse = await axios.get(`/empresas/${idEmpresa}/consultar-visibilidade`);
                    setAderenciaVagasDados(aderenciaResponse.data)
                } catch(e){
                    setAderenciaVagasDados(0)
                }
                const candidatoVagaResponse = await axios.get(`/empresas/${idEmpresa}/consultar-relacao-vaga-candidato`);
                const recomendacoes = [];
                candidatosResponse.data.map(candidato => {
                    const recomendacao = buscarCandidatosRecomendados(candidato.id, candRecomendadosRes);
                    if(recomendacao === true){
                        recomendacoes.push(candidato)
                    }
                    return true;
                })


                setCandidatos(candidatosResponse.data) 
                setCandidatosRecomendados(recomendacoes)          
                setCandidatosVagaDados(candidatoVagaResponse.data)
                setLoading(false);
            } catch (err) {
                setError(true);
                setLoading(false);
            }
        };

        fetchInformacoes();
    });

    const buscarCandidatosRecomendados = (id, response) => {
        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].id === id && response.data[i].distancia < 25.0) {
                return true;
            }
        }
        return false
    }

    const renderCandidatos = () => Candidatos.map(candidato => (
        <React.Fragment key={candidato.id}>
            <CardCandidatoSimples nome={candidato.nome} localizacao={candidato.cep} telefone={candidato.telefone} imagem={candidato.imagem} info={candidato} />
        </React.Fragment>
    ))

    const renderCandidatosRecomendados = () => CandidatosRecomendados.map(candidato => (
        <React.Fragment key={candidato.idCandidato}>
            <CardCandidatoSimples nome={candidato.nome} localizacao={candidato.cep} telefone={candidato.telefone} imagem={candidato.imagem} info={candidato} recomendacao />
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
                            <h3>Outros Candidatos</h3>
                            <ButtonGhosted texto="MAIS +" path={"/dashboard/candidatos-favoritos"} />
                        </div>
                        <div className={styles["caixa-cards"]}>
                            {renderCandidatos()}
                        </div>
                    </div>
                </div>
                <div className={styles["secao-graficos"]}>
                    <div className={styles["caixa-grafico"]}>
                        <h3>Aderência das vagas</h3>
                        <div className={styles["grafico"]}>
                            <h2>{`${Number(aderenciaVagasDados).toFixed(2)}%`}</h2>
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