import React, { useEffect, useState } from "react";
import styles from './InformacoesVaga.module.css'
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import CardCandidatoExtendido from "../../../components/Cards/CardCandidatoExtendido/CardCandidatoExtendido" 
import Filters from "../../../components/Filters/Filters";
import Overlay from "../../../components/Overlay/Overlay";
import Detalhes from "./Detalhes/Detalhes";
import CaixaCandidatos from "./CaixaCandidatos/CaixaCandidatos";
import axios from "axios";
import ButtonFilled from "../../../components/Buttons/ButtonFilled/ButtonFilled";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import ErrorWarning from "../../../components/ErrorWarning/ErrorWarning";
//import fileDownload from 'js-file-download'

export default function InformacoesVaga() {

    const { id } = useParams();
    const [ExpandirSideBar, setExpandirSideBar] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [SectionOperator, setSectionOperator] = useState("detalhes");
    const [InformacoesVaga, setInformacoesVaga] = useState([]);   
    const [Candidato, setCandidato] = useState([]);
    const [Filtros, setFiltros] = useState([]);

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }

    const [Ativo, setAtivo] = useState("detalhes");
    const setSectionDetalhes = () => {
        setAtivo("detalhes")
        setSectionOperator("detalhes")
    }
    const setSectionCandidatos = () => {
        setAtivo("candidatos")
        setSectionOperator("candidatos")
    }

    
    const fetchFiltros = async () => {
        try{
            const response = await axios.get(`/api/filtros/candidato`)

            return response.data;
        } catch(e){
            console.log(e)
            return []
        }
        
    }

    const downloadCsv = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`/vagas/GerarArquivoCSV/${id}`)
            console.log(response.data)
            const link = document.createElement('a')
            document.body.appendChild(link)
            link.href = response.data.body
            link.click();

            setLoading(false)
        } catch (e){
            setLoading(false)     
            setError(true)
            console.log(e)
        }
    }

    useEffect(() => {
        const fetchInformacoesVaga = async () => {
            try {
                const response = await axios.get(`/vagas/${id}/empresa`);
                const candidatosResponse = await axios.get(`/vagas/consultar-candidatos/${id}`)
                const filtrosResponse = await fetchFiltros()

                setInformacoesVaga(response.data)
                setCandidato(candidatosResponse.data)
                setFiltros(filtrosResponse)
                setLoading(false);
            } catch (err) {
                setError(true);
                setLoading(false);
                console.log(err)
            }
        };

        fetchInformacoesVaga();
    }, [id]);

    const renderSectionConteudo = () => {
        switch (SectionOperator) {
            case "detalhes":
                return <Detalhes descricao={InformacoesVaga.descricao} requisitos={InformacoesVaga.requisitos} responsabilidades={InformacoesVaga.responsabilidades} />
            case "candidatos":
                return <CaixaCandidatos renderFunction={renderCandidatos} quantidadeCandidatos={Candidato?.length}/>
            default:
                return <Detalhes descricao={InformacoesVaga.descricao} requisitos={InformacoesVaga.requisitos} responsabilidades={InformacoesVaga.responsabilidades} />
        }
    }
    const renderColunaLateral = () => {
        var cargaHorariaFormatada = InformacoesVaga.cargaHoraria;
        if (typeof variable === 'string') {
            cargaHorariaFormatada = InformacoesVaga.cargaHoraria.replace("_", " ")
        }
        
        switch (SectionOperator) {
            case "detalhes":
                return (
                    <div className={styles["caixa-informacoes"]}>
                        <div className={styles["informacoes"]}>
                            <h1>Informações</h1>
                            <h2>Localização</h2>
                            <p>{InformacoesVaga.cidade}</p>
                            <h2>Período e carga horária</h2>
                            <p>{`${InformacoesVaga.periodo}, ${cargaHorariaFormatada} por dia`}</p>
                            <h2>Beneficios</h2>
                            <p>{InformacoesVaga.beneficios}</p>
                            <h2>Status</h2>
                            <p>{InformacoesVaga.status}</p>
                        </div>
                        <ButtonFilled texto="Editar Vaga" path={`/dashboard/editarVaga/${id}`}/>
                    </div>)

            case "candidatos":
                return (
                    <div style={{ gap: '8px', display: 'flex', flexDirection: 'column', margin: "8px 8px 8px 0px" }}>
                        <ButtonFilled texto="Exportar candidatos para .csv" height="64" onClick={downloadCsv}/>
                        {Filtros && (
                            <Filters getObjects={getCandidatos} tituloFiltros={Filtros.tituloFiltros} filtros={Filtros.filtros} />
                        )}
                    </div>
                )
            default:
                return (
                    <div className={styles["caixa-informacoes"]}>
                        <div className={styles["informacoes"]}>
                            <h1>Informações</h1>
                            <h2>Localização</h2>
                            <p>{InformacoesVaga.cidade}</p>
                            <h2>Período e carga horária</h2>
                            <p>{`${InformacoesVaga.periodo}, ${InformacoesVaga.cargaHoraria} por dia`}</p>
                            <h2>Beneficios</h2>
                            <p>{InformacoesVaga.beneficios}</p>
                            <h2>Status</h2>
                            <p>{InformacoesVaga.status}</p>
                        </div>
                        <ButtonFilled texto="Editar Vaga" path={`/dashboard/editarVaga/${id}`}/>
                    </div>
                )
        }
    }

    const getCandidatos = (variables) => {
        const fetchCandidatoFiltros = async () => {
            if(variables.length !== 0){
                try {
                    const response = await axios.post(`/api/filtros/candidato`, variables) ;
                    setCandidato(response.data)

                } catch (e){
                    setError(true);
                    console.log(e)
                }
            } else {
                try {
                    const response = await axios.get(`/vagas/consultar-candidatos/${id}`);
                    setCandidato(response.data);
                } catch (e) {
                    setLoading(false);
                    setError(true);
                    console.log(e)
                }
            }
        }

        fetchCandidatoFiltros();
    }



    const renderCandidatos = () => {
        return Candidato.map(candidato => (
            <React.Fragment key={candidato.id}>
                <CardCandidatoExtendido id={candidato.id} nome={candidato.nome} localizacao={candidato.cep} telefone={candidato.telefone} imagem={candidato.imagem} email={candidato.email} />
            </React.Fragment>
        ))
    } 
        
       

    return (
        <>
            {error && <ErrorWarning />}
            {loading && <Loading />}
            {ExpandirSideBar && <Overlay />}
            {ExpandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed funcaoExpandir={toggleExpandirSideBar} />
                <div className={styles["caixa-central"]}>
                    <div className={styles["caixa-vaga"]}>
                        <img className={styles["banner"]} src="https://comavemoveis.com.br/site/wp-content/uploads/2016/10/banner-escritorio.jpg" alt="Imagem banner"/>
                        <div className={styles["navbar-vaga"]}>
                            <div className={`${styles["item-navbar-vaga"]} ${Ativo === "detalhes" ? styles["ativo"] : ""}`} onClick={() => setSectionDetalhes()}>Detalhes</div>
                            <div className={`${styles["item-navbar-vaga"]} ${Ativo === "candidatos" ? styles["ativo"] : ""}`} onClick={() => setSectionCandidatos()}>
                                Candidatos <span className={styles["contador-candidatos"]}>{InformacoesVaga.candidatos?.length || 0}</span>
                            </div>
                        </div>
                        <h1 className={styles["titulo-vaga"]}>{InformacoesVaga.titulo}</h1>
                        <div className={styles["caixa-conteudo"]}>
                            {renderSectionConteudo()}
                        </div>
                    </div>
                </div>
                {renderColunaLateral()}
            </div>
        </>
    );
}