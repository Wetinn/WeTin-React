import api from "../../api";
import { toast } from "react-toastify";
import styles from "./CadastroRecrutador.module.css";
import Header from "../../components/Header/Header";
import Logo from "../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../components/NavegadorCadastro/NavegadorCadastro"
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import BotaoCadastro from "../../components/botaoCadastro/BotaoCadastro";



export default function CadastroRecrutador() {
    // const navigate = useNavigate();

    // const [nome, setNome] = useState("");
    // const [cnpj, setCnpj] = useState("");
    // const [email, setEmail] = useState("");
    // const [telefone, setTelefone] = useState("");

    // const handleSave = () => {
    //     const cadastroRecrutador = {
    //         nome,
    //         cnpj,
    //         email,
    //         telefone
    //     };


    //     api.post(`/recrutador`, cadastroRecrutador).then(() => {
    //         toast.success("Cadastrado com sucesso!");
    //         sessionStorage.setItem("editado", JSON.stringify(cadastroRecrutador));
    //         navigate("/recrutadorEndereco");
    //     }).catch(() => {
    //         toast.error("Ocorreu um erro ao salvar os dados, por favor, tente novamente.");
    //     })
    // };

    // const handleInputChange = (event, setStateFunction) => {
    //     setStateFunction(event.target.value);
    // }

    // const handleBack = () => {
    //     navigate("/cadastro");
    // };

    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
                <Navegador ativa="#025373" textoAtivo="#F2F2F2" descricao1="Criando Perfil" descricao2="Endereço" descricao3="Pagamento" bolinha1="/recrutador" bolinha2="/recrutadorEndereco" bolinha3="/recutadorPagamento" />

                <div className={styles["container"]}>
                    <div className={styles["blocoCadastro"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>Preencha os campos abaixo para efetuar o seu cadastro</span>
                        </div>
                        <div className={styles["inputsBloco"]}>
                            <form>
                                <div className={styles["infosEmpresa"]}>
                                    <div className={styles["InputDiv"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">Nome da empresa: </label>
                                            <span>*</span>
                                        </div>
                                        <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o nome da empresa"  />
                                    </div>
                                    <div className={styles["InputDiv"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">CNPJ: </label>
                                            <span>*</span>
                                        </div>
                                        <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o CNPJ da empresa"  />
                                    </div>
                                </div>

                                <div className={styles["informacoesContatoEmpresa"]}>
                                    <div className={styles["InputDiv"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">E-mail: </label>
                                            <span>*</span>
                                        </div>
                                        <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o e-mail da empresa"  />
                                    </div>
                                    <div className={styles["InputDiv"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">Telefone: </label>
                                            <span>*</span>
                                        </div>
                                        <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o telefone da empresa"  />
                                    </div>
                                </div>

                                <div className={styles["informacoes"]}>
                                    <div className={styles["InputDiv"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">Linkedin: </label>
                                            <span>*</span>
                                        </div>
                                        <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o linkedin da empresa"  />
                                    </div>
                                    <div className={styles["InputDiv"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">CEP: </label>
                                            <span>*</span>
                                        </div>
                                        <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o CEP da empresa"  />
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <div className={styles["botoes"]}>
                            <button className={styles["btVoltar"]} onClick={handleBack}>Voltar</button>
                            <button className={styles["btProximo"]} onClick={handleSave}>Próximo</button>
                        </div> */}

                        <BotaoCadastro textoBt2="Próximo" pagDesejada1="/cadastro" pagDesejada2="/recrutadorDescricao" />

                    </div>
                </div>
            </div>
        </>
    );
}