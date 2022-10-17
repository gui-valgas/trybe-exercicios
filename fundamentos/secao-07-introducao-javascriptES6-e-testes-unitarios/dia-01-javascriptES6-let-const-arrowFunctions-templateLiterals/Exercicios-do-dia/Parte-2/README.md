# Parte II
## _**Exercício 1**_
Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.

 Crie uma função que receba um número e retorne seu fatorial.

Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
<br>  

Com base nessas informações:

- Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).

- Dentro da função crie uma variável result, que será o retorno final da função.

- Crie a lógica para retornar o fatorial de N!.

- Imprima no terminal “Esse é o fatorial resultado da função“ (Lembre-se de utilizar template literals nesse momento).

- Bônus: tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

## Exercício 2
Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.
- Exemplo:
```javascript
longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
```
## Exercício 3
Crie uma página HTML que possua um contador de cliques.

Além da estrutura básica do HTML, sua página deve possuir:

- Uma tag que receberá o valor atualizado da quantidade de clicks do botão.

- Um botão com o texto click aqui!, que receberá um event listener do tipo click;

Na estrutura do script (dentro do HTML ou em um arquivo de JavaScript ):

- Crie uma variável clickCount que irá acumular o número de clicks do botão;

- Crie a lógica do evento, para que a cada click no botão, a variável seja atualizada com acréscimo de valor 1. Exemplo: Caso não tenha sido realizado nenhum click, o valor renderizado será de 0. Caso o botão seja clicado 5 vezes o valor renderizado no HTML será de 5.

## Exercício 4
Crie duas funções JavaScript com as seguintes especificações:

**Não se esqueça de usar template literals**

- Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

  - O nome da função deverá ser substituaX;
  - A função deverá receber um nome por parâmetro;
  - Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
  - A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
  <br>  

**Exemplo:**

- Parâmetro: ‘Bebeto’
- Retorno: ‘Tryber Bebeto aqui!’


- Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

  - O nome da função deverá ser minhasSkills;
   - A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
- Declare dentro da função uma variável com o nome skills, do tipo const;
  - A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
- Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
  
**Exemplo de retorno:**

Tryber Bebeto aqui!

Minhas três principais habilidades são:

- JavaScript
- HTML
- CSS