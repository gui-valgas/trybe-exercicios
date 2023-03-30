# Resolução do exercício bônus proposto no README

## Resposta:

## Exercício 6
> Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.
```SQL
SELECT 
    M.id,
    M.title,
    M.director,
    M.year,
    M.length_minutes,
    M.theater_id
FROM
    pixar.movies AS M
        INNER JOIN
    pixar.box_office AS B ON M.id = B.movie_id
WHERE
    M.theater_id IS NOT NULL
        AND B.rating > 8;
```