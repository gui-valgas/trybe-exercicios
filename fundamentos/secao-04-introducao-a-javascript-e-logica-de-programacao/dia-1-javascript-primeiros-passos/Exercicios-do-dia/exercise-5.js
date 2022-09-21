const a = 35;
const b = 65;
const c = 25;
const somaDosAngulos = a + b + c;
let angulosPositivos;



  if (somaDosAngulos === 180) {
    console.log(true);
  } else if(a < 0 || b < 0 || c < 0) {
    angulosPositivos = false;
    console.log('Erro!');
  } else {
    console.log(false);
  }