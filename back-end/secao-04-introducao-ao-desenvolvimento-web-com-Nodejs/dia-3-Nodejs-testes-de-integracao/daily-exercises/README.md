# Exercícios - Testes de Integração

Clientes da nossa API Cacau Trybe querem mais informações sobre os chocolates e cabe à você como pessoa desenvolvedora de back-end, criar mais três endpoints, para isso, utilize a técnica de TDD!

GET `/chocolates/total` : **Quantidade total de chocolates**

- Esse endpoint deve retornar a quantidade de tipos de chocolates que existem na base de dados, usando o seguinte contrato:  

GET `/chocolates/total`

Objetivo: Retornar a quantidade de tipos de chocolates que existem.
Código HTTP: `200 - OK`;
Body (exemplo):
```json
{
  "totalChocolates": 4 // quantidade de chocolates na base de dados
}
```

## Exercício 1
> Crie os testes de integração para o endpoint GET `/chocolates/total`

- Crie um caso para o código retornado
- Crie outro caso para o retorno esperado

## Exercício 2
> Implemente o endpoint GET `/chocolates/total` na aplicação

- Crie um novo endpoint retornando o total de chocolates na base de dados
- Depois de implementar, verifique se os testes passam com sucesso

## Exercício Bônus

GET `/chocolates/search` : **Pesquisa de chocolates por nome**

- Esse endpoint deve retornar os chocolates que contém uma determinada palavra em seu nome, usando o seguinte contrato:  

GET `/chocolates/search?name=Mo`

- Objetivo: Retornar os chocolates que contém o termo pesquisado;
- Parâmetros de consulta (query params): `name`, tipo string;
- Código HTTP: `200 - OK`;
- Body (exemplo):

```json
[
  {
    "id": 3,
    "name": "Mon Chéri",
    "brandId": 2
  },
  {
    "id": 4,
    "name": "Mounds",
    "brandId": 3
  }
]
```

- Caso não haja chocolates com a string passada, retorne um array vazio e status 404:

GET `/chocolates/search?name=ZZZ`

- Objetivo: Retornar um array vazio quando não há chocolates que contenham o termo pesquisado;
- Parâmetros de consulta (query params): `name`, tipo string;
- Código HTTP: `404 - Not Found`;
- Body (exemplo):
```json
[]
```

## Exercício 3
> Crie os testes de integração para o endpoint GET `/chocolates/search`

- Crie um caso verificando o código e o retorno esperado para quando existirem chocolates com o nome informado;
- Crie um caso para quando não existirem chocolates com o nome informado;
- Verifique se os testes falham com sucesso.

## Exercício 4
Implemente o endpoint GET /chocolates/search na aplicação

- Crie um novo endpoint retornando os chocolates que tem a string `name` na base de dados;
- Depois de implementar, verifique se os testes passam com sucesso.

PUT `/chocolates/:id` : **Atualiza um chocolate**

- Esse endpoint deve atualizar um chocolate que existe na base de dados, usando o seguinte contrato:

PUT `/chocolates/1`

- Objetivo: Atualizar um chocolate que existe na base de dados.
- Body da requisição (exemplo):

```json
{ 
  "name": "Mint Pretty Good",
  "brandId": 2
}
```

- Código HTTP: `200 - OK`;
- Body da resposta (exemplo):
```json
{
  "chocolate": { 
    "id": 1,
    "name": "Mint Pretty Good",
    "brandId": 2
  }
}
```

- Caso não haja um chocolate com a `id` passada, retorne uma mensagem de erro com status 404:

PUT `/chocolates/555`

- Objetivo: Retornar uma mensagem de erro quando não há um chocolate com a `id` passada.
- Body da requisição (exemplo):
```json
{ 
  "name": "Mint Pretty Good",
  "brandId": 2
}
```

- Código HTTP: `404 - Not Found`
- Body da resposta (exemplo):
```json
{ 
  "message": "chocolate not found"
}
```

## Exercício 5
> Crie os testes de integração para o endpoint PUT `/chocolates/:id`

- Crie um caso verificando o código e o retorno esperado para quando o chocolate é atualizado;
- Crie um caso para quando não existe chocolate com o `id` informado;
- Verifique se os testes falham com sucesso.

## Exercício 6
> Implemente o endpoint PUT /chocolates/:id na aplicação

- Crie um novo endpoint que atualiza um chocolate na base de dados;
- Depois de implementar, verifique se os testes passam com sucesso.
