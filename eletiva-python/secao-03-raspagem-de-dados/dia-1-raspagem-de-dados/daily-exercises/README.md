# Exercícios: Raspagem de dados

## Exercício 1:
> Faça uma requisição ao site `https://httpbin.org/encoding/utf8` e exiba seu conteúdo de forma legível.

## Exercício 2:
> Faça uma requisição ao recurso usuários da API do Github (`https://api.github.com/users`), exibindo o username e url de todos os usuários retornados.

```py
mojombo https://api.github.com/users/mojombo
defunkt https://api.github.com/users/defunkt
pjhyett https://api.github.com/users/pjhyett
wycats https://api.github.com/users/wycats
...
```

## Exercício 3:
> Às vezes, você precisa fazer com que o seu raspador da Web pareça estar fazendo solicitações HTTP como o navegador, para que o servidor retorne os mesmos dados que você vê no seu navegador. Faça uma requisição a `https://scrapethissite.com/pages/advanced/?gotcha=headers` e verifique se foi bem sucedida.

## Exercício 4:
> Baseando-se em uma página contendo detalhes sobre um livro (`http://books.toscrape.com/catalogue/the-grand-design_405/index.html`), faça a extração dos campos título, preço, descrição e url contendo a imagem de capa do livro.

- O preço deve vir somente valores numéricos e ponto. 
  - Ex: Â£13.76 -> 13.76. ⚠️ A descrição deve ter o sufixo “more…” removido quando existir. Os campos extraídos devem ser apresentados separados por vírgula. Ex: título,preço,descrição,capa.

## Exercício 5:
> Modifique o exercício anterior para retornar também quantos livros estão disponíveis, apresentando como último campo no retorno.

## Exercício 6:
> Escreva um programa que se conecte ao banco de dados `library` e liste os livros da coleção `books` para uma determinada categoria recebida por uma pessoa usuária. Somente o título dos livros deve ser exibido.

## Exercício 7:
Faça o cálculo de quantos livros publicados (`STATUS = PUBLISH`) temos em nosso banco de dados por categoria. Ordene-os de forma decrescente de acordo com a quantidade.

## Exercício 8 (Bônus):
Agora um desafio! Vá ao site `https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags` e recupere as imagens de todas as bandeiras.

## Exercício 9 (Bônus):
Alguns sites possuem paginação feita através de rolagem infinita. Descubra como funciona a rolagem infinita e extraia todas as citações do seguinte site: `http://quotes.toscrape.com/scroll`.

