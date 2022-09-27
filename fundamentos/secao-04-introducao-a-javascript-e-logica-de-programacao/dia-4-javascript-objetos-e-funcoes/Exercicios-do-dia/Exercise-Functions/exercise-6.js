function num (numero) {
  let total = 0

  for (let index = 1; index <= numero; index += 1){
    total += index
  }
  return total
}

console.log(num(5))