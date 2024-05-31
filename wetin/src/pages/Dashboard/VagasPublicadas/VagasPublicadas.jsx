import React, { useState, useEffect } from "react";
import styles from './VagasPublicadas.module.css'
import Filters from "../../../components/Filters/Filters";
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Overlay from "../../../components/Overlay/Overlay";
import ButtonFilled from "../../../components/Buttons/ButtonFilled/ButtonFilled";
import BarraPesquisa from "../../../components/BarraPesquisa/BarraPesquisa";
import CardVaga from "../../../components/Cards/CardVaga/CardVaga"
import axios from "axios";

const cidades = [
    { "_id": 1, "nome": "São Paulo" },
    { "_id": 2, "nome": "Rio de Janeiro" },
    { "_id": 3, "nome": "Manaus" },
    { "_id": 4, "nome": "Brasília" },
    { "_id": 5, "nome": "São Caetano" },
]

const especialidades = [
    { "_id": 1, "nome": "Desenvolvedor" },
    { "_id": 2, "nome": "Caixa de supermercado" },
    { "_id": 3, "nome": "Jogador de futebol" },
    { "_id": 4, "nome": "Açougueiro" },
]

const filtros = [cidades, especialidades]
const tituloFiltros = [
    { "id": 1, "titulo": "Cidades" },
    { "id": 2, "titulo": "Especialidades" }]

export default function VagasPublicadas() {

    const [ExpandirSideBar, setExpandirSideBar] = useState(false);

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }

    const [Vagas, setVagas] = useState([])
    const [TextoQuantidade, setTextoQuantidade] = useState(`${Vagas.length} Vagas publicadas`)

    useEffect(() => {
        const fetchVagas = async () => {
            try {
                const response = await axios.get(`/vagas/6653542ba7c08d5171246144/consultar-vagas`);
                console.log(response)
                setVagas(response.data)
                setTextoQuantidade( response.data.length + " Vagas publicadas")

            } catch (e) {
                console.log(e)
            }
        };

        fetchVagas();
    }, []);

    const getVaga = () => {


        renderVagas();
    }

    const renderVagas = () => Vagas.map(vaga => (
        <React.Fragment key={vaga.id}>
            <CardVaga titulo={vaga.titulo} descricao={vaga.descricao} imagem={vaga.imagem} info={vaga}/>
        </React.Fragment>
    ))


    return (
        <>
            {ExpandirSideBar && <Overlay />}
            {ExpandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed funcaoExpandir={toggleExpandirSideBar}/>
                <div style={{ gap: '8px', display: 'flex', flexDirection: 'column', height: "100%", width: "71.5vw" }}>
                    <BarraPesquisa placeholder="Clique aqui para pesquisar uma vaga específica" />
                    <div className={styles["caixa-vagas"]}>
                        <h3>{TextoQuantidade}</h3>
                        <div className={styles["caixa-cards"]}>
                            {renderVagas()}
                        </div>
                    </div>
                </div>
                <div style={{ gap: '8px', display: 'flex', flexDirection: 'column' }}>
                    <ButtonFilled texto="Adicionar vaga" height="64" />
                    <Filters getObjects={getVaga} tituloFiltros={tituloFiltros} filtros={filtros} />
                </div>
            </div>
        </>
    );
}