# Boas-vindas ao repositório de exercícios Trybe Crafts

## O que deverá ser desenvolvido

Suponha que Trybe Crafts seja uma empresa de produtos personalizados que deseja aumentar as vendas de seu e-commerce e que ela tenha contratado você para implementar algumas funções. A Trybe Crafts preza muito pela segurança e qualidade de seus produtos. Por esse motivo, exigiu que você utilizasse tipagens estáticas no código a fim de prevenir bugs e facilitar trabalhos futuros.

# Exercícios

## Exercício 1

Implemente a função `insert` no arquivo `01-insert.ts` e faça a tipagem utilizando `Type Annotation` e considerando que a função deve:

- Receber um parâmetro com o nome do produto do tipo string.
- Retornar um valor do tipo string.
  - Retornar a mensagem: `<productName> adicionado(a) com sucesso!`.

## Exercício 2

Implemente a função `insertProducts` no arquivo `02-insertProducts.ts` e faça a tipagem utilizando `Type Aliases` e considerando que a função deve:

- Receber dois parâmetros – um array de `strings`, que será uma lista de marcas, e um produto, que será um objeto do tipo `Product`, com as propriedades a seguir.

|  Chave   |       Tipo       |
| :------: | :--------------: |
|    id    |      number      |
|   name   |      string      |
|  price   |      number      |
| quantity |      number      |
|  brands  | Array de strings |

> **Atenção ⚠️**: você deve nomear o `Type Alias` como `Product` e exportá-lo separadamente de sua função neste mesmo arquivo para que os testes funcionem.
>
> Exemplo: `export type Product`

- Retornar um valor do tipo string.
- Verificar se as marcas, `brands`, do produto estão no array passado por parâmetro.
  - Se houver, a mensagem retornada deverá ser `<productName> adicionado(a) com o preço de R$ <price>.`. Se o preço for um número decimal, pode ignorar o último zero na mensagem.
  - Se não, a mensagem retornada deverá ser `Seu produto contém marcas indisponíveis.`

## Exercício 3

Implemente a função `findById` no arquivo `03-findById.ts` realizando a tipagem com `Union Type` e considerando que a função deve:

- Receber um parâmetro com o `id` do produto do tipo `number`.
- Retornar um valor do tipo `Product` ou `string`.

  - Caso o `id` seja encontrado no array de produtos, deve ser retornado um valor do tipo `Product` com as informações do produto, conforme apresentado a seguir.

  ```typescript
    {
      id: 2,
      name: 'Caneca',
      price: 19.90,
      quantity: 12
      brands: ['Stanley', 'Camelbak'],
    }
  ```

  - Caso o `id` **não** seja encontrado, deve ser retornado um valor do tipo string com a mensagem `Produto com ID <id> não encontrado.`,  em que `<id>` é o id do produto passado por parâmetro.

> Atenção ⚠️: O array de produtos já está declarado no arquivo `03-findById.ts` como uma constante chamada `products`.

## Exercício 4

Implemente a função `calculateTotalPrice` no arquivo `04-calculateTotalPrice.ts` realizando a tipagem com `Type Aliases` e considerando que a função deve:

- Receber um array de objetos do tipo `Item` como parâmetro. Você deve declará-lo e exportá-lo deste mesmo arquivo para que os testes funcionem. Ele deve ter as seguintes propriedades:

|  Chave   |  Tipo   |
| :------: | :-----: |
| product  | Product |
| quantity | number  |
|  phrase  | string  |
|  brand   | string  |

- Retornar o valor total de todos os itens recebidos como parâmetro.
  - Retornar o tipo `number`, com duas casas decimais.
  - Retornar `0` caso a função receba um array vazio de itens.

> Lembre-se de que o valor total considera o preço e a quantidade de itens.

## Exercício 5

Implemente a função `orderRequest` no arquivo `05-orderRequest.ts` e faça a tipagem utilizando `Type Aliases` e `Union Type` e considerando que a função deve:

- Receber como parâmetro um pedido que será um objeto do tipo `Order`. Você deve declará-lo e exportá-lo deste mesmo arquivo para que os testes funcionem. Ele deve ter as seguintes propriedades:

|     Chave     |              Tipo               |
| :-----------: | :-----------------------------: |
|      id       |             number              |
| customerName  |             string              |
| customerEmail |             string              |
|     items     |         Array de Items          |
|    status     | pendente ou enviado ou entregue |

- Caso algum dos produtos não tenha estoque, deve-se lançar um erro com uma mensagem no formato: `Desculpe, <productName> não está disponível no estoque`. Sendo `<productName>` o nome do primeiro produto da lista que não tem estoque.
  - Caso todos os produtos tenham estoque, a mensagem retornada deve ser: `Olá <customerName>, o seu pedido de ID <id> foi <status>.`. Onde `<customerName>`, `<id>` e `<status>` são informações do pedido passado por parâmetro;
