# Resolução dos exercícios propostos no README.md

## Exercício 1
> Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.

```SQL
SELECT Piece, Price FROM PiecesProviders.Provides
WHERE Provider = 'RBT';
```

![bonus-exercise-1.png](images/bonus-exercise-1.png)

## Exercício 2
> Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.

```SQL
SELECT Piece, Price FROM PiecesProviders.Provides
ORDER BY Price DESC
LIMIT 5;
```

![bonus-exercise-2.png](images/bonus-exercise-2.png)


## Exercício 3
> Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.

```SQL
SELECT DISTINCT Provider, Price FROM PiecesProviders.Provides
ORDER BY Price DESC
LIMIT 4 OFFSET 2;
```

![bonus-exercise-3.png](images/bonus-exercise-3.png)


## Exercício 4
> Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.

```SQL
SELECT * FROM PiecesProviders.Provides
WHERE Provider = 'HAL' 
ORDER BY Price DESC;
```

![bonus-exercise-4.png](images/bonus-exercise-4.png)

## Exercício 5
> Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.

```SQL
SELECT COUNT(Provider) FROM PiecesProviders.Provides
WHERE Piece = 1;
```

![bonus-exercise-5.png](images/bonus-exercise-5.png)
