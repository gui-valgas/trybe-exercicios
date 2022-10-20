const myRemove = require('./myRemove');

describe('Testes do exercício 2', () => {
  test('Teste se retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
  test('teste do caso de não retornar o array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })
})