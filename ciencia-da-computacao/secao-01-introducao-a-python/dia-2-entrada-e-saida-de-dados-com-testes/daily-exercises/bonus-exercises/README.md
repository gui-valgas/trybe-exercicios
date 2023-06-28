# Exercício Bônus

## Exercício 1
Utilizando o arquivo [pokemons.json](https://lms-assets.betrybe.com/lms/pokemons.json?_gl=1*t28nau*_ga*MTU2OTY1NTc3Mi4xNjYyNDgzMjU3*_ga_JRYMZ1LMBF*MTY4Nzk4NDg1NC4zMjAuMS4xNjg3OTg1Njg2LjYwLjAuMA..), vamos escrever um programa que sorteie um pokemon aleatoriamente. O programa deve perguntar à pessoa usuária “Quem é esse pokemon?” até que ela o acerte. A cada erro, apresente um número de letras do nome daquele pokemon igual ao número de erros.

Exemplo: O pokemon sorteado pelo programa é `butterfree`; a pessoa usuária chuta `charizard`; o programa deve exibir `b`. Em seguida, a pessoa chuta `blastoise`; o programa deve exibir `bu`; e assim por diante até a pessoa acertar.

Você pode utilizar o método `choice` do modulo `random` para sortear aleatoriamente um pokemon. Ex: `random.choice(pokemon)` -> `{"name": "Pikachu" }`.

