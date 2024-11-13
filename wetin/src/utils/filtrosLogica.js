const separarFiltros = (filtrosSemFormatacao) => {  
    return transformarFiltros(filtrosSemFormatacao)
}

const filtrosLogica = { separarFiltros };

export default filtrosLogica;

const transformarFiltros = (filtros) => {
  // Passo 1: Transformar objetos com `tipo` e `valor` para o novo formato
  const filtrosTransformados = filtros.map((filtro) => {
    if (filtro.tipo && filtro.valor) {
      return {
        id: null, // ID temporário, será ajustado no final
        propriedade: filtro.tipo,
        topico: filtro.valor,
        valor: filtro.valor,
      };
    }
    return { ...filtro, id: null }; // Definindo o ID como null temporariamente
  });

  // Passo 2: Remover duplicatas considerando `propriedade`, `topico` e `valor`
  const filtrosUnicos = [];
  const seen = new Set();
  for (const filtro of filtrosTransformados) {
    const uniqueKey = `${filtro.propriedade}-${filtro.topico}-${filtro.valor}`;
    if (!seen.has(uniqueKey)) {
      seen.add(uniqueKey);
      filtrosUnicos.push(filtro);
    }
  }

  // Passo 3: Agrupar objetos por `propriedade`
  const filtrosAgrupados = {};
  for (const filtro of filtrosUnicos) {
    if (!filtrosAgrupados[filtro.propriedade]) {
      filtrosAgrupados[filtro.propriedade] = [];
    }
    filtrosAgrupados[filtro.propriedade].push(filtro);
  }

  // Converte o objeto de grupos em um array de arrays
  const agrupadosArray = Object.values(filtrosAgrupados);

  // Passo 4: Atribuir IDs sequenciais começando de 1
  let idCounter = 1;
  agrupadosArray.forEach(grupo => {
    grupo.forEach(filtro => {
      filtro.id = idCounter++;
    });
  });

  return agrupadosArray;
};
