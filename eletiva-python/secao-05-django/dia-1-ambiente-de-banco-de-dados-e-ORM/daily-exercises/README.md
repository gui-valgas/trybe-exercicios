# Exercícios: Ambiente de banco de dados e ORM
Execute o seguinte comando na raiz do projeto para instalar as depêndencias da aplicação
```
pip install -r dev-requirements.txt
```

## Exercício 1 - Crie e execute um novo projeto Django
Crie e execute um novo projeto Django chamado `Schedule`.

## Exercício 2 - Altere o banco de dados para MySQL
Atente-se aos seguintes pontos:

- O banco de dados padrão do projeto deve ser alterado para utilizar MySQL via Docker.
    - o user definido nas configurações deve ser o `root`, a senha deve ser `password` e database deve ser `schedule_database`.
- Faça o build do container Docker com o MySQL, definindo a tag **schedule-db** para ele.
- Crie um script SQL para criar o banco de dados `schedule_database`.
- Execute o container, mapeando a porta 3306 do host para a porta 3306 do container.
- Crie e execute as migrations.

## Exercício 3 - Crie uma nova aplicação
Crie uma nova aplicação chamada `tasks` dentro do projeto Schedule.

Exercício 4 - Crie uma nova tabela no banco de dados
A tabela deve se chamar Task e seus campos devem ser:

- `title`: com o máximo de 200 caracteres.
- `description`: sem limite de caracteres.
- `due_date`: data de vencimento.
- `completed`: booleano que indica se a tarefa foi concluída ou não.
- `priority`: inteiro que indica a prioridade da tarefa, com as opções: **Baixa, Média e Alta**.
- `created_at`: data de criação da tarefa, preenchida automaticamente.

## Exercício 5 - Crie um novo superusuário e faça login no Django Admin
Crie um novo superusuário para o projeto e, com os dados de superuser, faça login no Django Admin.
