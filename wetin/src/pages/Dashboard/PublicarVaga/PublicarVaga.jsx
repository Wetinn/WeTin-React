import styles from './PublicarVaga.module.css'
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react"; 
import axios from "axios";

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
    const empresaLogadaJSON = sessionStorage.getItem('user');
    var user = JSON.parse(empresaLogadaJSON);

    const handleSave = async () => {
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
    
        try {
            await axios.post(`/vagas/${user.id}`, vagaCadastrada);
            alert("Vaga Cadastrada");
            navigate("/dashboard");
        } catch (err) {
            console.error(err);
            console.log(vagaCadastrada);
            alert("deu ruim", err);
        }
    };

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    }



    return (

        <>
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed />
                <div className="deixaEuVer" style={{ width: "90vw", height: "97vh", display: "flex", alignItems: "center", flexDirection: "column", borderRadius:"20px",backgroundColor:"#F2F2F2" }}>
                    <div className={styles["titulo"]}>
                        <span>Publicar Vaga </span>
                        <button onClick={handleSave}>
                            Salvar Vaga
                        </button>
                    </div>
                    <div className={styles["caixaFormulario"]}>
                        <form className={styles['formVaga']}>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Titulo da Vaga: </label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o nome da empresa" value={titulo} onChange={(e) => handleInputChange(e, setTitulo)}/>
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Descrição: </label>
                                    <span>*</span>
                                </div>
                                <textarea type="text" className={styles["input"]} style={{ width: "85%", height: "30vh",border:"none",fontSize:"1rem",paddingTop:"3%" }} placeholder="Descreva sobre sua vaga" value={descricao} onChange={(e) => handleInputChange(e, setDescricao)}/>
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">CEP: </label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o CEP da vaga" value={cep} onChange={(e) => handleInputChange(e, setCep)}/>
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Pretenção Salarial: </label>
                                    <span>*</span>
                                </div>
                                <input type="number" className={styles["input"]} style={{ width: "85%" }} placeholder="Informe o salario desejado" value={pretensaoSalarial} onChange={(e) => handleInputChange(e, setPretensaoSalarial)}/>
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Especialidades Desejadas: </label>
                                    <span>*</span>
                                </div>
                                <textarea type="text" className={styles["input"]} style={{ width: "85%", height: "30vh",border:"none",fontSize:"1rem",paddingTop:"3%" }} placeholder="Digite aqui as especialidades" value={especialidade} onChange={(e) => handleInputChange(e, setEspecialidade)}/>
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Requisitos: </label>
                                    <span>*</span>
                                </div>
                                <textarea type="text" className={styles["input"]} style={{ width: "85%", height: "30vh",border:"none",fontSize:"1rem",paddingTop:"3%" }} placeholder="Digite aqui os requisitos da vaga" value={requisitos} onChange={(e) => handleInputChange(e, setRequisitos)}/>
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Beneficios: </label>
                                    <span>*</span>
                                </div>
                                <textarea type="text" className={styles["input"]} style={{ width: "85%", height: "30vh",border:"none",fontSize:"1rem",paddingTop:"3%" }} placeholder="Digite aqui os beneficios da vaga" value={beneficios} onChange={(e) => handleInputChange(e, setBeneficios)}/>
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Periodo: </label>
                                    <span>*</span>
                                </div>
                                <input type="" className={styles["input"]} style={{ width: "85%" }} placeholder="Escolha o periodo de trabalho" list="faixa" value={periodo} onChange={(e) => handleInputChange(e, setPeriodo)}/>
                                <datalist id="faixa">
                                    <option value="">horarios:</option>
                                    <option value="MANHA">Periodo Manhã (7h - 13h)</option>
                                    <option value="TARDE">Periodo Tarde (12h - 18h)</option>
                                    <option value="Noite">Periodo Noite (18h - 23h)</option>
                                </datalist>
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Carga Horaria: </label>
                                    <span>*</span>
                                </div>
                                <input type="" className={styles["input"]} style={{ width: "85%" }} placeholder="Escolha o periodo de trabalho" list="CargaHoraria" value={cargaHoraria} onChange={(e) => handleInputChange(e, setCargaHoraria)}/>
                                <datalist id="CargaHoraria">
                                    <option value="">carga horaria:</option>
                                    <option value="QUATRO_HORAS">Quatro Horas - 4h</option>
                                    <option value="Seis Horas">Seis Horas - 4h</option>
                                    <option value="Oito Horas">Oito Horas - 4h</option>
                                    <option value="Dez Horas">Dez Horas - 4h</option>
                                    <option value="Doze Horas">Doze Horas - 4h</option>
                                </datalist>
                            </div>
                            <div className="caixaData" style={{display:"flex", width:"60%", justifyContent:"space-between", alignItems:"center", marginTop:"20px"}}>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Data de Criação da Vaga: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="date" className={styles["input"]} style={{ width: "50%" }} value={dtCriacao} onChange={(e) => handleInputChange(e, setDtCriacao)}/>
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Data de Expiração da Vaga: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="date" className={styles["input"]} style={{ width: "50%" }} value={dtExpiracao} onChange={(e) => handleInputChange(e, setExpiracao)}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
}