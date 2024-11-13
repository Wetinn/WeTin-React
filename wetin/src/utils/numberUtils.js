function salarioFormatado(valor) {
  return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

function parsePretencaoSalarial(pretencaoSalarial){
  var [minSalario, maxSalario] = pretencaoSalarial.match(/[\d.]+,\d{2}/g);

  var salarioMinimo = parseFloat(minSalario.replace(/\./g, "").replace(",", "."));
  var salarioMaximo = parseFloat(maxSalario.replace(/\./g, "").replace(",", "."));

  return[salarioMinimo, salarioMaximo];
}

export {
  salarioFormatado,
  parsePretencaoSalarial
}