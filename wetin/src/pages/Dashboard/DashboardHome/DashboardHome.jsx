import React, { useState } from "react";
import styles from './DashboardHome.module.css'
import CardCandidatoSimples from "../../../components/Cards/CardCandidatoSimples/CardCandidatoSimples";
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Overlay from "../../../components/Overlay/Overlay";

export default function DashboardHome() {

    
    const candidatoMock = [
        {
            id: 1,
            nome: "João Silva",
            localizacao: "São Paulo, SP",
            telefone: "(11) 98765-4321",
            imagem: "https://via.placeholder.com/150",
            favorito: true,
            recomendado: false
        },
        {
            id: 2,
            nome: "Maria Oliveira",
            localizacao: "Rio de Janeiro, RJ",
            telefone: "(21) 99876-5432",
            imagem: "https://via.placeholder.com/150",
            favorito: false,
            recomendado: true
        },
        {
            id: 3,
            nome: "Carlos Pereira",
            localizacao: "Belo Horizonte, MG",
            telefone: "(31) 91234-5678",
            imagem: "https://via.placeholder.com/150",
            favorito: true,
            recomendado: true
        },
        {
            id: 4,
            nome: "Ana Costa",
            localizacao: "Porto Alegre, RS",
            telefone: "(51) 98765-4321",
            imagem: "https://via.placeholder.com/150",
            favorito: false,
            recomendado: false
        },
        {
            id: 5,
            nome: "Pedro Fernandes",
            localizacao: "Curitiba, PR",
            telefone: "(41) 99876-5432",
            imagem: "https://via.placeholder.com/150",
            favorito: true,
            recomendado: true
        },
        {
            id: 6,
            nome: "Pedro Fernandes",
            localizacao: "Curitiba, PR",
            telefone: "(41) 99876-5432",
            imagem: "https://via.placeholder.com/150",
            favorito: true,
            recomendado: true
        },
        {
            id: 7,
            nome: "Pedro Fernandes",
            localizacao: "Curitiba, PR",
            telefone: "(41) 99876-5432",
            imagem: "https://via.placeholder.com/150",
            favorito: true,
            recomendado: true
        }
    ];
    
    const [Candidato, setCandidato] = useState(candidatoMock)
    const [ExpandirSideBar, setExpandirSideBar] = useState(false);

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }
    
    const getCandidatos = () => {
        //Faz a requisição para o backend
        
        setCandidato = [0, 0, 0]
        
        renderCandidatosFavoritos();
        renderCandidatosRecomendados();
    }

    const renderCandidatosFavoritos = () => Candidato.filter(candidato => candidato.favorito).map(candidato => (
        <React.Fragment key={candidato.id}>
            <CardCandidatoSimples nome={candidato.nome} localizacao={candidato.localizacao} telefone={candidato.telefone} imagem={candidato.imagem} />
        </React.Fragment>
    ))

    const renderCandidatosRecomendados = () => Candidato.filter(candidato => candidato.recomendado === true).map(candidato => (
        <React.Fragment key={candidato.id}>
            <CardCandidatoSimples nome={candidato.nome} localizacao={candidato.localizacao} telefone={candidato.telefone} imagem={candidato.imagem} recomendacao />
        </React.Fragment>
    ))

    return (
        <>
        {ExpandirSideBar && <Overlay />}
        {ExpandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed funcaoExpandir={toggleExpandirSideBar}/>
                <div className={styles["caixa-central"]}>

                    <div className={styles["caixa-candidatos"]}>
                        <h3>Candidatos Recomendados</h3>
                        <div className={styles["caixa-cards"]}>
                            {renderCandidatosRecomendados()}
                        </div>
                    </div>

                    <div className={styles["caixa-candidatos"]}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <h3>Candidatos Favoritados</h3>
                            <a href="">MAIS +</a>
                        </div>
                        <div className={styles["caixa-cards"]}>
                            {renderCandidatosFavoritos()}
                        </div>
                    </div>
                </div>
                <div className={styles["secao-graficos"]}>
                    <div className={styles["caixa-grafico"]}>
                        <h3>Aderência das vagas</h3>
                        <div className={styles["grafico"]}>
                        </div>
                        <p>
                        Para melhorar a aderência das vagas, considere otimizar os títulos e descrições das vagas com palavras-chave relevantes, promover as vagas em redes sociais e atualizar regularmente o conteúdo para manter o interesse dos candidatos
                        </p>
                    </div>
                    <div className={styles["caixa-grafico"]}>
                        <h3>Relação candidato vaga</h3>
                        <div className={styles["grafico"]}></div>
                    </div>
                </div>
            </div>
        </>
    );
}