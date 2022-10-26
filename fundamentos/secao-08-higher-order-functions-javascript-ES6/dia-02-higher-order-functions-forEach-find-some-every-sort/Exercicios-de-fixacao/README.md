# Exercícios - Para fixar

## Exercício-1: ForEach.js

- Use o método forEach chamando a callback showEmailList para apresentar os emails
```javascript
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
```

## Exercício-2: find.js

- Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
```javascript
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
};

console.log(findDivisibleBy3And5());
```

- Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
```javascript
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
};

console.log(findNameWithFiveLetters());
```

- Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:
```javascript
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
  // Adicione seu código aqui
};

console.log(findMusic('31031685'));
```

## Exercício-3: some-and-every.js

- Escreva uma função que recebe dois parâmetros: o primeiro um array de nomes e o segundo, um nome qualquer. Essa função deve retornar true se o segundo parâmetro - um nome qualquer - estiver contido no primeiro parâmetro - array de nomes. Caso não esteja contido, deve retornar false.
```javascript
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
};

console.log(hasName(names, 'Ana'));
```

- Escreva uma função, que dado um array de pessoas e uma idade mínima, retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false. Use every;
```javascript
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
};

console.log(verifyAges(people, 18));
```

## Exercício-4: sort.js
- Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.
```javascript
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui

console.log(people);
```
