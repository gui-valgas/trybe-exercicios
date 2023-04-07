# Exercícios - dia 1 - seção 4

## Exercício 1
> Crie um código para calcular o índice de massa corporal(IMC) de uma pessoa.

- Armazene o código no arquivo bmi.js.

- A fórmula para calcular o IMC é: <br>
<img src="https://content-assets.betrybe.com/prod/56b1963d-d603-422d-a103-5305ed3a3aba-F%C3%B3rmula%20do%20IMC.png">

## Exercício 2
> Agora, permita que o código seja executado através do comando npm run bmi.

- O novo código criado deve conter o comando que chama o node para executar o arquivo bmi.js.

## Exercício 3
> Chegou a hora de tornar nosso código mais interativo! Vamos adicionar inputs de entrada para quem usar.

- Edite o código para que os valores de weight e height sejam informados pela pessoa ao responder as perguntas: “What’s your weight?” e “What’s your height?”. Deve-se utilizar o pacote readline-sync.

## Exercício 4
> Agora temos um problema, o peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.

- O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre a função adequada para realizar input de valores float.
- Encontrou a função? Show! Agora utilize-a para solicitar o input de weight.

## Exercício 5
> Vamos sofisticar um pouco mais nosso exercício. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:

- Abaixo de 18,5 Abaixo do peso (magreza)
- Entre 18,5 e 24,9	Peso normal
- Entre 25,0 e 29,9	Acima do peso (sobrepeso)
- Entre 30,0 e 34,9	Obesidade grau I
- Entre 35,0 e 39,9	Obesidade grau II
- 40,0 e acima	Obesidade graus III e IV