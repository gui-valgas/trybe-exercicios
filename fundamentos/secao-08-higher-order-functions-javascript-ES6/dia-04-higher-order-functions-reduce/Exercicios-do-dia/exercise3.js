const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA(array) {
  let total = 0;

  array.forEach((element) => {
    const nomeSplit = element.split('');
    total += nomeSplit.reduce((acc, curr) => curr === 'a' || curr === 'A' ? acc + 1 : acc, 0);
  })
  return total
}
console.log(containsA(names));
