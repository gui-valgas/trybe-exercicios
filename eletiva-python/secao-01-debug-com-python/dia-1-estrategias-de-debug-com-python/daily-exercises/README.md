# The Bug Hunting

Neste exercício, você vai praticar os seus conhecimentos em Python e a habilidade de debugar código.

Para isso, você vai receber algumas pequenas aplicações em Python que possuem alguns erros no código que impedem que ele funcione corretamente. Seu trabalho será identificar e corrigir esses erros!

## 1. Identifique e corrija os erros no arquivo `src/word_finder.py`

No arquivo `src/word_finder.py` há um código que deveria retornar uma lista de linhas de um arquivo que contém uma determinada palavra. Porém, há 2 erros no código que impedem que ele funcione corretamente.

Seu objetivo é identificar e corrigir os erros no código.

<details>

<summary> Como o código deveria funcionar </code>
</summary><br/>

A aplicação do arquivo `src/word_finder.py` deve ser executada da seguinte forma:

```bash
python3 src/word_finder.py
```

Ao executar o comando acima, a aplicação deveria retornar uma lista de linhas de um arquivo que contém uma determinada palavra. No código atual, a palavra que está sendo buscada é `python` e o arquivo que está sendo lido é o `data/word_finder.txt`.

Nesse caso, a saída esperada é a seguinte:

```txt
[1, 2, 3, 4, 6, 8]
```

</details>

## 2. Identifique e corrija os erros no arquivo `src/spotify.py`

No arquivo `src/spotify.py` há um código que deveria processar as músicas do arquivo `data/spotify.csv` e retornar a análise solicitada na linha de comando.

Porém, há 2 erros no código que impedem que ele funcione corretamente.

Seu objetivo é identificar e corrigir os erros no código.

<details>

<summary> Como o código deveria funcionar </code>
</summary><br/>

As possíveis análises são:

- `1`: retorna as músicas mais instrumentais;
- `2`: retorna as músicas mais dançantes;
- `3`: retorna as músicas mais enérgicas.

A aplicação do arquivo `src/spotify.py` deve ser executada da seguinte forma:

```bash
python3 src/spotify.py 1
```

Ao executar o comando acima, a aplicação deveria retornar a lista das 10 músicas "mais instrumentais", mas você pode escolher qualquer uma das análises disponíveis (`1`, `2` ou `3`).

No nosso caso, a saída esperada é:

```txt
Top 10 músicas mais instrumentais:
 1 - 'Cornfield Chase' de Hans Zimmer
 2 - 'Day One (Interstellar Theme)' de Hans Zimmer
 3 - 'Chevaliers De Sangreal - From The Da Vinci Code Original Motion Picture Soundtrack' de Hans Zimmer
 4 - 'Experience' de Ludovico Einaudi
 5 - 'The Tree' de Ludovico Einaudi
 6 - 'Temple White' de Ludovico Einaudi
 7 - 'Natural Light' de Ludovico Einaudi
 8 - 'First Step' de Hans Zimmer
 9 - 'Veridis Quo' de Daft Punk
10 - 'Goldberg Variations, BWV 988: Aria' de Johann Sebastian Bach
```

</details>
