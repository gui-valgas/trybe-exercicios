//Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens;
//faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.

const specialFruit = ['maça', 'banana', 'uva'];


const additionalItens = ['abacaxi', 'laranja', 'pera'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));