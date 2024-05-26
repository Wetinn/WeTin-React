import React, {useState} from "react";
import NotificationIcon from "../../components/Icon/NotificationIcon/NotificationIcon"
import notificationIcon from "../../utils/assets/icons/NotificationIcon.png"


export default function Teste() {

    // HIPÓTESES DE USO DESSES FILTROS
    // getCandidatos vai ser chamado quando o usuário entra na página para procurar os canididatos davaga
    // Enviamos a função para o componente Filters para que quando for modificado o filtro ele possa chamar essa função novamente
    // Essa função vai receber os filtros e vai fazer a chamada de acordo com os filtros selecionados
    // getCandidatos alimenta a variável que vai mostrar os cards
    // Funciona para qualquer tipo de lista?

    const getCandidatos = (variables) => {
        //Faz a requisição para o backend
    }
   
    return (
        <>
        <NotificationIcon src={notificationIcon} alt="Notification"/>
        </>
    );
}