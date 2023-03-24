# Resolução dos exercícios Bônus propostos no README.md

# Exercício 1
> Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.

```SQL
USE Scientists;
SELECT * FROM Scientists
WHERE Name LIKE "%e%";
```

# Exercício 2
> Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A . Ordene o resultado em ordem alfabética.

```SQL
USE Scientists;
SELECT Name FROM Projects
WHERE Code LIKE "A%" ORDER BY Name;
```

# Exercício 3
> Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3. Ordene o resultado em ordem alfabética.

```SQL
USE Scientists;
SELECT Code, Name FROM Projects
WHERE Code LIKE "%3%" ORDER BY Name;
```

# Exercício 4
> Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3, Ast3 ou Che1.

```SQL
USE Scientists;
SELECT Scientist FROM AssignedTo
WHERE Project IN('AeH3', 'Ast3', 'Che1');
```
 
# Exercício 5
> Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.

```SQL
USE Scientists;
SELECT * FROM Projects
WHERE Hours > 500;
```
 
# Exercício 6
> Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.

```SQL
USE Scientists;
SELECT * FROM Projects WHERE Hours BETWEEN 250 AND 800;
```

# Exercício 7
> Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letre A .

```SQL
USE Scientists;
SELECT Code, Name FROM Projects
WHERE Name NOT LIKE 'A%';
```

# Exercício 8
> Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H.

```SQL
USE Scientists;
SELECT Name FROM Projects
WHERE Code LIKE '%H%';
```
