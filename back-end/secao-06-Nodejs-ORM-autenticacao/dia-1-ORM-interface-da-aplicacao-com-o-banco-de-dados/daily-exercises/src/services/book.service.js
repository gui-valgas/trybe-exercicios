const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;


  // BÔNUS 4
  // Refatoração do exercício bonus para trazer lista de livros ordenada:
  // const books = await Book.findAll({
  //   order: [['title', 'ASC']],
  // });
  // return books;
};

const getbyId = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const createBook = async ({ title, author, pageQuantity, publisher }) => {
  const book = await Book.create({ title, author, pageQuantity, publisher });

  return book;
};

const updateBook = async (id, { title, author, pageQuantity, publisher }) => {
  const [updated] = await Book.update(
    {
      title,
      author,
      pageQuantity,
      publisher,
    },
    { where: { id } },
  );

  return updated;
};

const removeBook = async (id) => {
  const removed = await Book.destroy(
    { where: { id } },
  );

  return removed;
};

const getByAuthor = async (author) => {
  const books = await Book.findAll({ where: { author } });
  return books;


  // BÔNUS 4
  // Refatoração do exercício bonus para trazer lista de livros ordenada:
  // const books = await Book.findAll({
  //   where: { author },
  //   order: [['title', 'ASC']],
  // });
  // return books;
};

module.exports = {
  getAll,
  getbyId,
  createBook,
  updateBook,
  removeBook,
  getByAuthor,
};