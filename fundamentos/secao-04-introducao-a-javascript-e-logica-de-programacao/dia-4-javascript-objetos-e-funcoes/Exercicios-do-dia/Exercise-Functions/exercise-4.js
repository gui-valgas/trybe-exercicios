function maiorNome (arrayNomes) {
  let letras = arrayNomes[0]
  let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

  for (let index = 0; index < arrayNomes[index].length; index += 1) {
    if (letras.length < arrayNomes[index].length) {
      letras = arrayNomes[index]
    }
  }
  return letras
  
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

