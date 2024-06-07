import React, { useState, useEffect } from "react";
import styles from './Notificacoes.module.css'
import NotificationCollapsed from "../../../components/Notifications/NotificationCollapsed/NotificationCollapsed";
import NotificationExpanded from "../../../components/Notifications/NotificationExpanded/NotificationExpanded";
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Overlay from "../../../components/Overlay/Overlay";
import Loading from "../../../components/Loading/Loading";
import ErrorWarning from "../../../components/ErrorWarning/ErrorWarning";
import axios from "axios";

export default function Notificacoes() {

    const [ExpandirSideBar, setExpandirSideBar] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }

    const idEmpresa = sessionStorage.idEmpresa
    const [Notificacoes, setNotificacoes] = useState([])

    useEffect(() => {
        const fetchNotificacoes = async () => {
            try {
                const notificacoesResponse = await axios.get(`/empresas/${idEmpresa}/listar-notificacoes`);
                const notificacoesFormatadas = notificacoesResponse.data.map(notificacao => ({ ...notificacao, expandida: false, novo: true }));
                setNotificacoes(notificacoesFormatadas)
                setLoading(false);

            } catch (err) {
                setError(true);
                setLoading(false);
                console.log(err);
                
            }
        };

        fetchNotificacoes();
    }, []);

    const handleExpand = (id) => {
        setNotificacoes(Notificacoes.map(notificacao =>
            notificacao.id === id ? { ...notificacao, expandida: true, novo: false } : notificacao
        ));
    };

    const handleCollapse = (id) => {
        setNotificacoes(Notificacoes.map(notificacao =>
            notificacao.id === id ? { ...notificacao, expandida: false } : notificacao
        ));
    };


    const getNotificacoes = () => {

        renderNotificacoes();
    }

    const renderNotificacoes = () => Notificacoes.map(notificacao => (
        <React.Fragment key={notificacao.id}>
            {notificacao.expandida ? (
                <NotificationExpanded onCollapse={() => handleCollapse(notificacao.id)} titulo={notificacao.titulo} corpo={notificacao.corpo} novo={notificacao.novo} />
            ) : (
                <NotificationCollapsed onExpand={() => handleExpand(notificacao.id)} titulo={notificacao.titulo} corpo={notificacao.corpo} novo={notificacao.novo} />
            )}
        </React.Fragment>
    ))

    return (
        <>
            {error && <ErrorWarning />}
            {loading && <Loading />}
            {ExpandirSideBar && <Overlay />}
            {ExpandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed funcaoExpandir={toggleExpandirSideBar} />
                <div className={styles["caixa-central"]}>
                    <div className={styles["caixa-notificacoes"]}>
                        {renderNotificacoes()}
                    </div>
                </div>
                <div className={styles["caixa-lateral"]}>
                </div>
            </div>
        </>
    );
}