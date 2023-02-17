# Boas vindas ao exercício Applicant Manager

Você precisa dar manutenção em uma aplicação de gestão de Pessoas Candidatas em um processo seletivo. Nessa aplicação você é responsável por refatorar essa aplicação para deixar o código mais limpo e legível. Use hooks customizados para isso! 

---

# Exercícios

A lógica que você vai usar já está implementada no arquivo `src/App.js`, você deverá se basear nesse código para criar os hooks customizados

### 1. Para consumir nossa API vamos utilizar o hook customizado `useFetch`

<details>
<summary>Siga os passos para criar o Hook Customizado:</summary><br />

> Dica: Lembre-se de olhar a lógica que já está implementada no arquivo `src/App.js` para criar o hook customizado

1. Crie dentro da pasta hooks um arquivo `useFetch.js`. Vamos precisar dos hooks `useEffect` e `useState` para fazer a chamada a API e salvar o seu retorno.

2. O Hook deverá receber como parâmetro a url para onde iremos fazer a requisição.

3. Crie três estados:

   - um estado de carregando, para aguardar enquanto a requisição está sendo feita
   - um estado para salvar o retorno da API
   - e outro estado para caso haja algum error na requisição

4. Crie uma função para fazer o `fetch` da url recebida como parâmetro, utilize o `useEffect` para chamar essa função e faça o tratamento de erro.

5. Retorne um objeto contento os três estados criados e a função que chama o `fetch()`.

Pronto o seu Hook Customizado está feito, agora utilize ele no `App.js` recebendo como parâmetro a url que gera pessoas aleatórias da api [Random User](https://randomuser.me/).

> Atenção: lembre-se de refatorar o código implementado em `App.js` para que sua aplicação continue funcionando corretamente.

</details>

## Bônus

### 2. Para salvar a lista de pessoas aprovadas e reprovadas vamos utilizar o hook customizado `useLocalStorage`

<details>
<summary>Crie um hook <code>useLocalStorage</code> para salvar cada uma das listas</summary><br />

Nossa aplicação renderiza pessoas aleatórias, onde é possível adiciona-las a lista de aprovadas ou reprovadas. Porém, os códigos estão duplicados e você deverá criar um hook customizado para eliminar essas duplicidades.

> Dica: Lembre-se de olhar a lógica que já está implementada no arquivo `src/App.js` para criar o hook customizado

1. Crie o hook customizado `useLocalStorage` dentro da pasta hooks.
2. Esse hook deverá receber como parâmetro a chave do item que será salvo no localStorage e o valor inicial desse item.
3. O hook deverá possuir:

   - um estado para salvar o valor do item (inicialmente deve ser ou o valor salvo no localStorage ou o valor inicial passado como parâmetro)
   - uma função para atualizar o valor do estado e salvar no localStorage
   - uma função para remover a chave do localStorage e resetar o estado para o valor inicial

4. Retorne um array com o valor do estado e as duas funções criadas.s

> Atenção: lembre-se de refatorar o código implementado em `App.js` para que sua aplicação continue funcionando corretamente.

</details>
