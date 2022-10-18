const longestWord = (string) => {
  let resultado = '';
  let maiorPalavra = 0;
  let arrayPalavra = string.split(' ');

  for (let index = 0; index < arrayPalavra.length; index += 1) {
    if (arrayPalavra[index].length > maiorPalavra) {
      maiorPalavra = arrayPalavra[index].length
      resultado = arrayPalavra[index]
    }
  }
  return resultado
}
const frase = 'Antônio foi ao banheiro e não sabemos o que aconteceu'
console.log(`A maior palavra da frase é: ${longestWord(frase)}`)


//Utilizando sort
// const longestWord = (string) => string.split(' ').sort((palavra1, palavra2) => palavra2.length - palavra1.length)[0]

// console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'))


