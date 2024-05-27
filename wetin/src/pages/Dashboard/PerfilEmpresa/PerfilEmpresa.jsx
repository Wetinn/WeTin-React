import React, { useState } from "react";
import styles from './PerfilEmpresa.module.css'
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Overlay from "../../../components/Overlay/Overlay";
import PainelDeControle from "../../../components/PainelDeControle/PainelDeControle";

export default function PerfilEmpresa() {

    const [ExpandirSideBar, setExpandirSideBar] = useState(false);

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }



    return (
        <>
        {ExpandirSideBar && <Overlay />}
        {ExpandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed funcaoExpandir={toggleExpandirSideBar}/>
                <div className={styles["caixa-central"]}>
                    <div className={styles["caixa-pefil"]}>
                    </div>
                </div>
                <PainelDeControle/>
            </div>
        </>
    );
}