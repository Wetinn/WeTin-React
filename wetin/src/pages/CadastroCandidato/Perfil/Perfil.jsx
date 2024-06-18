import styles from "./Perfil.module.css";
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../../components/NavegadorCadastro/NavegadorCadastro"
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import InputMask from 'react-input-mask';

export default function Perfil() {
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [errorMessages, setErrorMessages] = useState({
        nome: "",
        email: "",
        telefone: "",
        dataNascimento: "",
        senha: "",
        confirmarSenha: ""
    });

    const validarInputs = () => {
        var naoTemErro = true;
        var errors = {
            nome: "",
            email: "",
            telefone: "",
            dataNascimento: "",
            senha: "",
            confirmarSenha: ""
        };

        if (!nome) {
            errors.nome = "Nome é obrigatório";
            naoTemErro = false;
        }

        if (!email) {
            errors.email = "Email é obrigatório";
            naoTemErro = false;
        }
        if (!telefone) {
            errors.telefone = "Telefone é obrigatório";
            naoTemErro = false;
        }
        if (!dataNascimento) {
            errors.dataNascimento = "Data de Nascimento é obrigatório";
            naoTemErro = false;
        }
        if (senha < 6) {
            errors.senha = "Senha deve ter mais de 6 caracteres";
            naoTemErro = false;
        }
        if (!senha) {
            errors.senha = "Senha é obrigatória";
            naoTemErro = false;
        }
        if (senha !== confirmarSenha) {
            errors.confirmarSenha = "As senhas não coincidem";
            naoTemErro = false;
        }

        setErrorMessages(errors);
        return naoTemErro;
    }


    const handleSave = () => {
        if (validarInputs()) {
            const cadastroCandidato = {
                nome,
                email,
                telefone,
                dataNascimento,
                senha
            };

            sessionStorage.setItem("editado", JSON.stringify(cadastroCandidato));
            navigate("/descricaoCandidato");
        }
    };

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    }

    const handleBack = () => {
        navigate("/cadastro");
    };


    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
                <Navegador ativa="#025373" texto1="#F2F2F2" descricao1="Criando Perfil" descricao2="Descrição" descricao3="Quiz" bolinha1="#025373" bolinha2="#F2B705" bolinha3="#F2B705" />

                <div className={styles["container"]}>
                    <div className={styles["blocoCadastro"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>Agora, precisamos de algumas informações suas para colocar no seu perfil</span>
                        </div>
                        <div className={styles["inputsBloco"]}>
                            <form className={styles["formCandidato"]}>
                                <div className={styles["alinhamentoInputs"]}>
                                    <div className={styles["InputDiv"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">Nome: </label>
                                            {errorMessages.nome && <span className={styles["error"]}>* {errorMessages.nome}</span>}
                                        </div>
                                        <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui seu nome" value={nome} onChange={(e) => handleInputChange(e, setNome)} />
                                    </div>
                                    <div className={styles["InputDiv"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">E-mail: </label>
                                            {errorMessages.email && <span className={styles["error"]}>* {errorMessages.email}</span>}
                                        </div>
                                        <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui seu emai" value={email} onChange={(e) => handleInputChange(e, setEmail)} />
                                    </div>
                                </div>
                                <div className={styles["alinhamentoInputs"]}>
                                    <div className={styles["InputDiv"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">Telefone: </label>
                                            {errorMessages.telefone && <span className={styles["error"]}>* {errorMessages.telefone}</span>}
                                        </div>
                                        <InputMask mask="(99) 99999-9999" type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui seu telefone" value={telefone} onChange={(e) => handleInputChange(e, setTelefone)} />
                                    </div>
                                    <div className={styles["InputDiv"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">Data de Nascimento: </label>
                                            {errorMessages.dataNascimento && <span className={styles["error"]}>* {errorMessages.dataNascimento}</span>}
                                        </div>
                                        <input type="date" className={styles["input"]} style={{ width: "50%" }} value={dataNascimento} onChange={(e) => handleInputChange(e, setDataNascimento)} />
                                    </div>
                                </div>
                                <div className={styles["alinhamentoInputs"]}>
                                    <div className={styles["InputDiv"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">Senha: </label>
                                            {errorMessages.senha && <span className={styles["error"]}>* {errorMessages.senha}</span>}
                                        </div>
                                        <input type="password" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui a senha" value={senha} onChange={(e) => handleInputChange(e, setSenha)} />
                                    </div>
                                    <div className={styles["InputDiv"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">Confirmar Senha: </label>
                                            {errorMessages.confirmarSenha && <span className={styles["error"]}>* {errorMessages.confirmarSenha}</span>}
                                        </div>
                                        <input type="password" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite sua senha novamente" value={confirmarSenha} onChange={(e) => handleInputChange(e, setConfirmarSenha)} />
                                    </div>
                                </div>
                            </form>
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