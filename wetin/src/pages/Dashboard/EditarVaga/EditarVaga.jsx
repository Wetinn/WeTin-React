import styles from './EditarVaga.module.css'
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Overlay from "../../../components/Overlay/Overlay";
import Loading from "../../../components/Loading/Loading";

export default function PublicarVaga() {

    const navigate = useNavigate();

    const [vaga, setVaga] = useState(null);
    const [ExpandirSideBar, setExpandirSideBar] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    //To buscando a vaga pra prencher as inputs
    useEffect(() => {
        const buscarVaga = async () => {
            try {

                const response = await axios.get(`/vagas/${"666cb6c26fc26a2110446fb4"}/empresa`);
                var vagaData = response.data;

                console.log('Aqui ta a vaga', vagaData);

                setVaga(vagaData);
                setLoading(false);
            } catch (err) {
                alert("n achei pae")
                setError(err);
                setLoading(false);
                console.log(err);
            }
        };

        buscarVaga();
    }, []);

    if (!vaga) {
        return <>
            {loading && <Loading />}
        </>;
    }

    const atualizarVaga = async () => {
        const vagaAtualizada = {
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
            await axios.put(`/vagas/${"666cb6c26fc26a2110446fb4"}`, vagaAtualizada);
            alert("Vaga Atualizada");
        } catch (err) {
            console.error(err);
            console.log(vagaAtualizada);
            alert("deu ruim", err);
        }
    };

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    }

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }

    return (

        <>
        {ExpandirSideBar && <Overlay />}
        {ExpandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed funcaoExpandir={toggleExpandirSideBar}/>
                <div className={styles["deixaEuVer"]} style={{ width: "90vw", height: "97vh", display: "flex", alignItems: "center", flexDirection: "column", borderRadius:"20px",backgroundColor:"#F2F2F2" }}>
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
                                <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o nome da empresa" defaultValue={vaga.titulo} onChange={(e) => handleInputChange(e, setTitulo)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Descrição: </label>
                                    <span>*</span>
                                </div>
                                <textarea type="text" className={styles["input"]} style={{ width: "85%", height: "30vh",border:"none",fontSize:"1rem",paddingTop:"3%" }} placeholder="Descreva sobre sua vaga" defaultValue={vaga.descricao} onChange={(e) => handleInputChange(e, setDescricao)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">CEP: </label>
                                    <span>*</span>
                                </div>
                                <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o CEP da vaga" defaultValue={vaga.cep} onChange={(e) => handleInputChange(e, setCep)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Pretenção Salarial: </label>
                                    <span>*</span>
                                </div>
                                <input type="number" className={styles["input"]} style={{ width: "85%" }} placeholder="Informe o salario desejado" defaultValue={vaga.pretensaoSalarial} onChange={(e) => handleInputChange(e, setPretensaoSalarial)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Especialidades Desejadas: </label>
                                    <span>*</span>
                                </div>
                                <textarea type="text" className={styles["input"]} style={{ width: "85%", height: "30vh",border:"none",fontSize:"1rem",paddingTop:"3%" }} placeholder="Digite aqui as especialidades" defaultValue={vaga.especialidade} onChange={(e) => handleInputChange(e, setEspecialidade)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Requisitos: </label>
                                    <span>*</span>
                                </div>
                                <textarea type="text" className={styles["input"]} style={{ width: "85%", height: "30vh",border:"none",fontSize:"1rem",paddingTop:"3%" }} placeholder="Digite aqui os requisitos da vaga" defaultValue={vaga.requisitos} onChange={(e) => handleInputChange(e, setRequisitos)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Beneficios: </label>
                                    <span>*</span>
                                </div>
                                <textarea type="text" className={styles["input"]} style={{ width: "85%", height: "30vh",border:"none",fontSize:"1rem",paddingTop:"3%" }} placeholder="Digite aqui os beneficios da vaga" defaultValue={vaga.beneficios} onChange={(e) => handleInputChange(e, setBeneficios)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Periodo: </label>
                                    <span>*</span>
                                </div>
                                <input type="" className={styles["input"]} style={{ width: "85%" }} placeholder="Escolha o periodo de trabalho" list="faixa" defaultValue={vaga.periodo} onChange={(e) => handleInputChange(e, setPeriodo)} />
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
                                <input type="" className={styles["input"]} style={{ width: "85%" }} placeholder="Escolha o periodo de trabalho" list="CargaHoraria" defaultValue={vaga.cargaHoraria} onChange={(e) => handleInputChange(e, setCargaHoraria)} />
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
                                    <input type="date" className={styles["input"]} style={{ width: "50%" }} defaultValue={vaga.dtCriacao} onChange={(e) => handleInputChange(e, setDtCriacao)} />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Data de Expiração da Vaga: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="date" className={styles["input"]} style={{ width: "50%" }} defaultValue={vaga.dtExpiracao} onChange={(e) => handleInputChange(e, setExpiracao)} />
                                </div>
                            </div>
                            <div style={{marginTop:"15px",width:"90%",display:"flex",flexDirection:"row-reverse"}}>
                                <button onClick={atualizarVaga} className={styles["button"]}>
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