let n = 5;

let resultado = '';

let posicao = n;

for (let index = 0; index < n; index += 1) {
  for (let index2 = 0; index2 < n; index2 += 1) {
     if (index2 < posicao - 1) {
        resultado += ' '
    } else {
        resultado += '*'
    }

    }
  
  console.log(resultado);
  resultado = ''
  posicao -= 1;

}

