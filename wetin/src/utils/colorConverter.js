export default function convertToHexColor(num) {
  // Remove o sinal negativo e garante que o número tenha 32 bits
  const hex = (num >>> 0).toString(16).padStart(8, '0');
  
  // Divide os canais (R, G, B e A)
  const r = hex.slice(0, 2);
  const g = hex.slice(2, 4);
  const b = hex.slice(4, 6);
  const a = hex.slice(6, 8);

  // Retorna no formato #RRGGBBAA
  return `#${r}${g}${b}${a}`;
}