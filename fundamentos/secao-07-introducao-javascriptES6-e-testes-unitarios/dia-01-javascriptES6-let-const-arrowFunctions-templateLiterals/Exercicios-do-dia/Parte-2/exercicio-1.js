const factorial = (numero) => {
  if (numero === 0 || numero === 1) {
    return 1;
  }
  for (let index = numero - 1; index >= 1; index -= 1) {
    numero *= index
  }
  return numero
}
console.log(`Esse é o fatorial: ${factorial(5)}`)

// Outra maneira de resolver:

// const factorial = (numero) => {
//   let result = 1;

//   for (let index = 2; index <= numero; index += 1) {
//     result *= index;
//   }
//   return result
// }
// console.log(`Esse é o fatorial: ${factorial(5)}`);



// Resolvendo de maneira recursiva:

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(5));

