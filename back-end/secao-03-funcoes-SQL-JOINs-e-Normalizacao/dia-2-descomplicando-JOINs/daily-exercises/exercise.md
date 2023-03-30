# Resolução dos exercícios propostos no README

## Respostas:

## Exercício 1:
> Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
```SQL
SELECT 
    m.title, bo.domestic_sales, bo.international_sales
FROM
    pixar.movies AS m
        INNER JOIN
    pixar.box_office AS bo ON bo.movie_id = m.id;
```

## Exercício 2:
> Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
```SQL
SELECT 
    m.title,
    b.domestic_sales + b.international_sales AS Vendas
FROM
    pixar.movies AS m
        INNER JOIN
    pixar.box_office AS b ON m.id = b.movie_id
WHERE
    b.domestic_sales < b.international_sales;
```

## Exercício 3:
> Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
```SQL
SELECT 
    m.title, b.rating
FROM
    pixar.movies AS m
        INNER JOIN
    pixar.box_office AS b ON m.id = b.movie_id
ORDER BY b.rating DESC;
```

## Exercício 4:
> Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
```SQL
SELECT 
    T.id,
    T.name,
    T.location,
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM
    pixar.theater AS T
        LEFT JOIN
    pixar.movies AS M ON T.id = M.theater_id
ORDER BY T.name;
```

## Exercício 5:
> Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
```SQL
SELECT 
    T.id,
    T.name,
    T.location,
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM
    pixar.theater AS T
        RIGHT JOIN
    pixar.movies AS M ON T.id = M.theater_id
ORDER BY T.name;
```