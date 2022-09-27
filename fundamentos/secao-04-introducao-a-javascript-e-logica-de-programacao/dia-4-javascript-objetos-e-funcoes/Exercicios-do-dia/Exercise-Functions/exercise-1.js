function palindromo (palavra) {
  let ePalindromo = true;

  for (let index = 0; index < palavra.length; index += 1) {
    if (palavra[index] !== palavra[(palavra.length - index) - 1]) {
      ePalindromo = false;
    }
  }

  return ePalindromo

}

let palavra = 'omissíssimo' 
console.log(palindromo(palavra))


//Utilizando split, reverse e join:

function palindromo (palavras) {
  let reverse = palavras.split('').reverse().join('');
  if (reverse === palavras) {
    return 'Sim, é palíndromo'
  } else {
    return 'Não é palíndromo'
  }
}

console.log(palindromo('arara'))