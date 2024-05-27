// import api from "../../api";
//import { toast } from "react-toastify";
import styles from "./CadastroImg.module.css";
import Header from "../../../components/Header/Header";
import Logo from "../../../utils/assets/imgLogoPreta.svg";
import Navegador from "../../../components/NavegadorCadastro/NavegadorCadastro";
//import { useNavigate } from "react-router-dom";
// import React, { useState } from "react"; 
import BotaoCadastro from "../../../components/botaoCadastro/BotaoCadastro";
import IconImgAnexo from "../../../utils/assets/iconImagemAnexa.svg"



export default function CadastroRecrutador() {
    //const navigate = useNavigate();
    return (
        <>
            <div className={styles["fundoPag"]}>
                <Header textoBotao1={"Ir para Página Inicial"} Logo={Logo} pagDesejada="/" />
                <Navegador ativa="#025373" textoAtivo="#F2F2F2" descricao1="Criando Perfil" descricao2="Endereço" descricao3="Pagamento" bolinha1="/recrutador" bolinha2="/recrutadorEndereco" bolinha3="/recutadorPagamento" />

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
                                            <div className={styles["texto"]}>
                                                <span>
                                                    Arraste a imagem que você quer anexar ou clique aqui para escolher um arquivo do seu computador
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    </div>
                                    <div className={styles["InputDesc"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">Descrição: </label>
                                            <span>*</span>
                                        </div>
                                        <input type="text" className={styles["inputDescricao"]} placeholder="Digite uma descrição sobre a empresa" />
                                    </div>
                                </div>

                                <div className={styles["informacoesContatoEmpresa"]}>
                                    <div className={styles["InputDiv"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">Senha: </label>
                                            <span>*</span>
                                        </div>
                                        <input type="password" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui a senha desejada"  />
                                    </div>
                                    <div className={styles["InputDiv"]}>
                                        <div className={styles["labelDiv"]}>
                                            <label htmlFor="">Confirmar Senha: </label>
                                            <span>*</span>
                                        </div>
                                        <input type="password" className={styles["input"]} style={{ width: "85%" }} placeholder="Confirme a senha"  />
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <div className={styles["botoes"]}>
                            <button className={styles["btVoltar"]} onClick={handleBack}>Voltar</button>
                            <button className={styles["btProximo"]} onClick={handleSave}>Próximo</button>
                        </div> */}
                        <BotaoCadastro textoBt2="Próximo" pagDesejada1="/recrutador" pagDesejada2="/recrutadorPagamento" />
                    </div>
                </div>
            </div>
        </>
    );
}