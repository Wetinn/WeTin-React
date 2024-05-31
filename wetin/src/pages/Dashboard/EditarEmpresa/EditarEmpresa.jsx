import styles from "./EditarEmpresa.module.css";
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import api from '../../../api'
import iconDeletar from "../../../utils/assets/icons/DeleteIconBlue.svg"
import iconEditar from "../../../utils/assets/icons/EditIcon.png"
import fotoEmpresa from "../../../utils/assets/ftEmpresa.png"

export default function EditarEmpresa() {
    return (
        <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
            <SidebarCollapsed />
            <div className="deixaEuVer" style={{ width: "90vw", height: "97vh", display: "flex", alignItems: "center", flexDirection: "column", borderRadius:"20px",backgroundColor:"#F2F2F2" }}>
                <div className={styles["titulo"]}>
                    <span>Editar perfil da Empresa</span>
                </div>

                <div className={styles["caixaEditarEmpresa"]}>
                    <div className={styles["editarImagem"]}>
                        <div className={styles["fotoEmpresa"]}>
                            <img src={fotoEmpresa} alt="" className={styles["foto"]} />

                            
                        </div>
                        <img src={iconEditar} alt="" className={styles["iconEditar"]} />

                            <img src={iconDeletar} alt="" className={styles["iconDeletar"]} />
                    </div>
                    <div className={styles["caixaForms"]}>
                        <form className={styles['formEditarVaga']}>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Nome da Empresa: </label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o nome da empresa" />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">E-Mail: </label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o e-mail da empresa" />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Telefone: </label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o telefone da empresa" />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">CEP: </label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o CEP da empresa" />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Descrição: </label>
                                    <span>*</span>
                                </div>
                                <textarea type="text" className={styles["textArea"]} style={{ width: "85%", height: "30vh" }} placeholder="Descreva sobre sua empresa" />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Linkedin: </label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Cole aqui o link do linkedin" />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">CNPJ: </label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o CNPJ da empresa" />
                            </div>
                        </form>
                        <div className={styles["botaoSalvar"]}>
                            <button>Salvar Alterações</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}