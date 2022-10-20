const { encode, decode } = require('./encodeDecode.js')

describe('teste da função encode e decode', () => {
  test('verifica se encode e decode são funções', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  })
  test('verifica se na função encode a,e,i,o,u são convertidas em 1, 2, 3, 4, 5 e na função decode 1, 2, 3, 4, 5 em a, e, i, o, u', () => {
    expect(encode('aurelio')).toEqual('15r2l34')
    expect(decode('15r2l34')).toEqual('aurelio')
  })
  test('verifica o retorno do mesmo número de caracteres no retorno da função', () => {
    expect(encode('aurelio').length).toEqual(7);
    expect(decode('15r2l34').length).toEqual
  })
})