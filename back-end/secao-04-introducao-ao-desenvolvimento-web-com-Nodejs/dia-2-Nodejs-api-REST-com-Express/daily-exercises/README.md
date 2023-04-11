# Exercícios - API REST com Express

## Exercício 1
> Qual é a função do código de status `400` e `422`?
- A função do _status code_ **400** indica _bad request_, devido a sintaxe inválida
- A função do _status code_ **422** indica que o servidor entende o tipo de conteúdo da entidade da requisição, e a sintaxe da requisição esta correta, mas não foi possível processar as instruções presentes.

## Exercício 2
> Qual é a função do código de status 401?
- A função do _status code_ **401** indica que a solicitação não foi aplicada porque possui credenciais de autenticação válidas para o recurso de destino
---

- Crie o diretório `src` e dentro dele um arquivo `movies.json` com o os filmes da nossa locadora:

```javascript
[
  {
    "id": 1,
    "movie": "Avatar",
    "price": 5
  },
   {
    "id": 2,
    "movie": "Gente Grande",
    "price": 2
  },
  {
    "id": 3,
    "movie": "O Jogo",
    "price": 3
  },
  {
    "id": 4,
    "movie": "Quebrando a Banca",
    "price": 5
  },
  {
    "id": 5,
    "movie": "Lilo & Stitch",
    "price": 2
  },
  {
    "id": 6,
    "movie": "Os Fantasmas se Divertem",
    "price": 2
  },
  {
    "id": 7,
    "movie": "Meninas Malvadas",
    "price": 3
  }
]
```
- Faça os exercícios a seguir: <br>

## Exercício 3
> Crie um servidor Node.js utilizando o framework Express.

## Exercício 4
> Crie uma função de leitura do JSON com o modulo fs.

## Exercício 5
> Crie um endpoint do tipo `GET` com a rota `/movies/:id`, que possa listar um filme do JSON por `id`.

## Exercício 6
> Crie um endpoint do tipo `GET` com a rota `/movies`, que possa listar todos os filmes do JSON.

## Exercício 7
> Crie um endpoint do tipo `POST` com a rota `/movies`, para cadastrar um novo filme no JSON.

O corpo da requisição deve receber o seguinte formato:

```javascript
{
  "movie": "Vingadores",
  "price": 5
}
```

## Exercício 8
> Crie um endpoint do tipo `PUT` com a rota `/movies/:id`, que possa editar informações de um filme do JSON.

```javascript
{
  "movie": "Vingadores: Ultimato",
  "price": 5
}
```

## Exercício 9
> Crie um endpoint do tipo DELETE com a rota /movies/:id que possa deletar um filme do JSON.

## Exercício BÔNUS
>Crie um endpoint do tipo `GET` com a rota `/movies/search`, que possa listar todos os filmes do JSON.
- A rota deve receber a informação por `query` e a chave deve-se chamar `q`. A chave vai trazer consigo valor de ‘gente’ por exemplo, e o filtro deve trazer apenas os filmes com esse termo, se não encontrar, traga um array vazio.