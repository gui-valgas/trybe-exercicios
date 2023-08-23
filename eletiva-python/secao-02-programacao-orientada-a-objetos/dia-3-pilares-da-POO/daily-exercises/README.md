# Exercícios: Pilares da POO

## Exercício 1: Implemente a classe com base no diagrama:

<img src="https://content-assets.betrybe.com/prod/a88d931d-f826-492b-a580-b26a6aae69f2-Diagrama%20de%20classes%20da%20TV.png" width=200>

Implemente uma classe que contenha os atributos e os métodos a seguir.

Atributos: 
- `volume` - será inicializado com um valor de 50 e só pode estar entre 0 e 99;
- `canal` - será inicializado com um valor de 1 e só pode estar entre 1 e 99;
- `tamanho` - será inicializado com o valor do parâmetro;
- `ligada`- será inicializado com o valor de `False`, pois está inicialmente desligado.


Todos os atributos devem ser privados.

Métodos:

- `aumentar_volume` - aumenta o volume de 1 em 1 até o máximo de 99;
- `diminuir_volume` - diminui o volume de 1 em 1 até o mínimo de 0;
- `modificar_canal`  - altera o canal de acordo com o parâmetro recebido e deve lançar uma exceção (`ValueError`) caso o valor esteja fora dos limites;
- `ligar_desligar` - alterna o estado da TV entre ligado e desligado (`True`/`False`).

## Exercício 2: Implemente uma classe `Estatistica`

Ela deve possuir um atributo `numbers` (uma lista de números) com três métodos: um que calcula a média, um que calcula a mediana e outro que calcula a moda de uma lista de números.

<img src="https://content-assets.betrybe.com/prod/9f3d4b0b-258e-435e-a9cf-65e7491b2d39-Diagrama%20de%20classes%20da%20Estat%C3%ADstica.png" width=200>

## Exercício 3: Implemente as classes das figuras geométricas

Com base no diagrama a seguir, implemente as classes das figuras geométricas.

<img src="https://content-assets.betrybe.com/prod/a1d519fc-ee3d-4db1-b2f3-f127eac1905b-Diagrama%20de%20classes%20das%20figuras%20geom%C3%A9tricas.png" width=400>

Você deverá implementar as seguintes classes:

- `FiguraGeometrica`, uma classe abstrata com os métodos abstratos `area` e `perimetro`.
- `Quadrado`, que herda de `FiguraGeometrica` e adiciona o atributo `lado`.
- `Retangulo`, que herda de `FiguraGeometrica` e adiciona os atributos `base` e `altura`.
- `Circulo`, que herda de `FiguraGeometrica` e adiciona o atributo `raio`.