# **Exercícios Objetos e For/In**

Usando o objeto abaixo, faça os exercícios a seguir:
```javascript
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
```
### _**Exercise 1**_
 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome;
     - Valor esperado no console: 'Bem-vinda, Margarida'.
### _**Exercise 2**_
 - Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console;
     - Valor esperado no console:
     ```javascript
     {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'Sim'
     };
     ```
### _**Exercise 3**_
 - Faça um for/in que mostre todas as chaves do objeto;
     - Valor esperado no console:
     ```javascript
        'personagem'
        'origem'
        'nota'
        'recorrente'
     ```
### _**Exercise 4**_
 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto;
     - Valor esperado no console:
     ```javascript
        'Margarida'
        'Pato Donald'
        'Namorada do personagem principal nos quadrinhos do Pato Donald'
        'Sim'
     ```
### _**Exercise 5**_
 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
     - Valor esperado no console:
     ```javascript
        "Margarida e Tio Patinhas"
        "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178"
        "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas"
        "Ambos recorrentes" // Atenção para essa última linha!
     ```


## Leitura de Objetos
Usando o objeto abaixo, faça os exercícios a seguir:

```javascript
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
```
## _**Exercise 6**_
- Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.


## _**Exercise 7**_
- Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:

<pre>{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}</pre>






## _**Exercise 8**_
- Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.



