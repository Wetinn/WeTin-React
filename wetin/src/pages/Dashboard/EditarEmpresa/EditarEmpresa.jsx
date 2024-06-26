import styles from "./EditarEmpresa.module.css";
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import iconDeletar from "../../../utils/assets/icons/DeleteIconBlue.svg"
import iconEditar from "../../../utils/assets/icons/EditIcon.png"
import axios from "axios";
import InputMask from 'react-input-mask';
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Overlay from "../../../components/Overlay/Overlay";
import Loading from "../../../components/Loading/Loading";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditarEmpresa() {
    const navigate = useNavigate();

    const empresaLogadaJSON = sessionStorage.getItem('user');
    var user = JSON.parse(empresaLogadaJSON);

    const [ExpandirSideBar, setExpandirSideBar] = useState(false);
    const [loading, setLoading] = useState(true);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cep, setCep] = useState("");
    const [descricao, setDescricao] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [imagem, setImagem] = useState("");
    


    //To buscando a empresa pra prencher as inputs
    useEffect(() => {
        const buscarEmpresa = async () => {
            try {

                setLoading(true);

                const response = await axios.get(`/empresas/${user.id}`);
                var empresaData = response.data;
                const novoCep = JSON.parse(empresaData.cep);
                console.log(novoCep)
                console.log(empresaData)

                setNome(empresaData.nome || "");
                setEmail(empresaData.email || "");
                setTelefone(empresaData.telefone || "");
                setCep(novoCep.cep || "");
                setDescricao(empresaData.descricao || "");
                setLinkedin(empresaData.linkedin || "");
                setCnpj(empresaData.cnpj || "");
                setImagem(empresaData.imagem);

                console.log(empresaData);
                setLoading(false);
            } catch (err) {
                setLoading(false);

                console.log(err);
            }
        };

        buscarEmpresa();
    }, [user.id]);

    // agr sim que vou atualizar
    const atualizarEmpresa = async () => {
        const empresaEditada = {
            nome,
            telefone,
            cep,
            email,
            descricao,
            linkedin,
            cnpj
        }
        setLoading(true);
        try {
            await axios.put(`/empresas/${user.id}`, empresaEditada);
            setLoading(false);
            toast.success("Empresa Atualizada")
            sessionStorage.setItem("cepEmpresa", empresaEditada.cep);
            navigate("/dashboard/perfil-empresa")
        } catch (err) {
            console.error(err);
            setLoading(false);
            toast.error("Não foi possivel atualizar a empresa")
            
            console.log(empresaEditada);
        }
    };


    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }



    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    }


    return (
        <>
            {loading && <Loading />}
            {ExpandirSideBar && <Overlay />}
            {ExpandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed funcaoExpandir={toggleExpandirSideBar} />
                <div className="deixaEuVer" style={{ width: "90vw", height: "97vh", display: "flex", alignItems: "center", flexDirection: "column", borderRadius: "20px", backgroundColor: "#F2F2F2" }}>
                    <div className={styles["titulo"]}>
                        <span>Editar perfil da Empresa</span>
                    </div>

                    <div className={styles["caixaEditarEmpresa"]}>
                        <div className={styles["editarImagem"]}>
                            <div className={styles["fotoEmpresa"]}>
                                <img className={styles["foto-perfil"]} src={imagem} alt="Foto perfil" />
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
                                    <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o nome da empresa"
                                        value={nome} onChange={(e) => handleInputChange(e, setNome)} />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">E-Mail: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o e-mail da empresa" value={email} onChange={(e) => handleInputChange(e, setEmail)} />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Telefone: </label>
                                        <span>*</span>
                                    </div>
                                    <InputMask mask="(99) 99999-9999" type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o telefone da empresa" value={telefone} onChange={(e) => handleInputChange(e, setTelefone)} />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">CEP: </label>
                                        <span>*</span>
                                    </div>
                                    <InputMask mask="99999-999" type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o CEP da empresa" value={cep} onChange={(e) => handleInputChange(e, setCep)} />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Descrição: </label>
                                        <span>*</span>
                                    </div>
                                    <textarea type="text" className={styles["textArea"]} style={{ width: "85%", height: "30vh" }} placeholder="Descreva sobre sua empresa" value={descricao} onChange={(e) => handleInputChange(e, setDescricao)} />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">Linkedin: </label>
                                        <span>*</span>
                                    </div>
                                    <input type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Cole aqui o link do linkedin" value={linkedin} onChange={(e) => handleInputChange(e, setLinkedin)} />
                                </div>
                                <div className={styles["InputDiv"]}>
                                    <div className={styles["labelDiv"]}>
                                        <label htmlFor="">CNPJ: </label>
                                        <span>*</span>
                                    </div>
                                    <InputMask mask="99.999.999/9999-99" type="text" className={styles["input"]} style={{ width: "85%" }} placeholder="Digite aqui o CNPJ da empresa" value={cnpj} onChange={(e) => handleInputChange(e, setCnpj)} />
                                </div>
                            </form>
                            <div className={styles["botaoSalvar"]}>
                                <button onClick={atualizarEmpresa}>Salvar Alterações</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}