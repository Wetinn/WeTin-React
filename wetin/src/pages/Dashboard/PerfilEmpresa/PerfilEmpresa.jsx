import React, { useState, useEffect } from "react";
import styles from './PerfilEmpresa.module.css'
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Overlay from "../../../components/Overlay/Overlay";
import PainelDeControle from "../../../components/PainelDeControle/PainelDeControle";
import Loading from "../../../components/Loading/Loading";
import ErrorWarning from "../../../components/ErrorWarning/ErrorWarning";
import axios from "axios";

export default function PerfilEmpresa() {

    const cep = sessionStorage.cep;
    const [ExpandirSideBar, setExpandirSideBar] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [endereco, setEndereco] = useState({
        "city": "",
        "address": "",
        "state": "",
        "district": ""
    });

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }

    const idEmpresa = sessionStorage.idEmpresa
    const [PerfilEmpresa, setPerfilEmpresa] = useState([])

    //Faz a requisição para o backend
    useEffect(() => {
        const fetchPerfilEmpresa = async () => {
            try {
                const response = await axios.get(`/empresas/${idEmpresa}`);
                setEndereco(JSON.parse(response.data.cep))
                const perfilEmpresaComEndereco = { ...response.data, endereco};
                console.log(perfilEmpresaComEndereco)
                console.log()
                setPerfilEmpresa(perfilEmpresaComEndereco)
                setLoading(false);
            } catch (err) {
                console.log(err)
                setError(true);
                setLoading(false);
            }
        };

        fetchPerfilEmpresa();
    }, [idEmpresa, cep, endereco]);



    return (
        <>
            {error && <ErrorWarning />}
            {loading && <Loading />}
            {ExpandirSideBar && <Overlay />}
            {ExpandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed funcaoExpandir={toggleExpandirSideBar} />
                <div className={styles["caixa-central"]}>
                    <div className={styles["caixa-perfil"]}>

                        <div className={styles["foto-e-nome"]}>
                            <div className={styles["container-foto"]}>
                                <img className={styles["foto-perfil"]} src={PerfilEmpresa.imagem} alt="Foto perfil" />
                            </div>
                            <h1 className={styles["nome-empresa"]}>{PerfilEmpresa.nome}</h1>
                        </div>

                        <h2 className={styles["subtopico"]}>Sobre</h2>
                        <p className={styles["corpo"]}>{PerfilEmpresa.descricao}</p>

                        <h2 className={styles["subtopico"]}>Localização</h2>
                        <p className={styles["corpo"]}>{endereco.city || ""} - Brasil.</p>

                        <h2 className={styles["subtopico"]}>Contato</h2>
                        <p className={styles["corpo"]}>
                            Endereço: {endereco.address || ""}, {endereco.district || ""} - {endereco.city || ""}, {endereco.state || ""}  
                            <br />Telefone: {PerfilEmpresa.telefone}
                            <br />E-mail: {PerfilEmpresa.email}</p>

                    </div>
                </div>
                <PainelDeControle />
            </div>
        </>
    );
}