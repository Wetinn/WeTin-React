import React, { useState, useEffect } from "react";
import styles from './VagasPublicadas.module.css'
import Filters from "../../../components/Filters/Filters";
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Overlay from "../../../components/Overlay/Overlay";
import ButtonFilled from "../../../components/Buttons/ButtonFilled/ButtonFilled";
import BarraPesquisa from "../../../components/BarraPesquisa/BarraPesquisa";
import CardVaga from "../../../components/Cards/CardVaga/CardVaga"
import Loading from "../../../components/Loading/Loading";
import ErrorWarning from "../../../components/ErrorWarning/ErrorWarning";
import axios from "axios";



export default function VagasPublicadas() {

    const idEmpresa = sessionStorage.idEmpresa
    const [Filtros, setFiltros] = useState(null);
    const [ExpandirSideBar, setExpandirSideBar] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [Vagas, setVagas] = useState([])
    const [TextoQuantidade, setTextoQuantidade] = useState(`${Vagas.length} Vagas publicadas`)

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }

    const fetchFiltros = async () => {
        try{
            const response = await axios.get(`/api/filtros/vaga`)

            console.log(response.data)

            return response.data;
        } catch(e){
            console.log(e)
            return [];
        }
        
    }

    useEffect(() => {
        const fetchVagas = async () => {
            try {
                const response = await axios.get(`/vagas/${idEmpresa}/consultar-vagas`);
                const filtrosResponse = await fetchFiltros()
                setVagas(response.data)
                setTextoQuantidade(response.data.length + " Vagas publicadas")
                setFiltros(filtrosResponse)

                setLoading(false);
            } catch (e) {
                setLoading(false);
                setError(true);
                console.log(e)
            }
        };

        
        fetchVagas();
    }, [idEmpresa]);

    const getVaga = (variables) => {
        const fetchVagasFiltros = async () => {
            if(variables.length !== 0){
                try {
                    const response = await axios.post(`/api/filtros/vaga`, variables) ;
                    setVagas(response.data)
                    setTextoQuantidade(response.data.length + " Vagas publicadas")
                } catch (e){
                    setError(true);
                    console.log(e)
                }
            } else {
                try {
                    const response = await axios.get(`/vagas/${idEmpresa}/consultar-vagas`);
                    setVagas(response.data)
                    setTextoQuantidade(response.data.length + " Vagas publicadas")
                    setLoading(false);
                } catch (e) {
                    setLoading(false);
                    setError(true);
                    console.log(e)
                }
            }

        }

        fetchVagasFiltros();
    }

    const renderVagas = () => Vagas.map(vaga => (
        <React.Fragment key={vaga.id}>
            <CardVaga getObject={getVaga} titulo={vaga.titulo} descricao={vaga.descricao} imagem={vaga.imagem} info={vaga} status={vaga.statusVaga}/>
        </React.Fragment>
    ))

    const handleSearch = async (stringDigitada) => {
        try {
            const response = await axios.get(`/vagas/pesquisa-vaga/${stringDigitada}`) ;
            setVagas(response.data)
            setTextoQuantidade(response.data.length + " Vagas publicadas")
        } catch (e){
            setVagas([]);
            setTextoQuantidade("0    Vagas publicadas")
            console.log(e)
        }
    }


    return (
        <>
            {error && <ErrorWarning />}
            {loading && <Loading />}
            {ExpandirSideBar && <Overlay />}
            {ExpandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed funcaoExpandir={toggleExpandirSideBar} />
                <div style={{ gap: '8px', display: 'flex', flexDirection: 'column', height: "100%", width: "71.5vw", flex: "1"}}>
                    <BarraPesquisa placeholder="Clique aqui para pesquisar uma vaga específica" onSearch={handleSearch}/>
                    <div className={styles["caixa-vagas"]}>
                        <h3>{TextoQuantidade}</h3>
                        <div className={styles["caixa-cards"]}>
                            {renderVagas()}
                        </div>
                    </div>
                </div>
                <div style={{ gap: '8px', display: 'flex', flexDirection: 'column' }}>
                    <ButtonFilled texto="Adicionar vaga" height="64" path="/dashboard/publicarVaga"/>
                    {Filtros && (
                        <Filters getObjects={getVaga} tituloFiltros={Filtros.tituloFiltros} filtros={Filtros.filtros} />
                    )}
                </div>
            </div>
        </>
    );
}