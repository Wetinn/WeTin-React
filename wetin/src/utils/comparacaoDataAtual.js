export default function comparacaoDataAtual(dataExpiracao) {
  const partes = dataExpiracao.split('/');
  if (partes.length !== 3) {
    return false; 
  }

  const dia = parseInt(partes[0], 10);
  const mes = parseInt(partes[1], 10) - 1; 
  const ano = parseInt(partes[2], 10);

  const dataInserida = new Date(ano, mes, dia);

  if (
    dataInserida.getDate() !== dia ||
    dataInserida.getMonth() !== mes ||
    dataInserida.getFullYear() !== ano
  ) {
    return false; 
  }

  const dataAtual = new Date();
  dataAtual.setHours(0, 0, 0, 0);

  return dataInserida > dataAtual;
}