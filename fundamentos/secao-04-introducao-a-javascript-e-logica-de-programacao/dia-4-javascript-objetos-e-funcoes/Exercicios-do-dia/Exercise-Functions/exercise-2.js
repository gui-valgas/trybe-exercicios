function maiorIndice(array) {
let maiorValor = 0 
let maiorIndice = 0  
 for (let index = 0; index < array.length; index += 1) {
  if (array[index] > maiorValor) {
    maiorValor = array[index];
    maiorIndice = index
    
  }
 }
 return maiorIndice
}


let arrayTeste = [2, 3, 6, 7, 10, 1]
console.log(maiorIndice(arrayTeste))