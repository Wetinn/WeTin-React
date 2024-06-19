import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './PerfilCandidato.module.css'
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Overlay from "../../../components/Overlay/Overlay";
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import ButtonFavorite from "../../../components/Buttons/ButtonFavorite/ButtonFavorite";
import LocalIcon from "../../../utils/assets/icons/LocalIcon.png"
import EmailIcon from "../../../utils/assets/icons/EmailIcon.png"
import CallIcon from "../../../utils/assets/icons/CallIcon.png"
import Loading from "../../../components/Loading/Loading";
import ErrorWarning from "../../../components/ErrorWarning/ErrorWarning";
import axios from "axios";

export default function PerfilCandidato() {

    // Secao Lógica SideBar 
    const { id } = useParams();
    const idEmpresa = sessionStorage.idEmpresa;
    const [ExpandirSideBar, setExpandirSideBar] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }

    const [Favoritado, setFavoritado] = useState();
    const [renderFavoritado, setRenderFavoritado] = useState(false);
    const [PerfilCandidato, setPerfilCandidato] = useState();

    const verificarFavoritos = async (idCandidatoAtual, idEmpresa) => {
        try {
            const response = await axios.get(`/empresas/${idEmpresa}`);
            const listaCandidatosFavoritos = response.data.candidatosFavoritos;
            return listaCandidatosFavoritos.includes(idCandidatoAtual);
        } catch (e) {
            console.error('Erro ao buscar favoritado', e);
            return false;
        }
    };

    useEffect(() => {
        const fetchPerfilCandidato = async () => {
            try {
                const response = await axios.get(`/candidatos/${id}`);
                const endereco = JSON.parse(response.data.cep);
                const favoritado = await verificarFavoritos(id, idEmpresa);
                const perfilCandidatoCompleto = { ...response.data, endereco, favoritado };

                setFavoritado(favoritado);
                setPerfilCandidato(perfilCandidatoCompleto);
                setRenderFavoritado(true);
                setLoading(false);

            } catch (err) {
                setError(true);
                setLoading(false);
            }
        };

        fetchPerfilCandidato();
    }, [id, idEmpresa]);



    // Renderização experiencias
    const renderExperiencias = () => PerfilCandidato?.experiencias.map((experiencia, index) => (
        <React.Fragment key={index}>
            <div className={styles["item-cluster"]}>
                <div className={styles["bola"]}></div>
                <div className={styles["hgroup-experiencia"]}>
                    <h3 className={styles["experiencia-titulo"]}>{experiencia.cargo}</h3>
                    <h4 className={styles["experiencia-tempo"]}>{experiencia.dtInicio} a {experiencia.dtFim}</h4>
                </div>
            </div>
        </React.Fragment>
    ))
    // Renderização habilidades
    const renderHabilidades = () => PerfilCandidato?.habilidades.map((habilidade, index) => (
        <React.Fragment key={index}>
            <div className={styles["item-cluster"]}>
                <div className={styles["bola"]}></div>
                <h3 className={styles["texto-habilidade"]}>{habilidade.habilidade}</h3>
            </div>
        </React.Fragment >
    ))
    // Renderização quiz
    const renderQuiz = () => PerfilCandidato?.quizz.map((pergunta, index) => (
        <React.Fragment key={index}>
            <div className={styles["item-quiz"]}>
                <h2 className={styles["texto-pergunta"]}>{pergunta.pergunta}</h2>
                <h3 className={styles["texto-resposta"]}>{pergunta.resposta}</h3>
            </div>
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
                <div className={styles["caixa-perfil"]}>
                    <div className={styles["banner"]}></div>
                    <div className={styles["caixa-conteudo"]}>
                        <div className={styles["caixa-barra-esquerda"]}>
                            <div className={styles["container-foto"]}>
                                <img className={styles["foto-candidato"]} src={PerfilCandidato?.imagem} alt="Foto candidato" />
                            </div>
                            {renderFavoritado && <ButtonFavorite favoritado={Favoritado} idCandidato={id} idEmpresa={idEmpresa} />}
                        </div>
                        <div className={styles["caixa-informacoes"]}>
                            <div className={styles["card"]}>
                                <hgroup className={styles["introducao"]}>
                                    <h1 className={styles["nome-usuario"]}>{PerfilCandidato?.nome}</h1>
                                    <h2 className={styles["descricao"]}>{PerfilCandidato?.especialidade}</h2>
                                    <h3 className={styles["sobre"]}>{PerfilCandidato?.descricao}</h3>
                                </hgroup>
                                <div className={styles["listaInformacoes"]}>
                                    <h2 className={styles["subtitulo"]}>Informações</h2>
                                    <div className={styles["informacoes-icones"]}>
                                        <img className={styles["icone"]} src={LocalIcon} alt="Localização" />
                                        <h4>{PerfilCandidato?.endereco.address}, {PerfilCandidato?.endereco.district} - {PerfilCandidato?.endereco.city}, {PerfilCandidato?.endereco.state} </h4>
                                    </div>
                                    <div className={styles["informacoes-icones"]}>
                                        <img className={styles["icone"]} src={EmailIcon} alt="Email" />
                                        <h4>{PerfilCandidato?.email}</h4>
                                    </div>
                                    <div className={styles["informacoes-icones"]}>
                                        <img className={styles["icone"]} src={CallIcon} alt="Telefone" />
                                        <h4>{PerfilCandidato?.telefone}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["card"]}>
                                <h1 className={styles["topico"]}>Experiências</h1>
                                <div className={styles["lista-itens"]}>
                                    {renderExperiencias()}
                                </div>
                            </div>
                            <div className={styles["card"]}>
                                <h1 className={styles["topico"]}>Habilidades</h1>
                                <div className={styles["lista-itens"]}>
                                    {renderHabilidades()}
                                </div>
                            </div>
                            <div className={styles["card"]}>
                                <h1 className={styles["topico"]}>Quiz</h1>
                                <div className={styles["lista-itens"]}>
                                    {renderQuiz()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}