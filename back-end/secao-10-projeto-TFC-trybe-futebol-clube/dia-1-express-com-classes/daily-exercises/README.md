# Exercícios do dia: Express com Classes

Para relização dos exercícios a seguir foi utilizado como base a branch _03-aula-ao-vivo_ do repositório [Trybeteca_API](https://github.com/tryber/trybeteca-api/tree/03-aula-ao-vivo)

## Exercício 1
> Crie a rota de listar livros por autor.

- A requisição deve ser feita através de um `GET` na rota `/books/search`
- A busca deve ser feita através de um query parameter chamado `q`
- A busca deve retornar todos os livros em que o autor contenha o termo inserido
- Caso não seja encontrado nenhum autor, deve ser retornado um status 404 com a mensagem “Author {q} not found”

## Exercício 2
> Crie a rota de adicionar um desconto ao preço do livro.

- A requisição deve ser feita através de um `PATCH` na rota `/books/:id/discount`
- A requisição só pode ser feita com um token válido
- O corpo da requisição deve conter uma chave `discount` com o valor do desconto a ser aplicado
- Caso o livro a ser descontado não seja encontrado, deve ser retornado um status 404 com a mensagem “Book ${id} not found”
- Caso tudo dê certo, a requisição deve responder com a mensagem “Book updated”

## Exercício 3
> Crie testes de integração para as rotas dos exercícios 1 e 2.

Os testes devem validar tanto o caso positivo quanto os diversos casos negativos de cada requisição.

