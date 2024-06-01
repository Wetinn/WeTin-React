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

export default function CandidatosFavoritos() {

    const [ExpandirSideBar, setExpandirSideBar] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }

    const [candidatos, setCandidatos] = useState([])
    const [TextoQuantidade, setTextoQuantidade] = useState("XX candidato(s) favorito")

    useEffect(() => {
        const fetchCandidatosFavoritos = async () => {
            try {
                const candidatosResponse = await axios.get('/empresas/6653542ba7c08d5171246144/consultar-candidatos-favoritos');
                const candidatosComCidade = await Promise.all(
                    candidatosResponse.data.map(async candidato => {
                        const cidade = await buscarCidadePorCep(candidato.cep);
                        return { ...candidato, cidade };
                    }))
                console.log(candidatosResponse.data)
                setCandidatos(candidatosComCidade)
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

    const getCandidatosFavoritos = () => {
        renderCandidatos();
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
                    <Filters getObjects={getCandidatosFavoritos} tituloFiltros={tituloFiltros} filtros={filtros} />
                </div>
            </div>
        </>
    );
}