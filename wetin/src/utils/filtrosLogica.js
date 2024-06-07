const separarFiltros = (filtrosSemFormatacao) => {
    return separarTopicos(filtrosSemFormatacao, 0);
}

const separarTopicos = (filtrosSemFormatacao, index) => {
    var resposta = []
    var topico = []
    var indiceAtual = index
    for(var i = index; i < filtrosSemFormatacao.length; i++){  
        if(i == 0){
            topico.push(filtrosSemFormatacao[0])
        } else if(filtrosSemFormatacao[i].id <= filtrosSemFormatacao[i-1].id){
            indiceAtual = i;
            break;
        } else {
            topico.push(filtrosSemFormatacao[i])
        }
    }
    if(indiceAtual == filtrosSemFormatacao.length - 1){
        resposta.push(topico)
        return resposta;
    } else {
        resposta.push(topico)
        return separarTopicosComResposta(filtrosSemFormatacao, indiceAtual, resposta)
    }
};

const separarTopicosComResposta = (filtrosSemFormatacao, index, resposta) => {
    var topico = []
    var indiceAtual = index
    for(var i = index; i < filtrosSemFormatacao.length; i++){  
        if(i == indiceAtual){
            topico.push(filtrosSemFormatacao[i])
        }else if(filtrosSemFormatacao[i].id < filtrosSemFormatacao[i-1].id){
            indiceAtual = i;
            break;
        } else {
            topico.push(filtrosSemFormatacao[i])
        }

        if(i == filtrosSemFormatacao.length - 1){
            indiceAtual = i;
        }
    }
    if(indiceAtual === filtrosSemFormatacao.length - 1){
        resposta.push(topico)
        return resposta;
    } else {
        resposta.push(topico)
        return separarTopicosComResposta(filtrosSemFormatacao, index, resposta)
    }
};

export default {separarFiltros};