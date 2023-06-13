import { Op } from 'sequelize';
import SequelizeBook from '../database/models/SequelizeBook';
import { IBook } from '../interfaces/books/IBook';
import { IBookModel } from '../interfaces/books/IBookModel';
import { NewEntity } from '../interfaces';

export default class BookModel implements IBookModel {
  private model = SequelizeBook;

  // Busca livro por ID:
  async findById(id: IBook['id']): Promise<IBook | null> {
    const dbData = await this.model.findByPk(id);
    if (dbData == null) return null;

    const { title, price, author, isbn }: IBook = dbData;
    return { id, title, price, author, isbn };
  }

  // Busca todos os livros:
  async findAll(): Promise<IBook[]> {
    const dbData = await this.model.findAll();
    return dbData.map(({ id, title, price, author, isbn }) => (
      { id, title, price, author, isbn }
    ));
  }

  // Cria um novo livro:
  async create(data: NewEntity<IBook>): Promise<IBook> {
    const dbData = await this.model.create(data);

    const { id, title, price, author, isbn }: IBook = dbData;
    return { id, title, price, author, isbn };
  }

  // Atualiza dados de um livro:
  async update(id: IBook['id'], data: Partial<NewEntity<IBook>>): Promise<IBook | null> {
    const [affectedRows] = await this.model.update(data, { where: { id } });
    if (affectedRows === 0) return null;

    return this.findById(id);
  }

  // Deleta um livro:
  async delete(id: IBook['id']): Promise<number> {
    return this.model.destroy({ where: { id } });
  }

  // Lista livros por autor:
  async findByQuery(q: string): Promise<IBook[]> {
    return this.model.findAll({
      where: {
        author: {
          [Op.like]: `%${q}%`,
        },
      },
    });
  }
}
