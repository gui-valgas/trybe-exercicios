import { Request, Response } from 'express';
import BookService from '../services/BookService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class BookController {
  constructor(
    private bookService = new BookService(),
  ) { }

  // Busca todos os livros:
  public async getAllBooks(_req: Request, res: Response) {
    const serviceResponse = await this.bookService.getAllBooks();
    res.status(200).json(serviceResponse.data);
  }

  // Busca livro por ID:
  public async getBookById(req: Request, res: Response) {
    const { id } = req.params;

    const serviceResponse = await this.bookService.getBookById(Number(id));

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    res.status(200).json(serviceResponse.data);
  }

  // Cria um novo livro:
  public async createBook(req: Request, res: Response) {
    const serviceResponse = await this.bookService.createBook(req.body);
    res.status(201).json(serviceResponse.data);
  }

  // Atualiza dados de um livro:
  public async updateBook(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const book = req.body;
    const serviceResponse = await this.bookService.updateBook(id, book);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    return res.status(200).json(serviceResponse.data);
  }

  // Deleta um livro:
  public async deleteBook(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const serviceResponse = await this.bookService.deleteBook(id);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    return res.status(200).json(serviceResponse.data);
  }

  // lista livro por autor:
  public async getBookByQuery(req: Request, res: Response) {
    const { q } = req.query;
    const serviceResponse = await this.bookService.getBookByQuery(q as string);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    res.status(200).json(serviceResponse.data);
  }

  // Adiciona desconto ao preço do livro:
  public async discountBook(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { discount } = req.body;
    const serviceResponse = await this.bookService.discountBook(id, discount);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    return res.status(200).json(serviceResponse.data);
  }
}
