import React, { useEffect, useState } from "react";
import styles from './PerfilEmpresa.module.css'
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Overlay from "../../../components/Overlay/Overlay";
import PainelDeControle from "../../../components/PainelDeControle/PainelDeControle";
import axios from "axios";

export default function PerfilEmpresa() {

    const [ExpandirSideBar, setExpandirSideBar] = useState(false);

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }

    const [PerfilEmpresa, setPerfilEmpresa] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Faz a requisição para o backend
    useEffect(() => {
        const fetchPerfilEmpresa = async () => {
            try {
                const response = await axios.get('/empresas/1');
                console.log(response)

                setPerfilEmpresa(response.data)
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchPerfilEmpresa();
    }, []);


    return (
        <>
        {ExpandirSideBar && <Overlay />}
        {ExpandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed funcaoExpandir={toggleExpandirSideBar}/>
                <div className={styles["caixa-central"]}>
                    <div className={styles["caixa-perfil"]}>

                        <div className={styles["foto-e-nome"]}>
                            <div className={styles["container-foto"]}>
                                <img className={styles["foto-perfil"]} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/PedroCardosoiPorAndreaFarias.jpg/200px-PedroCardosoiPorAndreaFarias.jpg" alt="Foto perfil"/>
                            </div>
                            <h1 className={styles["nome-empresa"]}>XPTO. Ltda</h1>
                        </div>

                        <h2 className={styles["subtopico"]}>Sobre</h2>
                        <p className={styles["corpo"]}>A XYZ.Ltda é uma empresa líder no setor de tecnologia da informação, dedicada a fornecer soluções inovadoras e personalizadas para empresas de todos os tamanhos. Desde a nossa fundação em 2005, temos nos destacado pela excelência em serviços de consultoria, desenvolvimento de software e suporte técnico, ajudando nossos clientes a enfrentar os desafios do mundo digital de forma eficaz e eficiente.</p>

                        <h2 className={styles["subtopico"]}>Localização</h2>
                        <p className={styles["corpo"]}>São Paulo, Brasil.</p>

                        <h2 className={styles["subtopico"]}>Contato</h2>
                        <p className={styles["corpo"]}>Endereço: Rua das Inovações, 123, Bairro Techville, São Paulo, SP.
<br/>Telefone: +55 (11) 1234-5678
<br/>E-mail: info@techsolucoes.com.br</p>

                    </div>
                </div>
                <PainelDeControle/>
            </div>
        </>
    );
}