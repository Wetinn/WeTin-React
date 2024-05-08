import React, { useState } from 'react';
import PaginaPerfil from './PaginaPerfil';
import PaginaEndereco from './PaginaEndereco';
import PaginaPagamento from './PaginaPagamento';

export default function FormularioCadastroRecrutador() {

    const [currentPage, setCurrentPage] = useState(1);

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        cep: '',
        cnpj: '',
    });

    const handleFormChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        // Aqui você pode enviar formData para o backend
        console.log('Dados do formulário:', formData);
    };

    // Função para avançar para a próxima página
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    // Função para voltar para a página anterior
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return <PaginaPerfil formData={formData} onChange={handleFormChange} />;
            case 2:
                return <PaginaEndereco formData={formData} onChange={handleFormChange} />;
            case 3:
                return <PaginaPagamento formData={formData} onChange={handleFormChange} />;
            default:
                return null;
        }
    };

    return (
        <>
            {renderPage()}
        </>
    );

}