import React, { useEffect, useState } from "react";
import styles from './InformacoesVaga.module.css'
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Filters from "../../../components/Filters/Filters";
import Overlay from "../../../components/Overlay/Overlay";
import Detalhes from "./Detalhes/Detalhes";
import CaixaCandidatos from "./CaixaCandidatos/CaixaCandidatos";
import axios from "axios";
import ButtonFilled from "../../../components/Buttons/ButtonFilled/ButtonFilled";
import { useParams } from "react-router-dom";

export default function InformacoesVaga() {

    // Secao Lógica SideBar 
    const [ExpandirSideBar, setExpandirSideBar] = useState(false);

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }

    // Secao lógica NavBar 
    const [Ativo, setAtivo] = useState("detalhes");
    const setSectionDetalhes = () => {
        setAtivo("detalhes")
        setSectionOperator("detalhes")
    }
    const setSectionCandidatos = () => {
        setAtivo("candidatos")
        setSectionOperator("candidatos")
    }

    // Secao requisições para o Back-end 
    const { id } = useParams();
    const [InformacoesVaga, setInformacoesVaga] = useState([]);
    useEffect(() => {
        const fetchInformacoesVaga = async () => {
            try {
                const response = await axios.get(`/vagas/${id}`);
                console.log(response)
                setInformacoesVaga(response.data)

            } catch (e) {
                console.log(e)
            }
        };

        fetchInformacoesVaga();
    }, []);

    //Lógica operador de seções (Mudança entre detalhes e candidatos da vaga)
    const [SectionOperator, setSectionOperator] = useState("detalhes");
    const renderSectionConteudo = () => {
        switch (SectionOperator) {
            case "detalhes":
                return <Detalhes descricao={InformacoesVaga.descricao} requisitos={InformacoesVaga.requisitos} responsabilidades={InformacoesVaga.responsabilidades}/>
            case "candidatos":
                return <CaixaCandidatos listaCandidatos={InformacoesVaga}/>
            default:
                return <Detalhes descricao={InformacoesVaga.descricao} requisitos={InformacoesVaga.requisitos} responsabilidades={InformacoesVaga.responsabilidades}/>
        }
    }
    const renderColunaLateral = () => {
        switch (SectionOperator) {
            case "detalhes":
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
                    <ButtonFilled texto="Editar Vaga" />
                </div>)
                
            case "candidatos":
                return (
                    <div style={{ gap: '8px', display: 'flex', flexDirection: 'column', margin: "8px 8px 8px 0px" }}>
                        <ButtonFilled texto="Exportar candidatos para .csv" height="64" />
                        <Filters tituloFiltros={[]} filtros={[]} />
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
                    <ButtonFilled texto="Editar Vaga"/>
                </div>
                )
        }
    }


    return (
        <>
            {ExpandirSideBar && <Overlay />}
            {ExpandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed funcaoExpandir={toggleExpandirSideBar} />
                <div className={styles["caixa-central"]}>
                    <div className={styles["caixa-vaga"]}>
                        <img className={styles["banner"]} src="https://comavemoveis.com.br/site/wp-content/uploads/2016/10/banner-escritorio.jpg" />
                        <div className={styles["navbar-vaga"]}>
                            <div className={`${styles["item-navbar-vaga"]} ${Ativo === "detalhes" ? styles["ativo"] : ""}`} onClick={() => setSectionDetalhes()}>Detalhes</div>
                            <div className={`${styles["item-navbar-vaga"]} ${Ativo === "candidatos" ? styles["ativo"] : ""}`} onClick={() => setSectionCandidatos()}>
                                Candidatos <span className={styles["contador-candidatos"]}>{InformacoesVaga.length}</span>
                            </div>
                        </div>
                        <h1 className={styles["titulo-vaga"]}>Estagiário de Marketing Digital</h1>
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