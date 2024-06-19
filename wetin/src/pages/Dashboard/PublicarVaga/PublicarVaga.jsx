import styles from './PublicarVaga.module.css'
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import InputMask from 'react-input-mask';
import Overlay from "../../../components/Overlay/Overlay";
import Loading from "../../../components/Loading/Loading";
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PublicarVaga() {

    const empresaLogadaJSON = sessionStorage.getItem('user');
    var user = JSON.parse(empresaLogadaJSON);
    const [loading, setLoading] = useState(false);
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
    const [dtExpiracao, setDtExpiracao] = useState("");
    const periodoOptions = {
        MANHA: "Período Manhã (7h - 13h)",
        TARDE: "Período Tarde (12h - 18h)",
        NOITE: "Período Noite (18h - 23h)"
    };
    const cargaHorariaOptions = {
        QUATRO_HORAS: "Quatro Horas - 4h",
        SEIS_HORAS: "Seis Horas - 6h",
        OITO_HORAS: "Oito Horas - 8h",
        DEZ_HORAS: "Dez Horas - 10h",
        DOZE_HORAS: "Doze Horas - 12h"
    };
    const [errorMessages, setErrorMessages] = useState({
        titulo: "",
        descricao: "",
        cep: "",
        pretensaoSalarial: "",
        especialidade: "",
        requisitos: "",
        beneficios: "",
        periodo: "",
        cargaHoraria: "",
        dtCriacao: "",
        dtExpiracao: ""
    });

    const validarInputs = () => {
        let naoTemErro = true;
        const errors = {
            titulo: "",
            descricao: "",
            cep: "",
            pretensaoSalarial: "",
            especialidade: "",
            requisitos: "",
            beneficios: "",
            periodo: "",
            cargaHoraria: "",
            dtCriacao: "",
            dtExpiracao: ""
        };

        if (!titulo) {
            errors.titulo = "Título da vaga é obrigatório";
            naoTemErro = false;
        }
        if (!descricao) {
            errors.descricao = "Descrição da vaga é obrigatória";
            naoTemErro = false;
        }
        if (!cep) {
            errors.cep = "CEP é obrigatório";
            naoTemErro = false;
        }
        if (!pretensaoSalarial) {
            errors.pretensaoSalarial = "Pretensão salarial é obrigatória";
            naoTemErro = false;
        }
        if (!especialidade) {
            errors.especialidade = "Especialidade é obrigatória";
            naoTemErro = false;
        }
        if (!requisitos) {
            errors.requisitos = "Requisitos são obrigatórios";
            naoTemErro = false;
        }
        if (!beneficios) {
            errors.beneficios = "Benefícios são obrigatórios";
            naoTemErro = false;
        }
        if (!periodo) {
            errors.periodo = "Período é obrigatório";
            naoTemErro = false;
        }
        if (!cargaHoraria) {
            errors.cargaHoraria = "Carga horária é obrigatória";
            naoTemErro = false;
        }
        if (!dtCriacao) {
            errors.dtCriacao = "Data de criação é obrigatória";
            naoTemErro = false;
        }
        if (!dtExpiracao) {
            errors.dtExpiracao = "Data de expiração é obrigatória";
            naoTemErro = false;
        }

        setErrorMessages(errors);
        return naoTemErro;
    };





    const handleSave = async () => {
        if (validarInputs()) {
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
            setLoading(true);
            try {
                await axios.post(`/vagas/${user.id}`, vagaCadastrada);
                setLoading(false);
                toast.success('Vaga cadastrada com sucesso');
                navigate("/dashboard/vagas-publicadas");
            } catch (err) {
                console.error(err);
                console.log(vagaCadastrada);
                setLoading(false);
                toast.error('Não foi possível atualizar a vaga');
            }
        }
    };

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    };

    const handleSelectInputChange = (event, setStateFunction, options) => {
        const inputValue = event.target.value;
        const selectedValue = Object.keys(options).find(key => options[key] === inputValue);

        if (selectedValue) {
            setStateFunction(selectedValue);
        } else {
            setStateFunction('');
        }
    };

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!expandirSideBar);
    };
    const [expandirSideBar, setExpandirSideBar] = useState(false);


    return (

        <>
            {loading && <Loading />}
            {expandirSideBar && <Overlay />}
            {expandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed />
                <div className="deixaEuVer" style={{ width: "90vw", height: "97vh", display: "flex", alignItems: "center", flexDirection: "column", borderRadius: "20px", backgroundColor: "#F2F2F2" }}>
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
                                    {errorMessages.titulo && <span className={styles["error"]}>* {errorMessages.titulo}</span>}
                                </div>
                                <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o nome da empresa" value={titulo} onChange={(e) => handleInputChange(e, setTitulo)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Descrição: </label>
                                    {errorMessages.descricao && <span className={styles["error"]}>* {errorMessages.descricao}</span>}
                                </div>
                                <textarea type="text" className={styles["input"]} style={{
                                    width: "85%", height: "30vh", border: "none", fontSize: "1rem", paddingTop: "3%", backgroundColor: "#E2E2E2",
                                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
                                    borderRadius: "5px"
                                }} placeholder="Descreva sobre sua vaga" value={descricao} onChange={(e) => handleInputChange(e, setDescricao)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">CEP: </label>
                                    {errorMessages.cep && <span className={styles["error"]}>* {errorMessages.cep}</span>}
                                </div>
                                <InputMask mask="99999-999" type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o CEP da vaga" value={cep} onChange={(e) => handleInputChange(e, setCep)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Pretenção Salarial: </label>
                                    {errorMessages.pretensaoSalarial && <span className={styles["error"]}>* {errorMessages.pretensaoSalarial}</span>}
                                </div>
                                <input type="number" className={styles["input"]} style={{ width: "85%" }} placeholder="Informe o salario desejado" value={pretensaoSalarial} onChange={(e) => handleInputChange(e, setPretensaoSalarial)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Especialidades Desejadas: </label>
                                    {errorMessages.especialidade && <span className={styles["error"]}>* {errorMessages.especialidade}</span>}
                                </div>
                                <textarea type="text" className={styles["input"]} style={{
                                    width: "85%", height: "30vh", border: "none", fontSize: "1rem", paddingTop: "3%", backgroundColor: "#E2E2E2",
                                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
                                    borderRadius: "5px"
                                }} placeholder="Digite aqui as especialidades" value={especialidade} onChange={(e) => handleInputChange(e, setEspecialidade)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Requisitos: </label>
                                    {errorMessages.requisitos && <span className={styles["error"]}>* {errorMessages.requisitos}</span>}
                                </div>
                                <textarea type="text" className={styles["input"]} style={{
                                    width: "85%", height: "30vh", border: "none", fontSize: "1rem", paddingTop: "3%", backgroundColor: "#E2E2E2",
                                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
                                    borderRadius: "5px"
                                }} placeholder="Digite aqui os requisitos da vaga" value={requisitos} onChange={(e) => handleInputChange(e, setRequisitos)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Beneficios: </label>
                                    {errorMessages.beneficios && <span className={styles["error"]}>* {errorMessages.beneficios}</span>}
                                </div>
                                <textarea type="text" className={styles["input"]} style={{
                                    width: "85%", height: "30vh", border: "none", fontSize: "1rem", paddingTop: "3%", backgroundColor: "#E2E2E2",
                                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
                                    borderRadius: "5px"
                                }} placeholder="Digite aqui os beneficios da vaga" value={beneficios} onChange={(e) => handleInputChange(e, setBeneficios)} />
                            </div>
                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Período: </label>
                                    {errorMessages.periodo && <span className={styles["error"]}>* {errorMessages.periodo}</span>}
                                </div>
                                <input
                                    type="text"
                                    className={styles["input"]}
                                    style={{ width: "85%" }}
                                    placeholder="Escolha o período de trabalho"
                                    list="faixa"
                                    value={periodoOptions[periodo] || ""}
                                    onChange={(e) => handleSelectInputChange(e, setPeriodo, periodoOptions)}
                                />
                                <datalist id="faixa">
                                    <option value="">horários:</option>
                                    {Object.values(periodoOptions).map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </datalist>
                            </div>

                            <div className={styles["InputDiv"]}>
                                <div className={styles["labelDiv"]}>
                                    <label htmlFor="">Carga Horária: </label>
                                    {errorMessages.cargaHoraria && <span className={styles["error"]}>* {errorMessages.cargaHoraria}</span>}
                                </div>
                                <input
                                    type="text"
                                    className={styles["input"]}
                                    style={{ width: "85%" }}
                                    placeholder="Escolha a carga horária"
                                    list="CargaHoraria"
                                    value={cargaHorariaOptions[cargaHoraria] || ""}
                                    onChange={(e) => handleSelectInputChange(e, setCargaHoraria, cargaHorariaOptions)}
                                />
                                <datalist id="CargaHoraria">
                                    <option value="">carga horária:</option>
                                    {Object.values(cargaHorariaOptions).map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </datalist>
                            </div>
                            <div className="caixaData" style={{ display: "flex", width: "60%", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Data de Criação da Vaga: </label>
                                        {errorMessages.dtCriacao && <span className={styles["error"]}>* {errorMessages.dtCriacao}</span>}
                                    </div>
                                    <input type="date" className={styles["input"]} style={{ width: "50%" }} value={dtCriacao} onChange={(e) => handleInputChange(e, setDtCriacao)} />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Data de Expiração da Vaga: </label>
                                        {errorMessages.dtExpiracao && <span className={styles["error"]}>* {errorMessages.dtExpiracao}</span>}
                                    </div>
                                    <input type="date" className={styles["input"]} style={{ width: "50%" }} value={dtExpiracao} onChange={(e) => handleInputChange(e, setDtExpiracao)} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
}