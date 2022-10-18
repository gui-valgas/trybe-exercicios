const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
  let arrayCrescente = [];
  for (let index1 = 1; index1 < array.length; index1 += 1) {
    for (let index2 = 0; index2 < index1; index2 += 1) {
      if (array[index1] < array[index2]) {
        let ordernados = array[index1];
        array[index1] = array[index2];
        array[index2] = ordernados;

      }
    }
  }
  return array;
}
console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`);


// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortArrayBonus = (array) => {
//   const sortOddsAndEvens = array.sort((a, b) => a - b);
//   return sortOddsAndEvens;
// };

// const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
// console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);