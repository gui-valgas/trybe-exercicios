# Exercício - banco de dados SQL

## Exercício 1:
> Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o **MySql Workbench**.

- Ao clicar com o botão direito na tabela e em seguida em `“select rows - limit 200” `  
O limite depende da configuração do _**workbench**_.

<img src="https://content-assets.betrybe.com/prod/Listar%20dados.gif">


## Exercício 2:
>  Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench.
- Na barra lateral esquerda, clicar em _**tables**_ com o botão direito e em seguida clicar em _**Create Table**_

<img src="https://content-assets.betrybe.com/prod/16b6fefa-d113-4647-b272-4e285848ca8b-Criar%20tabela.gif">

## Exercício 3:
> Feito isso, crie uma tabela com as seguintes restrições:
- Nome da tabela: `filme`

Colunas:

- filme_id - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
- descricao - não permite nulos, tipo texto (varchar(100));
- ano_lancamento - não permite nulos, tipo int;
- nota - permite nulos, tipo int;


<img src="https://content-assets.betrybe.com/prod/a3fe5764-cc9c-47c0-a239-6a77225a53e8-Preencher%20tabela.jpeg">

## Exercício 4:  
> Analise a tabela `city` e encontre a tabela à qual a coluna `country_id` faz referência.

- A tabela _**city**_ faz referência à _**tabela**_ `country`

## Exercício 5:
> Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela `city` faz com a tabela `country`?

- _**N:1**_

## Exercício 6:
> Qual tipo de relacionamento a tabela country faz com a tabela city?

- _**1:N**_

## Exercício 7:
> Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.

- store -> staff
- country -> city
- film -> language