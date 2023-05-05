const bookService = require('../services/book.service');

const getAll = async (_req, res) => {
  const books = await bookService.getAll();

  if (!books) {
    return res.status(404).json({ message: 'Books not found' });
  }

  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const book = await bookService.getbyId(id);

  if (!book) return res.status(404).json({ message: 'book not found' });

  return res.status(200).json(book);
};

const createBook = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;

  const book = await bookService.createBook({ title, author, pageQuantity, publisher });

  return res.status(201).json(book);
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;

  const updateUser = await bookService.updateBook(id, { title, author, pageQuantity, publisher });

  if (!updateUser) return res.status(404).json({ message: 'Book not found' });

  return res.status(201).json({ message: 'Book updated' });
};

const removeBook = async (req, res) => {
  const { id } = req.params;

  const removed = await bookService.removeBook(id);

  if (!removed) return res.status(404).json({ message: 'Book not found' });

  return res.status(200).json({ message: 'Book removed' });
};

// Bônus 3
const getByAuthor = async (req, res) => {
  const { author } = req.body;

  let books;

  if (author) {
    books = await bookService.getByAuthor(author);
  } else {
    books = await bookService.getAll();
  };

  res.status(200).json(books);
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  removeBook,
};