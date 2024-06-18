import styles from "./questionario.module.css";
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../../components/NavegadorCadastro/NavegadorCadastro";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../../components/Loading/Loading";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Questionario() {
    const navigate = useNavigate();

    const [respostas, setRespostas] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Recuperar respostas da página anterior do sessionStorage
        const quizRespostasJSON = sessionStorage.getItem('quiz');
        if (quizRespostasJSON) {
          const quizRespostas = JSON.parse(quizRespostasJSON);
          // Combina respostas do sessionStorage com as respostas atuais
          setRespostas(prevRespostas => ({
            ...prevRespostas,
            ...quizRespostas.reduce((acc, { pergunta, resposta }) => ({
              ...acc,
              [pergunta]: resposta,
            }), {})
          }));
        }
      }, []);

    const handleAnswer = (pergunta, resposta) => {
        console.log(`Pergunta: ${pergunta}, Resposta: ${resposta}`);
        setRespostas((prevRespostas) => ({
            ...prevRespostas,
            [pergunta]: resposta,
        }));
    };

    var editadoJSON = sessionStorage.getItem('editado');
    var continuacaoJSON = sessionStorage.getItem('continuacao');

    var editado = JSON.parse(editadoJSON);
    var continuacao = JSON.parse(continuacaoJSON);

    var nome = editado.nome;
    var email = editado.email
    var telefone = editado.telefone
    var senha = editado.senha
    var dataNascimento = editado.dataNascimento
    var cep = continuacao.cep
    var descricao = continuacao.descricao
    var especialidades = continuacao.especialidades
    var linkedin = continuacao.linkedin
    const handleSave = async () => {
        const formattedRespostas = Object.entries(respostas).map(([pergunta, resposta]) => ({
            pergunta,
            resposta,
          }));

        const candidatoCadastrado = {
            nome,
            email,
            telefone,
            senha,
            dtNascimento: dataNascimento, 
            cep,
            descricao,
            especialidade: especialidades, 
            linkedin,
            quizz: formattedRespostas, 
        };

        setLoading(true);
        try {
            await axios.post('/candidatos', candidatoCadastrado);
            toast.success("Cadastro realizado com sucesso!");
            sessionStorage.clear();
            sessionStorage.setItem("cepCandidato", candidatoCadastrado.cep);
            navigate("/login");
        } catch (err) {
            console.error(err);
            console.log(candidatoCadastrado);
            toast.error("Cadastro não realizado!");
        }finally {
            setLoading(false); 
        }
    };

    const handleBack = () => {
        navigate("/candidatoQuestionario");
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
            {loading && <Loading />}
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
                <Navegador ativa="#025373" texto3="#F2F2F2" descricao1="Criando Perfil" descricao2="Descrição" descricao3="Quiz" bolinha1="#025373" bolinha2="#F2B705" bolinha3="#F2B705" />

                <div className={styles["container"]}>
                    <div className={styles["blocoCadastro"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>Selecione a opção que melhor reflete a sua opiniões sobre cada afirmação.</span>
                        </div>
                        <div className={styles["perguntasBloco"]}>
                            <div className={styles.pergunta}>
                                <div className={styles.tituloPergunta}>
                                    <span className={styles.negrito}>Pergunta 3</span>
                                    <span style={{ fontSize: "1.1rem" }}>Me adapto facilmente a ambientes novos e não tenho medo de sair da minha zona de conforto.</span>
                                </div>
                                <div className={styles.respostas}>
                                    {opcoes.map(opcao => (
                                        <div
                                            key={opcao.texto}
                                            className={`${styles.bolinha} ${opcao.className} ${respostas["Me adapto facilmente a ambientes novos e não tenho medo de sair da minha zona de conforto."] === opcao.texto ? styles.selected : ''}`}
                                            onClick={() => handleAnswer("Me adapto facilmente a ambientes novos e não tenho medo de sair da minha zona de conforto.", opcao.texto)}
                                        >
                                            {opcao.texto}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.pergunta}>
                                <div className={styles.tituloPergunta}>
                                    <span className={styles.negrito}>Pergunta 4</span>
                                    <span style={{ fontSize: "1.1rem" }}>Prefiro me aproximar de alguém e iniciar uma conversa do que esperar ela vir falar comigo.</span>
                                </div>
                                <div className={styles.respostas}>
                                    {opcoes.map(opcao => (
                                        <div
                                            key={opcao.texto}
                                            className={`${styles.bolinha} ${opcao.className} ${respostas["Prefiro me aproximar de alguém e iniciar uma conversa do que esperar ela vir falar comigo."] === opcao.texto ? styles.selected : ''}`}
                                            onClick={() => handleAnswer("Prefiro me aproximar de alguém e iniciar uma conversa do que esperar ela vir falar comigo.", opcao.texto)}
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