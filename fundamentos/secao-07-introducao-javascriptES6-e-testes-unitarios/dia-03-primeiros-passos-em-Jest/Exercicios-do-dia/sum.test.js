const sum = require('./sum');

describe('Testes do exercício 1:', ()=> {
test('Testa o retorno de 4 + 5 = 9', () => {
  expect(sum(4, 5)).toBe(9)
})

test('Testa o retorno de 0 + 0 = 0', () => {
  expect(sum(0, 0)).toBe(0)
})

test('Testa o retorno de soma de number e string', () => {
  expect(()=>{sum()}).toThrowError();
  expect(()=>{sum()}).toThrowError('parameters must be numbers');
})
})
