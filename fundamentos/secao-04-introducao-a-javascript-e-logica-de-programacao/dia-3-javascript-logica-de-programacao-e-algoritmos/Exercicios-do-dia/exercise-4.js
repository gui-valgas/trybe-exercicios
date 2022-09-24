let maiorPrimo = 0;
let ePrimo = true;

for (let index = 2; index <= 50; index += 1) {
  ePrimo = true;
  for (let index2 = 2; index2 < index; index2 += 1) {
    if (index % index2 === 0) {
      ePrimo = false;
    }
  }

  if (ePrimo === true) {
    maiorPrimo = index;
  }
}

console.log(maiorPrimo);