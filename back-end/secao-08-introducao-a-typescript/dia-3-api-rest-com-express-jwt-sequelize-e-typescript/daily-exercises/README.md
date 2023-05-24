# Boas-vindas ao repositório de exercícios Trybe Travel

Nesse exercício, vamos criar uma API que gerencie o sistema de uma empresa de turismo. Ela oferece diferentes pacotes de viagem para diferentes destinos. Vamos lá?

## Exercícios

### 🚀 Exercício 1

Note que as _migrations_ e _seeders_ já estão criadas e funcionando! Dito isso, crie um _model_ para a tabela de pessoas usuárias, da tabela `users`.

**Atenção ⚠️**: Para que o avaliador funcione corretamente, você deve se atentar para algumas especificações:

- O _model_ deve ser criado no diretório `src/database/models`;
- O arquivo deve se chamar **User.model.ts**;
- O _model_ deve ser definido como `UserModel`;
- O _model_ deve ser exportado como `default`;

É esperado que o _model_ contenha os seguintes campos:

- `email`; deve ser do tipo `STRING`;
- `password`; deve ser do tipo `STRING`;

Além disso, é importante que o modelo obedeça a mais duas regras:

- Deve apontar para a tabela `users`.
- Deve informar ao Sequelize que o modelo não possui as colunas de _timestamps_.

O avaliador consultará os dados da tabela _users_, verificando se ela contém os dados iniciais corretos.

### 🚀 Exercício 2

Note que as _migrations_ e _seeders_ já estão criadas e funcionando! Dito isso, crie um _model_ para a tabela de pacotes turísticos, da tabela `packages`.

**Atenção ⚠️**: Para que o avaliador funcione corretamente, você deve se atentar a algumas especificações:

- O _model_ deve ser criado no diretório `src/database/models`;
- O arquivo deve se chamar **Package.model.ts**;
- O _model_ deve ser definido como `PackageModel`;
- O _model_ deve ser exportado como `default`;

É esperado que o _model_ contenha os seguintes campos:

- `destination`; deve ser do tipo `STRING`;
- `category`; deve ser do tipo `STRING`;
- `price`; deve ser do tipo `DECIMAL`;

Além disso, é importante que o modelo obedeça a mais duas regras:

- Deve apontar para a tabela `packages`.
- Deve informar ao Sequelize que o modelo não possui as colunas de _timestamps_.

O avaliador consultará os dados da tabela _packages_, verificando se ela contém os dados iniciais corretos.

> **Observação 🔎**: O campo `destination` se refere ao destino da viagem, enquanto o campo `category` se refere à categoria de pacote (_basic_, _classic_ ou _premium_).

### 🚀 Exercício 3

Crie um _endpoint_ que atualize os dados de um pacote de viagem. Sua requisição deve retornar o _status_ adequado e os dados do objeto criado.

- O _endpoint_ deve ser do tipo `PATCH` e estar acessível no caminho `/packages/:id`;
- Apenas o pacote com o _id_ presente na URL deve ser atualizado;
- O corpo da requisição deverá seguir o formato abaixo:

```json
{
  "destination": "Natal",
  "category": "premium",
  "price": 900.0
}
```

- Caso o _id_ não exista, o retorno deve exibir um _status 404_ com a mensagem:

```ts
{
  message: "Pacote não encontrado!";
}
```

- Em caso de sucesso, o retorno deve ser um _status 200_ com a mensagem:

```ts
{
  "id": 1
  "destination": "Natal",
  "category": "premium",
  "price": 900.0
}
```

> **De olho na dica 👀**: Para resolver esse exercício, pesquise e descubra como usar a função `update` do Sequelize com TypeScript. Saiba, de antemão, que ela, por uma incompatibilidade com o MySQL, não irá validar a existência do dado a atualizar nem retorná-los atualizados. Você deverá fazer isso manualmente, no serviço, com outras funções do _model_.

> **De olho na dica 👀**: _"package"_ (com letra inicial minúscula) é uma palavra reservada. Se atente a isso para evitar problemas!

### 🚀 Exercício 4

Crie um _endpoint_ que remova um pacote de viagem, a partir de seu _id_.

- O _endpoint_ deve ser do tipo `DELETE` e estar acessível no caminho `/packages/:id`;
- Apenas o pacote com o _id_ presente na URL deve ser deletado;
- Caso o _id_ não exista, o retorno deve exibir um _status 404_ com a mensagem:

```ts
{
  message: "Pacote não encontrado!";
}
```

- Se o produto for deletado com sucesso, nenhuma resposta deve ser retornada, apenas um _status HTTP 204_.

> **De olho na dica 👀**: Para resolver esse exercício, você também precisará pesquisar e descobrir como usar a função `destroy` do Sequelize com TypeScript. Ela funciona de forma similar à `update`, do exercício anterior. Você deverá validar a existência da entidade a deletar antes de deletá-la.