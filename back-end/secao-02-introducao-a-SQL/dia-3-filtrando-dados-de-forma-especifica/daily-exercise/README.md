# Exercícios - Filtrando dados de forma específica

- Para realizar as tarefas, restaure o seguinte banco de dados:

```SQL
DROP SCHEMA IF EXISTS store;
CREATE SCHEMA store;
USE store;
CREATE TABLE itens (
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);
CREATE TABLE suppliers (
  id VARCHAR(40) PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);
CREATE TABLE supplies (
  id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  item_id INTEGER,
  FOREIGN KEY (item_id) REFERENCES itens (id),
  supplier_id VARCHAR(40),
  FOREIGN KEY (supplier_id) REFERENCES suppliers (id),
  price INTEGER NOT NULL
);
CREATE TABLE sales (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  supply_id INTEGER,
  quantity INTEGER,
  order_date DATETIME,
  FOREIGN KEY (supply_id) REFERENCES supplies (id)
);
INSERT INTO suppliers(id, name)
  VALUES ('ROB', 'Robauto SA'),
    ('CNF', 'Confiauto LTDA'),
    ('MAP', 'Malok Auto Peças'),
    ('INF', 'Infinity Peças LTDA');
INSERT INTO itens(id, name)
  VALUES (1, 'Rebimboca'),
    (2, 'Parafuseta'),
    (3, 'Grampola'),
    (4, 'Grapeta');
INSERT INTO supplies(item_id, supplier_id, price)
  VALUES (1, 'CNF', 10),
    (1, 'ROB', 15),
    (2, 'CNF', 20),
    (2, 'ROB', 25),
    (2, 'MAP', 14),
    (3, 'INF', 50),
    (3, 'MAP', 45),
    (4, 'CNF', 5),
    (4, 'ROB', 7);
INSERT INTO sales(supply_id, quantity, order_date)
  VALUES (1, 3, '2017-05-22 11:28:36'),
    (2, 2, '2018-03-22 11:35:24'),
    (3, 8, '2018-11-16 15:51:36'),
    (3, 10, '2019-02-13 13:23:22'),
    (8, 5, '2019-06-11 12:22:48'),
    (6, 1, '2019-09-07 09:53:58'),
    (7, 3, '2020-01-05 08:39:33'),
    (9, 5, '2020-05-13 14:05:19');
```

## Exercícios:

1. Vamos lá! Faça uma consulta na tabela item que retorne todos os dados em que a coluna `name` comece com as letras `GR`.

2. Agora, escreva uma query para retornar da tabela supply os dados em que a coluna `item_id` possua o valor `2`. Organize o resultado por ordem alfabética de supplier_id.

3. Em seguida, faça uma consulta para exibir item_id, price e supplier_id de `supply` em que o valor de `supplier_id` tenha a letra `N`.

4. Avante, falta pouco! Escreva uma query para exibir todas as informações de `supplier` que são empresas limitadas (LTDA). Ordene esses resultados em ordem alfabética decrescente.

5. Agora, faça uma consulta para exibir o número de empresas (supplier) que contém a letra `F` no código.

6. Quase lá! Agora escreva uma query para exibir de supply, itens que custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.

7. Ufa! Por fim, faça uma query para exibir o número de vendas (sale) feitas entre os dias `15/04/2018` e `30/07/2019`.