// Importando biblioteca express:
const express = require('express');

// Cria variável para instanciar o express:
const app = express();

// Utilizando o express.json para habilitar a possibilidade de recebermos dados pelo corpo (body)
app.use(express.json)

// EXERCÍCIO 4

// Importando módulos fs e path:
const fs = require('fs').promises;
const path = require('path');

// Guardando o caminho do arquivo com os filmes para reutilizá-lo quando necessário
const moviesPath = path.resolve(__dirname, './movies.json');

// Criando função assíncrona para utilizar o módulo fs, utilizando o método readFile para leitura do JSON
const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);

  } catch (error) {
    console.log(`Arquivo não pôde ser lido: ${error}`)
  }
}

/* -----------------------------------------------------------------------------------------------------*/

// EXERCÍCIO BÔNUS
/*É importante que essa rota venha antes das demais que apresentam rotas 
dinâmicas no arquivo app.js para que funcione corretamente.
Por isso, ela será a primeira rota de nosso arquivo. */ 

app.get('/movies/search', async (req, res) => {
  try {
    // Desestrutura o q de req.query e chama a função de leitura do JSON
    const { q } = req.query;
    const allMovies = await readFile();
    
    /* Condiciona para verificar se o q repassado por parâmetro existe.
    Caso exista, filtra a lista com todos os filmes para saber quais deles
    incluem o conteúdo de q.
    Caso haja um q, utilizamos o método status enviando o codigo 200 OK e retornando
    a atividade filtrada pelo movie em formato JSON
    */
    if (q) {
      const filteredMovies = allMovies.filter((element) => element.movie.includes(q));
      return res.status(200).json(filteredMovies)
    }
    // Caso nenhum termo seja passado em q, devolvemos o status 200, mas sem enviar nada
    res.status(200).end()
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

/* -----------------------------------------------------------------------------------------------------*/


// EXERCÍCIO 5

/* 
Primeiro passo:
Utilizando método GET, adiciona rota e callback async como segundo parâmetro
que será responsável por lidar com as requisições e respostas (req, res) do servidor.
dentro da callback chama a função de leitura do JSON criada anteriormente

Segundo passo:
Aplica o método find no array de objetos movies, buscando pelo filme cuja
propriedade id seja igual ao id recebido como parâmetro de rota na requisição,
que capturamos por meio do req.params.id
Lembrar-se de utilizar o Number, visto que recebemos o parâmetro id como string
*/
app.get('/movies/:id', async (req, res) => {
  try {
    // Função de leitura do JSON
    const allMovies = await readFile();
    // find
    const movie = allMovies.find(({ id }) => id === Number(req.params.id));
    // status code de resposta OK
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

/* -----------------------------------------------------------------------------------------------------*/

// EXERCÍCIO 6

// Utiliza o método GET, para listar todos os filmes
app.get('/movies', async (req, res) => {
  try {
    const allMovies = await readFile();
    res.status(200).json(allMovies);
    
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

/* -----------------------------------------------------------------------------------------------------*/


// EXERCÍCIO 7

// Utiliza o método POST, 
app.post('/movies', async (req, res) => {
  try {
    // desestrutura as informações necessárias (movie, price) do corpo da requisição
    const { movie, price } = req.body;
    // chama função de leitura do JSON
    const allMovies = await readFile();

    // Cria objeto contendo as informações do corpo da requisição adicionando uma chave id
    const newMovie = {
      id: allMovies[allMovies.length - 1].id + 1, // cria id a partir do ultimo index
      movie,
      price,
    };

    /* Cria variável que ira guardar a lista completa de filmes, com os filmes
    ja existentes mais o novo filme que esta sendo cadastrado, fazendo a conversão
    (parse) dessas informações de JavaScript para um string JSON (JSON.stringify)
    */
    const movies = JSON.stringify([ ...allMovies, newMovie]);

    // Escreve no arquivo de filmes utilizando o modulo fs
    await fs.writeFile(moviesPath, movies);

    // Status code 201: created
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

/* -----------------------------------------------------------------------------------------------------*/

// EXERCICIO 8

app.put('./movies/:id', async (req, res) => {
  try {
    // desestrutura id do parâmetro
    const { id } = req.params;
    // desestrutura movie e price do corpo da requisição
    const { movie, price } = req.body;
    // função de leitura do JSON
    const allMovies = await readFile();

    // Localiza o index correspondente ao id do parâmetro da requisição
    const index = allMovies.findIndex((mov) => mov.id === Number(id));

    // Altera o valor do elemento pelo que foi fornecido pelo corpo da requisição
    allMovies[index] = { 
      id: Number(id),
      movie,
      price
    };

    /* Fazendo o parse das informações para string JSON e escrevendo no arquivo movies.json
    - Os dois ultimos parâmetros do stringify são opcionais 
    e tem por objetivo melhorar a formatação do arquivo JSON
    */ 
    const updateMovies = JSON.stringify(allMovies, null, 2);
    await fs.writeFile(moviesPath, updateMovies);
    res.status(200).json(allMovies[index]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
})
/* -----------------------------------------------------------------------------------------------------*/

// EXERCÍCIO 9

app.delete('/movies/:id', async (req, res) => {
  try {
    // desestrutura id do parâmetro da requisição
    const { id } = req.params;
    // função de leitura do JSON
    const allMovies = await readFile();

    // Filtra o array pelos objetos que NÃO possuem o mesmo id que o fornecido no parâmetro da requisição
    const filteredMovies = allMovies.filter((movie) => movie.id !== Number(id));

    // Com array filtrado, escrevemos no arquivo movies.json utilizando modulo fs
    // Parâmetro adicionais no strinfigy opcionais apenas para formatação
    const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);

    // Retornado status 204: no content
    res.status(204).end();
  } catch (error) {
    res.status(500).send({ message: error.message });  
  }
})

/* -----------------------------------------------------------------------------------------------------*/


// Exporta variável:
module.exports = app;