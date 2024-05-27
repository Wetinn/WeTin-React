import React, { useState } from "react";
import styles from './CandidatosFavoritos.module.css'
import Filters from "../../../components/Filters/Filters";
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import SidebarExtended from "../../../components/Sidebar/SidebarExtended/SidebarExtended";
import Overlay from "../../../components/Overlay/Overlay";
import ButtonFilled from "../../../components/Buttons/ButtonFilled/ButtonFilled";
import BarraPesquisa from "../../../components/BarraPesquisa/BarraPesquisa";
import CardCandidatoExtendido from "../../../components/Cards/CardCandidatoExtendido/CardCandidatoExtendido"

const cidades = [
    { "_id": 1, "nome": "São Paulo" },
    { "_id": 2, "nome": "Rio de Janeiro" },
    { "_id": 3, "nome": "Manaus" },
    { "_id": 4, "nome": "Brasília" },
    { "_id": 5, "nome": "São Caetano" },
]

const especialidades = [
    { "_id": 1, "nome": "Desenvolvedor" },
    { "_id": 2, "nome": "Caixa de supermercado" },
    { "_id": 3, "nome": "Jogador de futebol" },
    { "_id": 4, "nome": "Açougueiro" },
]

const filtros = [cidades, especialidades]
const tituloFiltros = [
    { "id": 1, "titulo": "Cidades" },
    { "id": 2, "titulo": "Especialidades" }]

export default function CandidatosFavoritos() {

    const [ExpandirSideBar, setExpandirSideBar] = useState(false);

    const toggleExpandirSideBar = () => {
        setExpandirSideBar(!ExpandirSideBar)
    }

    // HIPÓTESES DE USO DESSES FILTROS
    // getCandidatos vai ser chamado quando o usuário entra na página para procurar os canididatos davaga
    // Enviamos a função para o componente Filters para que quando for modificado o filtro ele possa chamar essa função novamente
    // Essa função vai receber os filtros e vai fazer a chamada de acordo com os filtros selecionados
    // getCandidatos alimenta a variável que vai mostrar os cards
    // Funciona para qualquer tipo de lista?

    const [Candidatos, setCandidatos] = useState([
        {
            id: 1,
            nome: "João Silva",
            localizacao: "São Paulo, SP",
            telefone: "(11) 98765-4321",
            imagem: "https://via.placeholder.com/150",
            email: "gmail@gmail.com",
        },
        {
            id: 2,
            nome: "Maria Oliveira",
            localizacao: "Rio de Janeiro, RJ",
            telefone: "(21) 99876-5432",
            imagem: "https://via.placeholder.com/150",
            email: "gmail@gmail.com"
        },
        {
            id: 3,
            nome: "Carlos Pereira",
            localizacao: "Belo Horizonte, MG",
            telefone: "(31) 91234-5678",
            imagem: "https://via.placeholder.com/150",
            email: "gmail@gmail.com",
        },
        {
            id: 4,
            nome: "Ana Costa",
            localizacao: "Porto Alegre, RS",
            telefone: "(51) 98765-4321",
            imagem: "https://via.placeholder.com/150",
            email: "gmail@gmail.com",
        },
        {
            id: 5,
            nome: "Pedro Fernandes",
            localizacao: "Curitiba, PR",
            telefone: "(41) 99876-5432",
            imagem: "https://via.placeholder.com/150",
            email: "gmail@gmail.com",
        },
        {
            id: 6,
            nome: "Pedro Fernandes",
            localizacao: "Curitiba, PR",
            telefone: "(41) 99876-5432",
            imagem: "https://via.placeholder.com/150",
            email: "gmail@gmail.com",
        },
        {
            id: 7,
            nome: "Pedro Fernandes",
            localizacao: "Curitiba, PR",
            telefone: "(41) 99876-5432",
            imagem: "https://via.placeholder.com/150",
            email: "gmail@gmail.com",
        }
    ])
    const [TextoQuantidade, setTextoQuantidade] = useState(`${Candidatos.length} Candidatos favoritos`)

    const getCandidatos= () => {
        //Faz a requisição para o backend
        renderCandidatos();
    }

    const renderCandidatos = () => Candidatos.map(candidato => (
        <React.Fragment key={candidato.id}>
            <CardCandidatoExtendido  
                favorito={true} 
                imagem={candidato.imagem} 
                nome={candidato.nome} 
                telefone={candidato.telefone} 
                localizacao={candidato.localizacao} 
                email={candidato.email}
            />
        </React.Fragment>
    ))


    return (
        <>
            {ExpandirSideBar && <Overlay />}
            {ExpandirSideBar && <SidebarExtended funcaoColapsar={toggleExpandirSideBar} />}
            <div style={{ height: "100vh", width: "100vw", gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <SidebarCollapsed funcaoExpandir={toggleExpandirSideBar}/>
                <div style={{ gap: '8px', display: 'flex', flexDirection: 'column', height: "100%", width: "71.5vw" }}>
                    <BarraPesquisa placeholder="Clique aqui para pesquisar um candidato específico " />
                    <div className={styles["caixa-vagas"]}>
                        <h3>{TextoQuantidade}</h3>
                        <div className={styles["caixa-cards"]}>
                            {renderCandidatos()}
                        </div>
                    </div>
                </div>
                <div style={{ gap: '8px', display: 'flex', flexDirection: 'column' }}>
                    <ButtonFilled texto="Exportar candidatos para .csv" height="72" />
                    <Filters getObjects={getCandidatos} tituloFiltros={tituloFiltros} filtros={filtros} />
                </div>
            </div>
        </>
    );
}