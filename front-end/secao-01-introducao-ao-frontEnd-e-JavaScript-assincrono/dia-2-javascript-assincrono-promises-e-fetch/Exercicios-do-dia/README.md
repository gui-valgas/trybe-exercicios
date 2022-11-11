# Exercício-1: API de Super Heróis
- Vamos criar uma aplicação que busca a imagem e o nome de uma super heroína ou um super herói. Para isso, utilize a SuperHero API.
-  A aplicação deve contar também com um alerta, para o caso da API retornar algum erro.  

## Requisitos:
- Crie um projeto npm do zero.
- Estruture uma página HTML que contenha: um card com a imagem da super heroína ou do super herói e um botão.
- O card deve conter a imagem e o nome da pessoa. Esses dados serão providos pela API (Se liga aí: você pode ler a documentação da API para saber exatamente quais campos você deve utilizar aqui).
- O botão deve gerar um número aleatório, que será o ID utilizado para a API (Se liga aí: você pode simular um erro da API se solicitar um id maior do que a APi pode retornar. Por exemplo: há 500 ids cadastrados e você solicita um número aleatório até 750).
- O botão deve buscar na API pelo ID e renderizar na tela o nome e a imagem da pessoa.
- Caso haja algum erro durante a requisição à API, a aplicação deve emitir um alerta informando o erro ocorrido.

**Exemplo**  

   <img src="https://content-assets.betrybe.com/prod/821e5164-9795-445a-b488-dad3a062fcd2-Anima%C3%A7%C3%A3o%20do%20Exerc%C3%ADcio.gif">


# Exercício-Bonus: Select Pet

- Vamos criar uma aplicação que exibe fotos aleatórias de cães e gatos. Você poderá escolher qual tipo de animal quer ver a imagem, ou pode escolher a opção “Surprise me” e deixar a sorte definir qual pet será exibido.

## Requisitos:
- Crie um novo projeto usando o npm. Instale e configure o vite para usá-lo como web server.
- Crie uma nova página que tenha os seguintes elementos:
  - um botão com o texto Get random dog;
  - um botão com o texto Get random cat;
  - um botão com o texto Surprise me;
- uma imagem que deve ter como texto alternativo Random pet. Essa imagem começará com o atributo src vazio.
- Quando o botão Get random dog for clicado, faça uma requisição para a API https://dog.ceo/api/breeds/image/random. Essa API irá retornar um objeto com a imagem de um cachorro aleatório. Utilize a tag de imagem criada no item 2 para exibir a imagem retornada pela API.
- Quando o botão Get random cat for clicado, faça uma requisição para a API https://aws.random.cat/meow. Essa API irá retornar um objeto com a imagem de um gato aleatório. Utilize a tag de imagem criada no item 2 para exibir a imagem retornada pela API.
- Quando o botão Surprise me for clicado, faça duas requisições: uma para a API de imagens de gatos e outra para API de imagens de cachorros. Exiba somente a imagem da API que retornar primeiro. Ignore o resultado da segunda requisição e também ignore o resultado caso alguma requisição retorne com erro.  

**Exemplo**  


<img src="https://content-assets.betrybe.com/prod/b3a59b0c-5971-41eb-83ae-0961fc771994-Gif%20mostrando%20o%20comportamento%20da%20aplica%C3%A7%C3%A3o.gif">