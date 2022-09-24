let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = '';


for (let index = 0; index < array.length; index += 1) {
  if (maiorPalavra.length < array[index].length) {
    maiorPalavra = array[index];
  } 

}

let menorPalavra = maiorPalavra

for (let index = 0; index < array.length; index += 1) {
  if (menorPalavra.length >= array[index].length) {
    menorPalavra = array[index];
  }

}

console.log(maiorPalavra)
console.log(menorPalavra)