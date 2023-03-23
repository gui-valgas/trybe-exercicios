# Resolução dos exercícios propostos no README

## Exercício 1
> Escreva uma query para exibir a string “This is SQL Exercise, Practice and Solution”.

```SQL
SELECT 'This is SQL Exercise, Practice and Solution';
```
![exercise-1.png](images/exercise-1.png)

## Exercício 2
> Escreva uma query para exibir três números em três colunas.

```SQL
SELECT 1, 2, 3;
```
![exercise-2.png](images/exercise-2.png)

## Exercício 3
>Escreva uma query para exibir a soma dos números 10 e 15.

```SQL
SELECT 10 + 15;
```

![exercise-3.png](images/exercise-3.png)

## Exercício 4
> Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.

```SQL
SELECT (10 * 2) + 12;
```

![exercise-4.png](images/exercise-4.png)

## Exercício 5
> Escreva uma query para exibir todas as informações de todos os cientistas.

```SQL
SELECT * FROM Scientists;
```

![exercise-5.png](images/exercise-5.png)

## Exercício 6
> Escreva uma query para exibir o nome como “Nome do Projeto” e as horas como “Tempo de Trabalho” de cada projeto.

```SQL
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;
```

![exercise-6.png](images/exercise-6.png)

## Exercício 7
> Escreva uma query para exibir o nome dos cientistas em ordem alfabética.

```SQL
SELECT Name FROM Scientists
ORDER BY Name ASC;
```

![exercise-7.png](images/exercise-7.png)

## Exercício 8
>  Escreva uma query para exibir o nome dos projetos em ordem alfabética descendente.

```SQL
SELECT Name FROM Projects
ORDER BY Name DESC;
```

![exercise-8.png](images/exercise-8.png)

## Exercício 9
> Escreva uma query que exiba a string “O projeto Name precisou de Hours horas para ser concluído.” para cada projeto.

```SQL
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') as resultado FROM Projects;
```

![exercise-9.png](images/exercise-9.png)

## Exercício 10
> Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.

```SQL
SELECT Name, Hours FROM Projects
ORDER BY Hours DESC LIMIT 3;
```

![exercise-10.png](images/exercise-10.png)

## Exercício 11
> Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.

```SQL
SELECT DISTINCT Project FROM AssignedTo;
```

![exercise-11.png](images/exercise-11.png)

## Exercício 12
> Escreva uma query para exibir o nome do projeto com maior quantidade de horas.

```SQL
SELECT Name FROM Projects
ORDER BY Hours DESC
LIMIT 1;
```

![exercise-12.png](images/exercise-12.png)

## Exercício 13
> Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.

```SQL
SELECT Name FROM Projects
ORDER BY Hours ASC
LIMIT 1
OFFSET 1
```

![exercise-13.png](images/exercise-13.png)

## Exercício 14
> Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.

```SQL
SELECT * FROM Projects
ORDER BY Hours ASC
LIMIT 5;
```

![exercise-14.png](images/exercise-14.png)


## Exercício 15
> Escreva uma query que exiba a string “Existem Number cientistas na tabela Scientists.”, em que Number se refira a quantidade de cientistas.

```SQL
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') as resultado FROM Scientists;
```

- Para não retornar BLOB é necessário clicar com botão direito em cima do `BLOB` ir em 'Open value in viewer' e selecionar a aba `text`

![exercise-15.png](images/exercise-15.png)


