import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../../src/App';
import SequelizeBook from '../../src/database/models/SequelizeBook';
import { books, book } from '../mocks/Book.mocks';
import Validations from '../../src/middlewares/Validations';
import JWT from '../../src/utils/JWT';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Books Test', function() {
  // testes de listagem de livros:
  it('should return all books', async function() {
    sinon.stub(SequelizeBook, 'findAll').resolves(books as any);

    const { status, body } = await chai.request(app).get('/books');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(books);
  });

  it('should return a book by id', async function() {
    sinon.stub(SequelizeBook, 'findOne').resolves(book as any);

    const { status, body } = await chai.request(app).get('/books/1');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(book);
  });

  it('should return not found if the book doesn\'t exists', async function() {
    sinon.stub(SequelizeBook, 'findOne').resolves(null);

    const { status, body } = await chai.request(app).get('/books/1');

    expect(status).to.equal(404);
    expect(body.message).to.equal('Book 1 not found');
  });

  // Testes de criação de um novo livro:
  it('should create a book', async function() {
    sinon.stub(SequelizeBook, 'create').resolves(book as any);
    sinon.stub(Validations, 'validateBook').returns();
    sinon.stub(JWT, 'verify').resolves();

    const { id, ...sendData } = book;

  const { status, body } = await chai.request(app).post('/books')
      .set('authorization', 'validToken')
      .send(sendData);

    expect(status).to.equal(201);
    expect(body).to.deep.equal(book);
  });

  it('shouldn\'t create a book without a token', async function() {
    const { status, body } = await chai.request(app).post('/books');

    expect(status).to.equal(404);
    expect(body.message).to.equal('Token not found');
  });

  it('shouldn\'t create a book with an invalid token', async function() {
    const { status, body } = await chai.request(app).post('/books')
      .set('authorization', 'invalidToken');

    expect(status).to.equal(401);
    expect(body.message).to.equal('Token must be a valid token');
  });

  it('shouldn\'t create a book with invalid body data', async function() {
    sinon.stub(JWT, 'verify').resolves();

    const { status, body } = await chai.request(app).post('/books')
      .set('authorization', 'validToken')
      .send({});

    expect(status).to.equal(400);
    expect(body.message).to.equal('title is required');
  });

  // Testes de atualização de um livro:
  it('should update a book', async function() {
    sinon.stub(SequelizeBook, 'update').resolves([1] as any);
    sinon.stub(SequelizeBook, 'findByPk').resolves(book as any);
    sinon.stub(Validations, 'validateBook').returns();
    sinon.stub(JWT, 'verify').resolves();

    const { id, ...sendData } = book;

    const { status, body } = await chai.request(app).put('/books/1')
      .set('authorization', 'validToken')
      .send(sendData);

    expect(status).to.equal(200);
    expect(body.message).to.equal('Book updated');
  });

  it('should return not found when the book to update does not exists', async function() {
    sinon.stub(SequelizeBook, 'findByPk').resolves(null);
    sinon.stub(JWT, 'verify').resolves();

    const { id, ...sendData } = book;

    const { status, body } = await chai.request(app).put('/books/1')
      .set('authorization', 'validToken')
      .send(sendData);

    expect(status).to.equal(404);
    expect(body.message).to.equal('Book 1 not found');
  });

  it('should return conflict when there is nothing to be updated', async function() {
    sinon.stub(SequelizeBook, 'findByPk').resolves(book as any);
    sinon.stub(SequelizeBook, 'update').resolves([0] as any);
    sinon.stub(JWT, 'verify').resolves();

    const { id, ...sendData } = book;

    const { status, body } = await chai.request(app).put('/books/1')
      .set('authorization', 'validToken')
      .send(sendData);

    expect(status).to.equal(409);
    expect(body.message).to.equal('There are no updates to perform in Book 1');
  });

  // Testes de exclusão de um livro:
  it('should delete a book', async function() {
    sinon.stub(SequelizeBook, 'destroy').resolves();
    sinon.stub(SequelizeBook, 'findByPk').resolves(book as any);
    sinon.stub(JWT, 'verify').resolves();

    const { status, body } = await chai.request(app).delete('/books/1')
      .set('authorization', 'validToken');

    expect(status).to.equal(200);
    expect(body.message).to.equal('Book deleted');
  });

  it('should return not found when the book to delete does not exists', async function() {
    sinon.stub(SequelizeBook, 'findByPk').resolves(null);
    sinon.stub(JWT, 'verify').resolves();

    const { status, body } = await chai.request(app).delete('/books/1')
      .set('authorization', 'validToken');

    expect(status).to.equal(404);
    expect(body.message).to.equal('Book 1 not found');
  });

  // testes de desconto e listagem de livros por autor:
  it('should change a book price', async function() {
    sinon.stub(SequelizeBook, 'update').resolves([1] as any);
    sinon.stub(SequelizeBook, 'findByPk').resolves(book as any);
    sinon.stub(JWT, 'verify').resolves();

    const { status, body } = await chai
      .request(app)
      .patch('/books/1/discount')
      .set('authorization', 'validToken')
      .send({ discount: '5' });

    expect(status).to.equal(200);
    expect(body.message).to.equal('Book updated');
  });

  it('should return not found when the book to discount does not exists', async function() {
    sinon.stub(SequelizeBook, 'findByPk').resolves(null);
    sinon.stub(JWT, 'verify').resolves();

    const { status, body } = await chai
      .request(app)
      .patch('/books/1/discount')
      .set('authorization', 'validToken')
      .send({ discount: '5' });

    expect(status).to.equal(404);
    expect(body.message).to.equal('Book 1 not found');
  });

  it('should return a book by author', async function() {
    sinon.stub(SequelizeBook, 'findAll').resolves(books as any);

    const { status, body } = await chai
      .request(app)
      .get('/books/author/search?q=Author');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(books);
  });

  it('should return not found when there is no books by author', async function() {
    sinon.stub(SequelizeBook, 'findAll').resolves([] as any);

    const { status, body } = await chai
      .request(app)
      .get('/books/author/search?q=Jon');

    expect(status).to.equal(404);
    expect(body.message).to.equal('Author Jon not found');
  });

  afterEach(sinon.restore);
});
