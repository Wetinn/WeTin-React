import styles from './EditarVaga.module.css'
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import api from '../../../api'

export default function PublicarVaga() {

    const navigate = useNavigate();

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [cep, setCep] = useState("");
    const [pretensaoSalarial, setPretensaoSalarial] = useState("");
    const [especialidade, setEspecialidade] = useState("");
    const [requisitos, setRequisitos] = useState("");
    const [beneficios, setBeneficios] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [cargaHoraria, setCargaHoraria] = useState("");
    const [dtCriacao, setDtCriacao] = useState("");
    const [dtExpiracao, setExpiracao] = useState("");

    const handleSave = () => {
        const vagaCadastrada = {
            titulo,
            descricao,
            cep,
            pretensaoSalarial,
            especialidade,
            requisitos,
            beneficios,
            periodo,
            cargaHoraria,
            dtCriacao,
            dtExpiracao
        };

        api.put(`/vagas/1`, {
            titulo,
            descricao,
            cep,
            pretensaoSalarial,
            especialidade,
            requisitos,
            beneficios,
            periodo,
            cargaHoraria,
            dtCriacao,
            dtExpiracao
        }).then(() => {
            // toast.success("Novo Card criado com sucesso!");
            alert("Vaga Cadastrada")
            sessionStorage.setItem("vaga",
                JSON.stringify(vagaCadastrada));
            navigate("/login")
        }).catch(() => {
            console.log(vagaCadastrada)
            // toast.error("Ocorreu um erro ao salvar os dados, por favor, tente novamente.");
            alert("deu ruim")
        })
    };

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    }



    return (

        <>
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed />
                <div className="deixaEuVer" style={{ width: "90vw", height: "90vh", display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <div className={styles["titulo"]}>
                        <span>Editar Vaga </span>
                    </div>
                    <div className={styles["caixaFormulario"]}>
                        <form  className={styles['formEditarVaga']}>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Titulo da Vaga: </label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o nome da empresa" value={titulo} onChange={(e) => handleInputChange(e, setTitulo)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Descrição: </label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]} style={{ width: "85%", height: "30vh" }} placeholder="Descreva sobre sua vaga" value={descricao} onChange={(e) => handleInputChange(e, setDescricao)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">CEP: </label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o CEP da vaga" value={cep} onChange={(e) => handleInputChange(e, setCep)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Pretenção Salarial: </label>
                                    <span>*</span>
                                </div>
                                <input type="number" className={styles["input"]} style={{ width: "85%" }} placeholder="Informe o salario desejado" value={pretensaoSalarial} onChange={(e) => handleInputChange(e, setPretensaoSalarial)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Especialidades Desejadas: </label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]} style={{ width: "85%", height: "20vh" }} placeholder="Digite aqui as especialidades" value={especialidade} onChange={(e) => handleInputChange(e, setEspecialidade)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Requisitos: </label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]} style={{ width: "85%", height: "20vh" }} placeholder="Digite aqui os requisitos da vaga" value={requisitos} onChange={(e) => handleInputChange(e, setRequisitos)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Beneficios: </label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]} style={{ width: "85%", height: "20vh" }} placeholder="Digite aqui os beneficios da vag" value={beneficios} onChange={(e) => handleInputChange(e, setBeneficios)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Periodo: </label>
                                    <span>*</span>
                                </div>
                                <input type="" className={styles["input"]} style={{ width: "85%" }} placeholder="Escolha o periodo de trabalho" list="faixa" value={periodo} onChange={(e) => handleInputChange(e, setPeriodo)} />
                                <datalist id="faixa">
                                    <option value="">horarios:</option>
                                    <option value="Manhã">Periodo Manhã (7h - 13h)</option>
                                    <option value="Tarde">Periodo Tarde (12h - 18h)</option>
                                    <option value="Noite">Periodo Noite (18h - 23h)</option>
                                </datalist>
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Carga Horaria: </label>
                                    <span>*</span>
                                </div>
                                <input type="" className={styles["input"]} style={{ width: "85%" }} placeholder="Escolha o periodo de trabalho" list="CargaHoraria" value={cargaHoraria} onChange={(e) => handleInputChange(e, setCargaHoraria)} />
                                <datalist id="CargaHoraria">
                                    <option value="">carga horaria:</option>
                                    <option value="Quatro Horas">Quatro Horas - 4h</option>
                                    <option value="Seis Horas">Seis Horas - 4h</option>
                                    <option value="Oito Horas">Oito Horas - 4h</option>
                                    <option value="Dez Horas">Dez Horas - 4h</option>
                                    <option value="Doze Horas">Doze Horas - 4h</option>
                                </datalist>
                            </div>
                            <div className="caixaData" style={{ display: "flex", width: "60%", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Data de Criação da Vaga: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="date" className={styles["input"]} style={{ width: "50%" }} value={dtCriacao} onChange={(e) => handleInputChange(e, setDtCriacao)} />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Data de Expiração da Vaga: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="date" className={styles["input"]} style={{ width: "50%" }} value={dtExpiracao} onChange={(e) => handleInputChange(e, setExpiracao)} />
                                </div>
                            </div>
                            <div style={{marginTop:"15px",width:"90%",display:"flex",flexDirection:"row-reverse"}}>
                                <button onClick={handleSave} className={styles["button"]}>
                                    Salvar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
}