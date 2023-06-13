import { Request, Router, Response } from 'express';
import BookController from '../controllers/BookController';
import Validations from '../middlewares/Validations';

const bookController = new BookController();

const router = Router();

// rota para buscar todos os livros:
router.get('/', (req: Request, res: Response) => bookController.getAllBooks(req, res));

// rota para buscar um livro por ID:
router.get('/:id', (req: Request, res: Response) => bookController.getBookById(req, res));

// rota para criar um novo livro
router.post(
  '/',
  Validations.validateToken,
  Validations.validateBook,
  (req: Request, res: Response) => bookController.createBook(req, res),
);

// rota para atualizar um livro
router.put(
  '/:id',
  Validations.validateToken,
  Validations.validateBook,
  (req: Request, res: Response) =>
    bookController.updateBook(req, res),
);

// rota para deletar um livro
router.delete(
  '/:id',
  Validations.validateToken,
  (req: Request, res: Response) => bookController.deleteBook(req, res),
);

// rota para listagem de livros por autor:
router.get(
  '/author/search',
  (req: Request, res: Response) => bookController.getBookByQuery(req, res),
);

// rota para desconto no preço de um livro:
router.patch(
  '/:id/discount',
  Validations.validateToken,
  (req: Request, res: Response) => bookController.discountBook(req, res),
);

export default router;
