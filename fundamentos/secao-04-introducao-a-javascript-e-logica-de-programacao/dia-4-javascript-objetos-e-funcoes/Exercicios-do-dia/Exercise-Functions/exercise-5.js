function inteiros(numeros) {

let numRepetido = 0;
let contadorRepetidos = 0;
let indexNum = 0;

for (let index in numeros) {
    let verificaNumero = numeros[index]
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contadorRepetidos += 1
      }
    }

    if (contadorRepetidos > numRepetido) {
      numRepetido = contadorRepetidos
      indexNum = index
    }
    contadorRepetidos = 0
  }


  return numeros[indexNum]
}

console.log(inteiros([2, 3, 2, 5, 8, 2, 3])); 