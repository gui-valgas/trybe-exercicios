// Escreva uma função que recebe dois parâmetros: o primeiro um array de nomes e o segundo, um nome qualquer. 
// Essa função deve retornar true se o segundo parâmetro - um nome qualquer - estiver contido no primeiro parâmetro - array de nomes.
// Caso não esteja contido, deve retornar false.


const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  const includeName = arr.some((nome) => nome === name)
  return includeName
};

console.log(hasName(names, 'Ana'));

// Escreva uma função, que dado um array de pessoas e uma idade mínima, retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false. Use every;

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  const idades = arr.every((people) => people.age >= minimumAge)
  return idades
};

console.log(verifyAges(people, 18));