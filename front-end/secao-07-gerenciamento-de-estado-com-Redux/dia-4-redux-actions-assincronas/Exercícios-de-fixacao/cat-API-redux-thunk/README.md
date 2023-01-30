# Exercício de fixação - cat-API-redux-thunk

Nesse exercício, você irá implementar uma action assíncrona utilizando o `redux-thunk`.

Seu desafio será implementar a action assíncrona `fetchAPI` e o `Redux Thunk`. Para isso, você precisará implementar os seguintes arquivos:

- `./src/redux/index.js`: Esse arquivo contém a `store` da aplicação. Você precisará implementar o `redux-thunk` aqui.
- `./src/redux/actions/index.js`: Você precisará implementar a action creator assíncrona `fetchAPI`. Essa action assíncrona deverá realizar o `fetch` para o endpoint `https://aws.random.cat/meow`. Além disso, deverá fazer o uso de outras duas actions:
  - `requestAPI`: para informar ao usuário que a informação solicitada está carregando
  - `getPicture`: para salvar no estado global da aplicação a URL da imagem solicitada da API.