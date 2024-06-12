import styles from './pagamento.module.css';
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../../components/NavegadorCadastro/NavegadorCadastro"
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Pagamento() {
    const navigate = useNavigate();

    var editadoJSON = sessionStorage.getItem('editado');
    var continuacaoJSON = sessionStorage.getItem('continuacao');

    var editado = JSON.parse(editadoJSON);
    var continuacao = JSON.parse(continuacaoJSON);

    var nome = editado.nome;
    var email = editado.email
    var telefone = editado.telefone
    var cep = continuacao.cep
    var senha = editado.senha
    var imagem = "testeImagem"
    var cnpj = editado.cnpj
    var descricao = continuacao.descricao
    var linkedin = continuacao.linkedin
    const handleSave = async () => {
    const recrutadorCadastrado = {
        nome,
        email,
        telefone,
        cep,
        senha,
        imagem,
        cnpj,
        descricao,
        linkedin
    };

    try {
        await axios.post('/empresas', recrutadorCadastrado);
        alert("Cadastrado");
        sessionStorage.clear();
        sessionStorage.setItem("cepEmpresa", recrutadorCadastrado.cep);
        navigate("/login");
    } catch (err) {
        console.error(err);
        console.log(recrutadorCadastrado);
        alert("deu ruim");
    }
};


    const handleBack = () => {
        navigate("/recrutadorDescricao");
    };

    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
                <Navegador ativa="#025373" textoAtivo="#F2F2F2" descricao1="Criando Perfil" descricao2="Descrição" descricao3="Pagamento" bolinha1="#F2B705" bolinha2="#F2B705" bolinha3="#025373" />

                <div className={styles["container"]}>
                    <div className={styles["blocoCadastro"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>Cadastro de pagamento</span>
                            <span className={styles["infos"]}>Para finalizar seu cadastro precisamos que você coloque as informações do seu melhor cartão de crédito onde será cobrada a mensalidade da nossa plataforma <b>(R$50,00)</b></span>
                        </div>
                        <div className={styles["inputsBloco"]}>
                            <form>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Número do cartão: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="text" className={styles["input"]} style={{ width: "75%" }} placeholder="Digite o número do cartão" />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Nome no cartão: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="text" className={styles["input"]} style={{ width: "75%" }} placeholder="Digite o nome no cartão" />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">CVV: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="text" className={styles["input"]} style={{ width: "75%" }} placeholder="Digite o código de segurança do cartão (CVV)" />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Data de validade: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="text" className={styles["input"]} style={{ width: "75%" }} placeholder="Digite a data de validade do cartão" />
                                </div>
                            </form>
                        </div>
                        <div className={styles["botoes"]}>
                            <button className={styles["btVoltar"]} onClick={handleBack}>Voltar</button>
                            <button className={styles["btProximo"]} onClick={handleSave}>Próximo</button>
                        </div>

                        {/* <BotaoCadastro textoBt2="Concluir" pagDesejada1="/recrutadorDescricao" pagDesejada2="/login" /> */}

                    </div>
                </div>

            </div>
        </>
    );
}