import React, {useState} from "react";
import styles from './DashboardHome.module.css'
import Filters from "../../../components/Filters/Filters";
import SidebarCollapsed from "../../../components/Sidebar/SidebarCollapsed/SidebarCollapsed";
import ButtonFilled from "../../../components/Buttons/ButtonFilled/ButtonFilled";
import BarraPesquisa from "../../../components/BarraPesquisa/BarraPesquisa";
import CardVaga from "../../../components/Cards/CardVaga/CardVaga"

const cidades = [
    { "_id": 1, "nome": "São Paulo" },
    { "_id": 2, "nome": "Rio de Janeiro" },
    { "_id": 3, "nome": "Manaus" },
    { "_id": 4, "nome": "Brasília" },
    { "_id": 5, "nome": "São Caetano" },
]

const especialidades = [
    {"_id": 1, "nome": "Desenvolvedor"},
    {"_id": 2, "nome": "Caixa de supermercado"},
    {"_id": 3, "nome": "Jogador de futebol"},
    {"_id": 4, "nome": "Açougueiro"},
]

const filtros = [cidades, especialidades]
const tituloFiltros = [
    {"id": 1, "titulo": "Cidades"},
    {"id": 2, "titulo": "Especialidades"}]

export default function DashboardHome() {

    // HIPÓTESES DE USO DESSES FILTROS
    // getCandidatos vai ser chamado quando o usuário entra na página para procurar os canididatos davaga
    // Enviamos a função para o componente Filters para que quando for modificado o filtro ele possa chamar essa função novamente
    // Essa função vai receber os filtros e vai fazer a chamada de acordo com os filtros selecionados
    // getCandidatos alimenta a variável que vai mostrar os cards
    // Funciona para qualquer tipo de lista?

    const [Vagas, setVagas] = useState([
        {"imagem":"https://cdnm.westwing.com.br/glossary/uploads/br/2015/03/02025025/escrit%C3%B3rio-moderno-com-estande-grade-de-metal-e-plantas_c-a1495.jpg", "titulo": "Desenvolvedor Back-End", "descricao": "Descricao"},
        {"imagem":"https://cdnm.westwing.com.br/glossary/uploads/br/2015/03/02025025/escrit%C3%B3rio-moderno-com-estande-grade-de-metal-e-plantas_c-a1495.jpg", "titulo": "Desenvolvedor Back-End", "descricao": "Descricao"},
        {"imagem":"https://cdnm.westwing.com.br/glossary/uploads/br/2015/03/02025025/escrit%C3%B3rio-moderno-com-estande-grade-de-metal-e-plantas_c-a1495.jpg", "titulo": "Desenvolvedor Back-End", "descricao": "Descricao"},
        {"imagem":"https://cdnm.westwing.com.br/glossary/uploads/br/2015/03/02025025/escrit%C3%B3rio-moderno-com-estande-grade-de-metal-e-plantas_c-a1495.jpg", "titulo": "Desenvolvedor Back-End", "descricao": "Descricao"},
        {"imagem":"https://cdnm.westwing.com.br/glossary/uploads/br/2015/03/02025025/escrit%C3%B3rio-moderno-com-estande-grade-de-metal-e-plantas_c-a1495.jpg", "titulo": "Desenvolvedor Back-End", "descricao": "Descricao"},
        {"imagem":"https://cdnm.westwing.com.br/glossary/uploads/br/2015/03/02025025/escrit%C3%B3rio-moderno-com-estande-grade-de-metal-e-plantas_c-a1495.jpg", "titulo": "Desenvolvedor Back-End", "descricao": "Descricao"},
    ])
    const [TextoQuantidade, setTextoQuantidade] = useState(`${Vagas.length} Vagas publicadas`)

    const getVaga = () => {
        //Faz a requisição para o backend
        renderVagas();
    }

    const renderVagas = () => Vagas.map(vaga => (
            <React.Fragment key={vaga.id}>
                <CardVaga titulo={vaga.titulo} descricao={vaga.descricao} imagem={vaga.imagem}/>
            </React.Fragment>
    ))

   
    return (
        <>
            <div style={{ height: "100vh", width: "100vw",gap: '8px', display: 'flex', flexDirection: 'row', alignItems: "center"}}>
                <SidebarCollapsed/>
            <div style={{ gap: '8px', display: 'flex', flexDirection: 'column', height: "100%", width: "71.5vw" }}>
                <BarraPesquisa placeholder="Eu tentei"/>
                <div className={styles["caixa-vagas"]}>
                    <h3>{TextoQuantidade}</h3>
                    <div className={styles["caixa-cards"]}>
                        {renderVagas()}
                    </div>
                </div>
                </div>
                <div style={{ gap: '8px', display: 'flex', flexDirection: 'column'  }}>
                    <ButtonFilled texto="Adicionar vaga" height="72"/>
                    <Filters getObjects={getVaga} tituloFiltros={tituloFiltros} filtros={filtros}/>
                </div>
            </div>
        </>
    );
}