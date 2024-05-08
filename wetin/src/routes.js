import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from './pages/Home/PagHome';
import Solucao from './pages/Solucao/PagSolucao';
import SelecaoCadastro from './pages/SelecaoCadastro/SelecaoCadastro';
import Beneficios1 from './pages/Beneficios/pagBeneficio1';
import Beneficios2 from './pages/Beneficios/pagBeneficios';
import SobreNos from "./pages/SobreNos/SobreNos";
import Valores from "./pages/SobreNos/Valores/Valores";
import Contato from "./pages/SobreNos/Contato/Contato";
import Depoimento from "./pages/Depoimentos/Depoimento";

//pags de login
import Login from './pages/Login/PagLogin';
import RecuperarSenha from './pages/Login/RecuperarSenha/recuperarSenha';
import EstamosQuaseLa from './pages/Login/EstamosQuaseLa/estamosQuaseLa';
import CriarSenha from './pages/Login/CriarSenha/criarSenha';


//pags cadastro recrutador
import CadastroRecrutador from './pages/CadastroRecrutador/CadastroRecrutador'
// import CadastroEndereco from './pages/CadastroRecrutador/CadastroEndereco/CadastroEndereco';
import Descricao from "./pages/CadastroRecrutador/NovoCadastro/CadastroImg";
import Pagamento from "./pages/CadastroRecrutador/Pagamento/pagamento";

//pags cadastro de candidato
import Perfil from "./pages/CadastroCandidato/Perfil/Perfil";
import PerfilEnd from "./pages/CadastroCandidato/Perfil/Perfilpt2";
import Questionario from "./pages/CadastroCandidato/Questionario/questionario";
import Questionario2 from "./pages/CadastroCandidato/Questionario/questionario2";
import Anexo from "./pages/CadastroCandidato/Anexo/anexo";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/solucao" element={<Solucao />} />
                    <Route path="/beneficios" element={<Beneficios1 />} />
                    <Route path="/segundaPartebeneficios" element={<Beneficios2 />} />
                    <Route path="/sobreNos" element={<SobreNos />} />
                    <Route path="/valores" element={<Valores />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/depoimentos" element={<Depoimento />} />
                    
                    <Route path="/login" element={<Login />} />
                    <Route path="/recuperarSenha" element={<RecuperarSenha />} />
                    <Route path="/estamosQuaseLa" element={<EstamosQuaseLa />} />
                    <Route path="/criarSenha" element={<CriarSenha />} />

                    <Route path="/cadastro" element={<SelecaoCadastro />} />

                    <Route path="/recrutador" element={<CadastroRecrutador />} />
                    {/* <Route path="/recrutadorEndereco" element={<CadastroEndereco/>} /> */}
                    <Route path="/recrutadorDescricao" element={<Descricao/>} />
                    <Route path="/recrutadorPagamento" element={<Pagamento/>} />


                    <Route path="/candidato" element={<Perfil/>} />
                    <Route path="/candidatoEndereco" element={<PerfilEnd/>} />
                    <Route path="/candidatoQuestionario" element={<Questionario/>} />
                    <Route path="/candidatoQuestionario2" element={<Questionario2/>} />
                    <Route path="/candidatoAnexo" element={<Anexo/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;