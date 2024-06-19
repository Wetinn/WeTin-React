import styles from "./questionario.module.css";
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../../components/NavegadorCadastro/NavegadorCadastro";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Questionario() {
    const navigate = useNavigate();

    const [respostas, setRespostas] = useState({});

    const handleAnswer = (pergunta, resposta) => {
        console.log(`Pergunta: ${pergunta}, Resposta: ${resposta}`);
        setRespostas((prevRespostas) => ({
            ...prevRespostas,
            [pergunta]: resposta,
        }));
    };

    const handleSave = async () => {
        const formattedRespostas = Object.entries(respostas).map(([pergunta, resposta]) => ({
            pergunta,
            resposta,
        }));

        sessionStorage.setItem("quiz", JSON.stringify(formattedRespostas));
        navigate("/candidatoQuestionario2");
    };

    const handleBack = () => {
        navigate("/descricaoCandidato");
    };

    const opcoes = [
        { texto: 'Discordo totalmente', className: styles.discordoT },
        { texto: 'Discordo parcialmente', className: styles.discordoP },
        { texto: 'Não concordo, nem discordo', className: styles.nemCnemD },
        { texto: 'Concordo parcialmente', className: styles.concordoP },
        { texto: 'Concordo totalmente', className: styles.concordoT },
    ];

    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
                <Navegador texto3="#F2F2F2" descricao1="Criando Perfil" descricao2="Descrição" descricao3="Quiz" bolinha1="#F2B705" bolinha2="#F2B705" bolinha3="#025373" />

                <div className={styles["container"]}>
                    <div className={styles["blocoCadastro"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>Selecione a opção que melhor reflete a sua opiniões sobre cada afirmação.</span>
                        </div>
                        <div className={styles["perguntasBloco"]}>
                            <div className={styles.pergunta}>
                                <div className={styles.tituloPergunta}>
                                    <span className={styles.negrito}>Pergunta 1</span>
                                    <span style={{fontSize:"1.1rem"}}>Eu consigo manter a calma, mesmo em situações que estou sob muita pressão.</span>
                                </div>
                                <div className={styles.respostas}>
                                    {opcoes.map(opcao => (
                                        <div
                                            key={opcao.texto}
                                            className={`${styles.bolinha} ${opcao.className} ${respostas["Eu consigo manter a calma, mesmo em situações que estou sob muita pressão."] === opcao.texto ? styles.selected : ''}`}
                                            onClick={() => handleAnswer("Eu consigo manter a calma, mesmo em situações que estou sob muita pressão.", opcao.texto)}
                                        >
                                            {opcao.texto}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.pergunta}>
                                <div className={styles.tituloPergunta}>
                                    <span className={styles.negrito}>Pergunta 2</span>
                                    <span style={{fontSize:"1.1rem"}}>Busco constantemente aprender e me desenvolver nas mais diversas áreas de estudo.</span>
                                </div>
                                <div className={styles.respostas}>
                                    {opcoes.map(opcao => (
                                        <div
                                            key={opcao.texto}
                                            className={`${styles.bolinha} ${opcao.className} ${respostas["Busco constantemente aprender e me desenvolver nas mais diversas áreas de estudo."] === opcao.texto ? styles.selected : ''}`}
                                            onClick={() => handleAnswer("Busco constantemente aprender e me desenvolver nas mais diversas áreas de estudo.", opcao.texto)}
                                        >
                                            {opcao.texto}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={styles["botoes"]}>
                            <button className={styles["btVoltar"]} onClick={handleBack}>Voltar</button>
                            <button className={styles["btProximo"]} onClick={handleSave}>Próximo</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}