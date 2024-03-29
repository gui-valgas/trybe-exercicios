# Exercícios: Templates do Django


## Exercício 1 - Começando um novo projeto Django
- Crie um novo projeto Django chamado `restaurant`;
- Crie também uma aplicação chamada `menu`;
- Instale sua aplicação no projeto;
- Crie um exemplo de modelo `Recipe` com os campos `name`, `ingredients`, `instructions`, `created_at`, `updated_at` e `image`, use os campos que mais fizerem sentido para você.

## Exercício 2 - Mostrando o template com todas as receitas
Faça com que seja renderizado na rota `/` um template com informações sobre todas as receitas que foram cadastradas no banco de dados. Use o conceito de herança de templates.

## Exercício 3 - Mostrando os detalhes de uma receita
Faça com que a rota `/recipe/<id>` renderize um template com os dados de uma receita específica de uma maneira dinâmica, de modo que `<id>`, descrito na rota, seja um parâmetro que será passado para o template.

## Exercício 4 - Crie uma view para deletar um registro do banco
Faça com que um registro do banco possa ser deletado a partir do template de detalhamento usando a rota `/recipe/id/delete`, de modo que `id`, descrito na rota, seja um parâmetro que será passado para o template.