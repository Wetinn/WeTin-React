import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from './pages/Home/PagHome';
import Solucao from './pages/Solucao/PagSolucao';
import Login from './pages/Login/PagLogin';
import RecuperarSenha from './pages/RecuperarSenha/recuperarSenha';
import EstamosQuaseLa from './pages/EstamosQuaseLa/estamosQuaseLa';
import CriarSenha from './pages/CriarSenha/criarSenha';
import SelecaoCadastro from './pages/SelecaoCadastro/SelecaoCadastro';
import CadastroRecrutador from './pages/CadastroRecrutador/CadastroRecrutador'

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/solucao" element={<Solucao />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/recuperarSenha" element={<RecuperarSenha />} />
                    <Route path="/estamosQuaseLa" element={<EstamosQuaseLa />} />
                    <Route path="/criarSenha" element={<CriarSenha />} />
                    <Route path="/cadastro" element={<SelecaoCadastro />} />
                    <Route path="/recrutador" element={<CadastroRecrutador />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;