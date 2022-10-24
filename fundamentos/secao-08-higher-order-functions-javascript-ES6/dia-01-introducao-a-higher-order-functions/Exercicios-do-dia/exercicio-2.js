const CheckaResultado = (num, numeroSorteado) => {
  if (num === numeroSorteado) {
    return 'Parabéns você ganhou'
  } else {
    return 'Tente novamente'
  }
}
const loteria = (num, callback) => {
  const numeroSorteado = Math.floor(Math.random() * 5) + 1
  return callback(num, numeroSorteado)
}
console.log(loteria(5, CheckaResultado));

