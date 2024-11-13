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

    const user = JSON.parse(sessionStorage.user);
    const cep = user.cep;
    const idEmpresa = sessionStorage.idEmpresa
    const [candidatos, setCandidatos] = useState([])
    const [recomendados, setRecomendados] = useState([])
    const [favoritados, setFavoritados] = useState([])
    const [TextoQuantidade, setTextoQuantidade] = useState("XX candidato(s) favorito")
    const [Filtros, setFiltros] = useState(null);
    const [ExpandirSideBar, setExpandirSideBar] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }

    const fetchFiltros = async () => {
        try {
            const response = await axios.get(`/api/filtros/candidato`)

            return response.data;
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        const fetchCandidatosFavoritos = async () => {
            try {
                const candidatosResponse = await axios.get(`/candidatos`);
                
                console.log(candidatosResponse.data)
                const favoritosResponse = await axios.get(`/empresas/${idEmpresa}/consultar-candidatos-favoritos`);
                const recomendadosResponse = await axios.get(`/candidatos/candidatos-proximos/`, { params: { cep } });
    
                const candidatosComCidade = await Promise.all(
                    candidatosResponse.data.map(async (candidato) => {
                        const favoritado = buscarCandidatosFavoritados(candidato.id, favoritosResponse.data);
                        const recomendacao = buscarCandidatosRecomendados(candidato.id, recomendadosResponse.data);
                        return { ...candidato, favoritado, recomendacao };
                    })
                );
    
                const filtrosResponse = await fetchFiltros();
    
                setFavoritados(favoritosResponse.data);
                setRecomendados(recomendadosResponse.data);
                setCandidatos(candidatosComCidade);
                console.log(filtrosResponse)
                setFiltros(filtrosResponse);
                setLoading(false);
                setTextoQuantidade(`${candidatosResponse.data.length} candidato(s) pesquisados`);
            } catch (err) {
                setError(true);
                setLoading(false);
                console.log(err);
            }
        };
    
        fetchCandidatosFavoritos();
    }, [cep, idEmpresa]); // Removidos favoritados e recomendados
    

    const buscarCandidatosFavoritados = (id, response) => {
        for (let i = 0; i < response.length; i++) {
            if (response[i].id === id) {

                return true;
            }
        }
        return false
    }

    const buscarCandidatosRecomendados = (id, response) => {
        for (let i = 0; i < response.length; i++) {
            if (response[i].id === id && response[i].distancia < 25.0) {
                return true;
            }
        }
        return false
    }


    const getCandidatosFavoritos = (variables) => {
        const fetchCandidatoFiltros = async () => {
            if (variables.length !== 0) {
                try {
                    const response = await axios.post(`/api/filtros/candidato`, variables);

                    const candidatosComCidade = await Promise.all(
                        response.data.map(async (candidato) => {
                            const favoritado = buscarCandidatosFavoritados(candidato.id, favoritados);
                            const recomendacao = buscarCandidatosRecomendados(candidato.id, recomendados);
                            return { ...candidato, favoritado, recomendacao };
                        })
                    );
    
                    setCandidatos(candidatosComCidade);
                    setTextoQuantidade(response.data.length + " candidato(s) pesquisados");
                } catch (e) {
                    setError(true);
                    console.log(e);
                }
            } else {
                try {
                    const candidatosResponse = await axios.get(`/candidatos`);
                    const candidatosComCidade = await Promise.all(
                        candidatosResponse.data.map(async (candidato) => {
                            const favoritado = buscarCandidatosFavoritados(candidato.id, favoritados);
                            const recomendacao = buscarCandidatosRecomendados(candidato.id, recomendados);
                            return { ...candidato, favoritado, recomendacao };
                        })
                    );
    
                    setCandidatos(candidatosComCidade);
                    setTextoQuantidade(candidatosComCidade.length + " candidato(s) pesquisados");
                } catch (e) {
                    setError(true);
                    console.log(e);
                }
            }
        };
    
        fetchCandidatoFiltros();
    };

    const renderCandidatos = () => candidatos.map(candidato => (
        <React.Fragment key={candidato.id}>
            <CardCandidatoExtendido
                favorito={candidato.favoritado}
                imagem={candidato.imagem}
                nome={candidato.nome}
                telefone={candidato.telefone}
                localizacao={candidato.cep}
                email={candidato.email}
                id={candidato.id}
                recomendacao={candidato.recomendacao && !candidato.favoritado}
            />
        </React.Fragment>
    ))

    const handleSearch = async (stringDigitada) => {
        try {
            setLoading(true);
            var response;
            if(stringDigitada !== ""){
                response = await axios.get(`/candidatos/pesquisa-candidato/${stringDigitada.toLowerCase()}`) ;
            } else {
                response = await axios.get(`/candidatos`) ;
            }

            const candidatosComCidade = await Promise.all(
                response.data.map(async candidato => {
                    const favoritado = buscarCandidatosFavoritados(candidato.id, favoritados);
                    const recomendacao = buscarCandidatosRecomendados(candidato.id, recomendados);
                    return { ...candidato, favoritado, recomendacao };
            }))

            setCandidatos(candidatosComCidade)
            setTextoQuantidade(response.data.length + " Candidatos pesquisados")
            setLoading(false);
        } catch (e){
            setTextoQuantidade("0 Candidatos pesquisados")
            setCandidatos([])
            setLoading(false);
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
                <div style={{ gap: '8px', display: 'flex', flexDirection: 'column', height: "100%", width: "71.5vw" }}>
                    <BarraPesquisa placeholder="Clique aqui para pesquisar um candidato específico " onSearch={handleSearch}/>
                    <div className={styles["caixa-vagas"]}>
                        <h3>{TextoQuantidade}</h3>
                        <div className={styles["caixa-cards"]}>
                            {renderCandidatos()}
                        </div>
                    </div>
                </div>
                <div style={{ gap: '8px', display: 'flex', flexDirection: 'column' }}>
                    <ButtonFilled texto="" height="72" />
                    {Filtros && (
                        <Filters getObjects={getCandidatosFavoritos} tituloFiltros={Filtros.tituloFiltros} filtros={Filtros.filtros} />
                    )}
                </div>
            </div>
        </>
    );
}