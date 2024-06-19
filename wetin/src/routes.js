import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Teste from './pages/Teste/Teste'

//pages
import Home from './pages/Home/PagHome';
import Solucao from './pages/Solucao/PagSolucao';
import Linhagem from './pages/Solucao/PagLinhagem';
import SelecaoCadastro from './pages/SelecaoCadastro/SelecaoCadastro';
import Beneficios1 from './pages/Beneficios/pagBeneficio1';
import Beneficios2 from './pages/Beneficios/pagBeneficios';
import SobreNos from "./pages/SobreNos/SobreNos";
import Valores from "./pages/SobreNos/Valores/Valores";
import Contato from "./pages/SobreNos/Contato/Contato";
import Depoimento from "./pages/Depoimentos/Depoimento";
import NotFound from "./pages/404/Pag404"

//pags de login
import Login from './pages/Login/PagLogin';
import RecuperarSenha from './pages/Login/RecuperarSenha/recuperarSenha';
import EstamosQuaseLa from './pages/Login/EstamosQuaseLa/estamosQuaseLa';
import CriarSenha from './pages/Login/CriarSenha/criarSenha';


//pags cadastro recrutador
import CadastroRecrutador from './pages/CadastroRecrutador/CadastroRecrutador'
import Descricao from "./pages/CadastroRecrutador/NovoCadastro/CadastroImg";
import Pagamento from "./pages/CadastroRecrutador/Pagamento/pagamento";

//pags cadastro de candidato
import Perfil from "./pages/CadastroCandidato/Perfil/Perfil";
import PerfilEnd from "./pages/CadastroCandidato/Perfil/Perfilpt2";
import Questionario from "./pages/CadastroCandidato/Questionario/questionario";
import Questionario2 from "./pages/CadastroCandidato/Questionario/questionario2";
import DescricaoCandidato from "./pages/CadastroCandidato/DescricaoAnexo/CadastroImg"
import ExperienciaCandidato from "./pages/CadastroCandidato/Experiencia/PagExperiencia"
import FotoCandidato from "./pages/CadastroCandidato/PagImagem/ImagemCandidato"

//pags dashboard 
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import VagasPublicadas from "./pages/Dashboard/VagasPublicadas/VagasPublicadas";
import CandidatosFavoritos from "./pages/Dashboard/CandidatosFavoritos/CandidatosFavoritos";
import Notificacoes from "./pages/Dashboard/Notificacoes/Notificacoes";
import PerfilEmpresa from "./pages/Dashboard/PerfilEmpresa/PerfilEmpresa";
import EditarPerfilEmpresa from "./pages/Dashboard/EditarEmpresa/EditarEmpresa";
import DashboardPublicarVaga from "./pages/Dashboard/PublicarVaga/PublicarVaga";
import DashboardEditarVaga from "./pages/Dashboard/EditarVaga/EditarVaga";

import InformacoesVaga from "./pages/Dashboard/InformacoesVaga/InformacoesVaga";
import PerfilCandidato from "./pages/Dashboard/PerfilCandidato/PerfilCandidato";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/testes" element={<Teste/>} />
                    <Route path="/" element={<Home />} />
                    <Route path="/solucao" element={<Solucao />} />
                    <Route path="/linhagem" element={<Linhagem />} />
                    <Route path="/beneficios" element={<Beneficios1 />} />
                    <Route path="/segundaPartebeneficios" element={<Beneficios2 />} />
                    <Route path="/sobreNos" element={<SobreNos />} />
                    <Route path="/valores" element={<Valores />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/depoimentos" element={<Depoimento />} />
                    <Route path="*" element={<NotFound />} />
                    
                    <Route path="/login" element={<Login />} />
                    <Route path="/recuperarSenha" element={<RecuperarSenha />} />
                    <Route path="/estamosQuaseLa" element={<EstamosQuaseLa />} />
                    <Route path="/criarSenha" element={<CriarSenha />} />

                    <Route path="/cadastro" element={<SelecaoCadastro />} />

                    <Route path="/recrutador" element={<CadastroRecrutador />} />
                    <Route path="/recrutadorDescricao" element={<Descricao/>} />
                    <Route path="/recrutadorPagamento" element={<Pagamento/>} />


                    <Route path="/candidato" element={<Perfil/>} />
                    <Route path="/candidatoEndereco" element={<PerfilEnd/>} />
                    <Route path="/candidatoQuestionario" element={<Questionario/>} />
                    <Route path="/candidatoQuestionario2" element={<Questionario2/>} />
                    <Route path="/descricaoCandidato" element={<DescricaoCandidato/>} />
                    <Route path="/fotoCandidato" element={<FotoCandidato/>} />
                    <Route path="/experienciaCandidato" element={<ExperienciaCandidato/>} />

                    <Route path="/dashboard" element={<DashboardHome/>}/>
                    <Route path="/dashboard/vagas-publicadas" element={<VagasPublicadas/>}/>
                    <Route path="/dashboard/candidatos-favoritos" element={<CandidatosFavoritos/>}/>
                    <Route path="/dashboard/notificacoes" element={<Notificacoes/>}/>
                    <Route path="/dashboard/perfil-empresa" element={<PerfilEmpresa/>}/>
                    <Route path="/dashboard/publicarVaga" element={<DashboardPublicarVaga/>}/>
                    <Route path="/dashboard/editarVaga/:id" element={<DashboardEditarVaga/>}/>
                    <Route path="/dashboard/editarEmpresa" element={<EditarPerfilEmpresa/>}/>
                    <Route path="/dashboard/informacoes-vaga/:id" element={<InformacoesVaga/>}/>
                    <Route path="/dashboard/perfil-candidato/:id" element={<PerfilCandidato/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;