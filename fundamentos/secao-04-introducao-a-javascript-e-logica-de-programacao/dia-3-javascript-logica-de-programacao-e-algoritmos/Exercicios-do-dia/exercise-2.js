let word = 'JavaScript';
let palavraAoContrario = ''
for (let index = word.length - 1; index >= 0; index -= 1) {
  palavraAoContrario += word[index]
}

console.log(palavraAoContrario)