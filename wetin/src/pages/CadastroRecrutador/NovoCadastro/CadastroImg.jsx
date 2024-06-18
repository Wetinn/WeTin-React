// import api from "../../api";
//import { toast } from "react-toastify";
import styles from "./CadastroImg.module.css";
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../../components/NavegadorCadastro/NavegadorCadastro";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import IconImgAnexo from "../../../utils/assets/iconImagemAnexa.svg"
import DragAndDrop from "../../../components/BoxImagemCadastro/DragAndDrop";
import InputMask from 'react-input-mask';


export default function CadastroRecrutador() {

    const navigate = useNavigate();

    const [descricao, setDescricao] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [cep, setCep] = useState("");
    const [errorMessages, setErrorMessages] = useState({
        descricao: "",
        linkedin: "",
        cep: ""
    });

    const validarInputs = () => {
        var naoTemErro = true;
        var errors = {
            descricao: "",
            linkedin: "",
            cep: ""
        };

        if (!descricao) {
            errors.nome = "Descrição é obrigatório";
            naoTemErro = false;
        }
        if (!linkedin) {
            errors.cnpj = "O link do Linkedin é obrigatório";
            naoTemErro = false;
        }
        if (!cep) {
            errors.email = "CEP é obrigatório";
            naoTemErro = false;
        }
        setErrorMessages(errors);
        return naoTemErro;
    }



    const handleSave = () => {
        if (validarInputs()) {
            const continuacao = {
                linkedin,
                cep,
                descricao
            }

            sessionStorage.setItem("continuacao", JSON.stringify(continuacao));

            navigate("/recrutadorPagamento");
        }
    };

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    }

    const handleBack = () => {
        navigate("/recrutador");
    };


    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
                <Navegador ativa="#025373" textoAtivo="#F2F2F2" descricao1="Criando Perfil" descricao2="Descrição" descricao3="Pagamento" bolinha1="#F2B705" bolinha2="#025373" bolinha3="#F2B705" />

                <div className={styles["container"]}>
                    <div className={styles["blocoCadastro"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>Preencha os campos adicionais para concluir o cadastro</span>
                        </div>
                        <div className={styles["inputsBloco"]}>
                            <form>
                                <div className={styles["infosEmpresa"]}>
                                    <div className={styles["alinhamento"]}>
                                        <span className={styles["tiltAn"]}>
                                            Anexe uma imagem:
                                        </span>
                                        <div className={styles["caixaImagem"]}>

                                            <div className={styles["iconeImg"]}>
                                                <img src={IconImgAnexo} alt="" />
                                            </div>

                                            <div className={styles["arrastarArquivo"]}>
                                                <DragAndDrop />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["InputDesc"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">Descrição: </label>
                                            {errorMessages.descricao && <span className={styles["error"]}>* {errorMessages.descricao}</span>}
                                        </div>
                                        <textarea type="text" className={styles["inputDescricao"]} placeholder="Digite uma descrição sobre a empresa" value={descricao} onChange={(e) => handleInputChange(e, setDescricao)} />
                                    </div>
                                </div>

                                <div className={styles["informacoesContatoEmpresa"]}>
                                    <div className={styles["InputDiv"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">CEP: </label>
                                            {errorMessages.cep && <span className={styles["error"]}>* {errorMessages.cep}</span>}
                                        </div>
                                        <InputMask mask="99999-999" type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o CEP da empresa" value={cep} onChange={(e) => handleInputChange(e, setCep)} />
                                    </div>
                                    <div className={styles["InputDiv"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">Linkedin: </label>
                                            {errorMessages.linkedin && <span className={styles["error"]}>* {errorMessages.linkedin}</span>}
                                        </div>
                                        <input type="text" className={styles["input"]} style={{ width: "100%" }} placeholder="Cole aqui o link do linkedin da empresa" value={linkedin} onChange={(e) => handleInputChange(e, setLinkedin)} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className={styles["botoes"]}>
                            <button className={styles["btVoltar"]} onClick={handleBack}>Voltar</button>
                            <button className={styles["btProximo"]} onClick={handleSave}>Próximo</button>
                        </div>
                        {/* <BotaoCadastro textoBt2="Próximo" pagDesejada1="/recrutador" pagDesejada2="/recrutadorPagamento" /> */}
                    </div>
                </div>
            </div>
        </>
    );
}