const sum = (...parametros) => parametros.reduce((acc, curr) => acc + curr , 0)

console.log(sum(4,5,6))