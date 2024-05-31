import React, { useEffect, useState } from "react";
import styles from './PerfilCandidato.module.css'
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Overlay from "../../../components/Overlay/Overlay";
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import ButtonFavorite from "../../../components/Buttons/ButtonFavorite/ButtonFavorite";
import LocalIcon from "../../../utils/assets/icons/LocalIcon.png"
import EmailIcon from "../../../utils/assets/icons/EmailIcon.png"
import CallIcon from "../../../utils/assets/icons/CallIcon.png"
import axios from "axios";

export default function PerfilCandidato() {

    // Secao Lógica SideBar 
    const [ExpandirSideBar, setExpandirSideBar] = useState(false);

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }


    return (
        <>
            {ExpandirSideBar && <Overlay />}
            {ExpandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed funcaoExpandir={toggleExpandirSideBar} />
                <div className={styles["caixa-perfil"]}>
                    <div className={styles["banner"]}></div>
                    <div className={styles["caixa-conteudo"]}>
                        <div className={styles["caixa-barra-esquerda"]}>
                            <div className={styles["container-foto"]}>
                                <img className={styles["foto-candidato"]} src="https://s2-gshow.glbimg.com/9SI_8Qwi1oxpktBiv2XtpeaKn9A=/0x0:1600x2218/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2017/2/P/tYAvrrTACArtaZBZAQ1Q/20061006-a-grande-familia-jm-37.jpg" alt="Foto candidato" />
                            </div>
                            <ButtonFavorite />
                        </div>
                        <div className={styles["caixa-informacoes"]}>
                            <div className={styles["card"]}>
                                <hgroup className={styles["introducao"]}>
                                    <h1 className={styles["nome-usuario"]}>Maria Eduarda Almeida Carvalho</h1>
                                    <h2 className={styles["descricao"]}>Atendente de caixa</h2>
                                    <h3 className={styles["sobre"]}>Olá! Me chamo Maria Eduarda, sou muito dedicada e esforçada.
                                        Adoro conversar com as pessoas e sou muito proativa!<br />Palavra que me define: Esforço!</h3>
                                </hgroup>
                                <div className={styles["listaInformacoes"]}>
                                    <h2 className={styles["subtitulo"]}>Informações</h2>
                                    <div className={styles["informacoes-icones"]}>
                                        <img className={styles["icone"]} src={LocalIcon} alt="Localização" />
                                        <h4>São Caetano do Sul - Bairro Santa Paula</h4>
                                    </div>
                                    <div className={styles["informacoes-icones"]}>
                                        <img className={styles["icone"]} src={EmailIcon} alt="Email" />
                                        <h4>maria@gmail.com</h4>
                                    </div>
                                    <div className={styles["informacoes-icones"]}>
                                        <img className={styles["icone"]} src={CallIcon} alt="Telefone" />
                                        <h4>+55 (11) 94255-5543</h4>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["card"]}>
                                <h1 className={styles["topico"]}>Habilidades</h1>
                                <div className={styles["lista-itens"]}>
                                    <div className={styles["item-cluster"]}>
                                        <div className={styles["bola"]}></div>
                                        <div className={styles["hgroup-experiencia"]}>
                                            <h3 className={styles["experiencia-titulo"]}>Atendente de caixa na empresa XPTO.LTDA</h3>
                                            <h4 className={styles["experiencia-tempo"]}>Julho 2023 a Março 2024 - 10 meses</h4>
                                        </div>
                                    </div>
                                    <div className={styles["item-cluster"]}>
                                        <div className={styles["bola"]}></div>
                                        <div className={styles["hgroup-experiencia"]}>
                                            <h3 className={styles["experiencia-titulo"]}>Atendente de caixa na empresa XPTO.LTDA</h3>
                                            <h4 className={styles["experiencia-tempo"]}>Julho 2023 a Março 2024 - 10 meses</h4>
                                        </div>
                                    </div>
                                    <div className={styles["item-cluster"]}>
                                        <div className={styles["bola"]}></div>
                                        <div className={styles["hgroup-experiencia"]}>
                                            <h3 className={styles["experiencia-titulo"]}>Atendente de caixa na empresa XPTO.LTDA</h3>
                                            <h4 className={styles["experiencia-tempo"]}>Julho 2023 a Março 2024 - 10 meses</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["card"]}>
                                <h1 className={styles["topico"]}>Habilidades</h1>
                                <div className={styles["lista-itens"]}>
                                    <div className={styles["item-cluster"]}>
                                        <div className={styles["bola"]}></div>
                                        <h3 className={styles["texto-habilidade"]}>Excel</h3>
                                    </div>
                                    <div className={styles["item-cluster"]}>
                                        <div className={styles["bola"]}></div>
                                        <h3 className={styles["texto-habilidade"]}>Excel</h3>
                                    </div>
                                    <div className={styles["item-cluster"]}>
                                        <div className={styles["bola"]}></div>
                                        <h3 className={styles["texto-habilidade"]}>Excel</h3>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["card"]}>
                                <h1 className={styles["topico"]}>Habilidades</h1>
                                <div className={styles["lista-itens"]}>
                                    <div className={styles["item-cluster"]}>
                                        <div className={styles["bola"]}></div>
                                        <div className={styles["hgroup-experiencia"]}>
                                            <h3 className={styles["experiencia-titulo"]}>Atendente de caixa na empresa XPTO.LTDA</h3>
                                            <h4 className={styles["experiencia-tempo"]}>Julho 2023 a Março 2024 - 10 meses</h4>
                                        </div>
                                    </div>
                                    <div className={styles["item-cluster"]}>
                                        <div className={styles["bola"]}></div>
                                        <div className={styles["hgroup-experiencia"]}>
                                            <h3 className={styles["experiencia-titulo"]}>Atendente de caixa na empresa XPTO.LTDA</h3>
                                            <h4 className={styles["experiencia-tempo"]}>Julho 2023 a Março 2024 - 10 meses</h4>
                                        </div>
                                    </div>
                                    <div className={styles["item-cluster"]}>
                                        <div className={styles["bola"]}></div>
                                        <div className={styles["hgroup-experiencia"]}>
                                            <h3 className={styles["experiencia-titulo"]}>Atendente de caixa na empresa XPTO.LTDA</h3>
                                            <h4 className={styles["experiencia-tempo"]}>Julho 2023 a Março 2024 - 10 meses</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["card"]}>
                                <h1 className={styles["topico"]}>Quiz</h1>
                                <div className={styles["lista-itens"]}>
                                    <div className={styles["item-quiz"]}>
                                        <h2 className={styles["texto-pergunta"]}>Pergunta 1: Eu consigo manter a calma, mesmo em situações que estou sob muita pressão.</h2>
                                        <h3 className={styles["texto-resposta"]}>Resposta:</h3>
                                    </div>
                                    <div className={styles["item-quiz"]}>
                                        <h2 className={styles["texto-pergunta"]}>Pergunta 1: Eu consigo manter a calma, mesmo em situações que estou sob muita pressão.</h2>
                                        <h3 className={styles["texto-resposta"]}>Resposta:</h3>
                                    </div>
                                    <div className={styles["item-quiz"]}>
                                        <h2 className={styles["texto-pergunta"]}>Pergunta 1: Eu consigo manter a calma, mesmo em situações que estou sob muita pressão.</h2>
                                        <h3 className={styles["texto-resposta"]}>Resposta:</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}