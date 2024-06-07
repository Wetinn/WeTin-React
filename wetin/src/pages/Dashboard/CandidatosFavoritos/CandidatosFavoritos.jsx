import React, { useState, useEffect } from "react";
import styles from './CandidatosFavoritos.module.css'
import Filters from "../../../components/Filters/Filters";
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Overlay from "../../../components/Overlay/Overlay";
import ButtonFilled from "../../../components/Buttons/ButtonFilled/ButtonFilled";
import BarraPesquisa from "../../../components/BarraPesquisa/BarraPesquisa";
import CardCandidatoExtendido from "../../../components/Cards/CardCandidatoExtendido/CardCandidatoExtendido"
import Loading from "../../../components/Loading/Loading";
import ErrorWarning from "../../../components/ErrorWarning/ErrorWarning";
import axios from "axios";

export default function CandidatosFavoritos() {

    const [Filtros, setFiltros] = useState(null);
    const [ExpandirSideBar, setExpandirSideBar] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }

    const idEmpresa = sessionStorage.idEmpresa
    const [candidatos, setCandidatos] = useState([])
    const [TextoQuantidade, setTextoQuantidade] = useState("XX candidato(s) favorito")

    const fetchFiltros = async () => {
        try{
            const response = await axios.get(`/api/filtros`)

            return response.data;
        } catch(e){
            console.log(e)
        }
        
    }

    useEffect(() => {
        const fetchCandidatosFavoritos = async () => {
            try {
                const candidatosResponse = await axios.get(`/empresas/${idEmpresa}/consultar-candidatos-favoritos`);
                const candidatosComCidade = await Promise.all(
                    candidatosResponse.data.map(async candidato => {
                        const cidade = await buscarCidadePorCep(candidato.cep);
                        return { ...candidato, cidade };
                    }))
                const filtrosResponse = await fetchFiltros()

                setCandidatos(candidatosComCidade)
                setFiltros(filtrosResponse)
                setLoading(false);
                setTextoQuantidade(`${candidatosResponse.data.length} candidato(s) favorito`)
            } catch (err) {
                setError(true);
                setLoading(false);
                console.log(err)
            }
        };

        fetchCandidatosFavoritos();
    }, []);

    const buscarCidadePorCep = async (cep) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

            return response.data.localidade; 
        } catch (error) {
            console.error('Erro ao buscar cidade pelo CEP:', error);
            return 'Cidade desconhecida'; 
        }
    }

    const getCandidatosFavoritos = (variables) =>{
        const fetchCandidatoFiltros = async () => {
            if(variables.length != 0){
                try {
                    const response = await axios.post(`/api/filtros`, variables) ;
                    const responseComCidade = await Promise.all(
                        response.data.map(async candidato => {
                            const cidade = await buscarCidadePorCep(candidato.cep);
                            return { ...candidato, cidade };
                        }))
                    console.log(responseComCidade.data)
                    setCandidatos(response.data)
                    setTextoQuantidade(response.data.length + " Vagas publicadas")
                } catch (e){
                    setError(true);
                    console.log(e)
                }
            } else {
                try {
                    const response = await axios.get(`/empresas/${idEmpresa}/consultar-candidatos-favoritos`, {params: variables}) ;
                    setCandidatos(response.data)
                    setTextoQuantidade(response.data.length + " Vagas publicadas")
                } catch (e){
                    setError(true);
                    console.log(e)
                }
            }
        }
    
        fetchCandidatoFiltros();
    }

    const renderCandidatos = () => candidatos.map(candidato => (
        <React.Fragment key={candidato.id}>
            <CardCandidatoExtendido
                favorito={true}
                imagem={candidato.imagem}
                nome={candidato.nome}
                telefone={candidato.telefone}
                localizacao={candidato.cidade}
                email={candidato.email}
                id={candidato.id}
            />
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
                <div style={{ gap: '8px', display: 'flex', flexDirection: 'column', height: "100%", width: "71.5vw" }}>
                    <BarraPesquisa placeholder="Clique aqui para pesquisar um candidato específico " />
                    <div className={styles["caixa-vagas"]}>
                        <h3>{TextoQuantidade}</h3>
                        <div className={styles["caixa-cards"]}>
                            {renderCandidatos()}
                        </div>
                    </div>
                </div>
                <div style={{ gap: '8px', display: 'flex', flexDirection: 'column' }}>
                    <ButtonFilled texto="Exportar candidatos para .csv" height="72" />
                    {Filtros && (
                        <Filters getObjects={getCandidatosFavoritos} tituloFiltros={Filtros.tituloFiltros} filtros={Filtros.filtros} />
                    )}
                </div>
            </div>
        </>
    );
}