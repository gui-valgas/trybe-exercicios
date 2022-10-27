# Exercícios
- Todos os exercícios devem ser realizados utilizando reduce, e se necessário outra HOF, a informação será citada no enunciado.

## _**exercise1.js**_
- Utilize o reduce para transformar uma matriz em um array.
```javascript
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
}
```
## _**exercise2.js**_
- Considere o seguinte array e manipule-o utilizando reduce para fazer o que é pedido
```javascript
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
```
- Crie uma string com os nomes de todas as pessoas autoras.
```javascript
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
}
```

- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
```javascript
const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
}
```

- Encontre o livro com o maior nome.
```javascript

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  // escreva seu código aqui
}
```

## _**exercise3.js**_

- Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.
```javascript
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA() {
  // escreva seu código aqui
}
```

## _**exercise4.js**_

- Para o próximo exercício você deve criar um novo array de objetos a partir das informações de students e grades, onde cada objeto desse novo array terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de grades refere-se ao estudante na posição 0 de students. Para resolver este exercício, além de reduce, será necessário utilizar também a função map.

```javascript
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
```
