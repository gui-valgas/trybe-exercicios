const myFizzBuzz = require('./myFizzBuzz');

describe('Testes da função myFizzBuzz', () => {
  test('verifica retorno da função com número divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  test('verifica retorno da função com número divisível por 3', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  })
  test('verifica retorno da função com número divisível por 5', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  })
  test('verifica retorno da função com número não divisível por 3 ou 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz')
  })
  test('verifica retorno da função com parâmetro que não seja um numero', () => {
    expect(myFizzBuzz('5')).toBeFalsy()
  })
})