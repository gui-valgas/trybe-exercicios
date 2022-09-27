function menorIndex (array) {
  let menorIndice = 0;

  for (let index in array) {
    if (array[menorIndice] > array[index]) {
      menorIndice = index;
    }
  }
  return menorIndice;
}
let arrayTeste = [2, 4, 6, 7, 10, 0, -3]
console.log(menorIndex(arrayTeste))