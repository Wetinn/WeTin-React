const geraTag = (tipo, valor) => {
  return {
    tipo,
    valor: valor
  }
}

const selectValueHandler = (valorSelect, opcoes) => 
  (opcoes.find(option => option.valor == valorSelect) || { texto: "" }).texto;

export {
  geraTag,
  selectValueHandler
}