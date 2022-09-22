const custo = 5
const venda = 8
let custoTotal;
let lucroTotal;

if (custo >= 0 && venda >= 0) {
  custoTotal = custo * 1.2;
  lucroTotal = (venda - custoTotal) * 1000
  console.log(lucroTotal)
} else {
  console.log('Erro, valor inválido')
}