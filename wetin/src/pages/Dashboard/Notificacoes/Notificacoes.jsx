import React, { useState } from "react";
import styles from './Notificacoes.module.css'
import NotificationCollapsed from "../../../components/Notifications/NotificationCollapsed/NotificationCollapsed";
import NotificationExpanded from "../../../components/Notifications/NotificationExpanded/NotificationExpanded";
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Overlay from "../../../components/Overlay/Overlay";

export default function Notificacoes() {

    
    var notificacoesMock = [
        {
            "id": 1,
            "titulo": "Notificação 1    ",
            "corpo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet massa eu ante sagittis condimentum sit amet eu ipsum. In in ultricies felis. Duis rutrum tincidunt orci, sit amet vestibulum lorem feugiat nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at velit nulla. Phasellus mollis, purus quis tincidunt tincidunt, libero lacus sagittis arcu, non placerat mi nisl placerat quam. Pellentesque nec leo eget metus pharetra scelerisque. Fusce vitae sollicitudin nibh. Phasellus in eleifend felis. Aliquam erat volutpat. Fusce non ullamcorper urna, sed convallis ex. Maecenas at mi odio. Mauris dapibus lorem eu tincidunt condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis ante sed tellus finibus aliquet",
            "novo": true,
            "expandida": false,
        },
        {
            "id": 2,
            "titulo": "Notificação 1",
            "corpo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet massa eu ante sagittis condimentum sit amet eu ipsum. In in ultricies felis. Duis rutrum tincidunt orci, sit amet vestibulum lorem feugiat nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at velit nulla. Phasellus mollis, purus quis tincidunt tincidunt, libero lacus sagittis arcu, non placerat mi nisl placerat quam. Pellentesque nec leo eget metus pharetra scelerisque. Fusce vitae sollicitudin nibh. Phasellus in eleifend felis. Aliquam erat volutpat. Fusce non ullamcorper urna, sed convallis ex. Maecenas at mi odio. Mauris dapibus lorem eu tincidunt condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis ante sed tellus finibus aliquet",
            "novo": true,
            "expandida": false,
        },
        {
            "id": 3,
            "titulo": "Notificação 1",
            "corpo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet massa eu ante sagittis condimentum sit amet eu ipsum. In in ultricies felis. Duis rutrum tincidunt orci, sit amet vestibulum lorem feugiat nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at velit nulla. Phasellus mollis, purus quis tincidunt tincidunt, libero lacus sagittis arcu, non placerat mi nisl placerat quam. Pellentesque nec leo eget metus pharetra scelerisque. Fusce vitae sollicitudin nibh. Phasellus in eleifend felis. Aliquam erat volutpat. Fusce non ullamcorper urna, sed convallis ex. Maecenas at mi odio. Mauris dapibus lorem eu tincidunt condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis ante sed tellus finibus aliquet",
            "novo": true,
            "expandida": false,
        }
    ];
    
    const [Notificacoes, setNotificacoes] = useState(notificacoesMock)
    const [ExpandirSideBar, setExpandirSideBar] = useState(false);

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }

    const handleExpand = (id) => {
        setNotificacoes(notificacoesMock.map(notificacao => 
          notificacao.id === id ? { ...notificacao, expandida: true, novo: false } : notificacao
        ));
      };
    
      const handleCollapse = (id) => {
        setNotificacoes(notificacoesMock.map(notificacao => 
          notificacao.id === id ? { ...notificacao, expandida: false } : notificacao,
        ));
        setNotificacoes(notificacoesMock.map(notificacao => 
            notificacao.novo && notificacao.id === id ? { ...notificacao, novo: false } : notificacao,
          ));
      };
    
    // const getNotificacoes = () => {
    //     //Faz a requisição para o backend
        
    //     renderNotificacoes();
    // }

    const renderNotificacoes = () => Notificacoes.map(notificacao => (
        <React.Fragment key={notificacao.id}>
            {notificacao.expandida ? (
                <NotificationExpanded onCollapse={() => handleCollapse(notificacao.id)} titulo={notificacao.titulo} corpo={notificacao.corpo} novo={notificacao.novo} />
            ) : (
                <NotificationCollapsed onExpand={() => handleExpand(notificacao.id)} titulo={notificacao.titulo} corpo={notificacao.corpo} novo={notificacao.novo}/>
            )}
        </React.Fragment>
    ))

    return (
        <>
        {ExpandirSideBar && <Overlay />}
        {ExpandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed funcaoExpandir={toggleExpandirSideBar}/>
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