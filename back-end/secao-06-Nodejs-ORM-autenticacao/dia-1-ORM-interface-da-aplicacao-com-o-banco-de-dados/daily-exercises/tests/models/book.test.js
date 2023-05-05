const { expect } = require('chai');
const { Book } = require('../../src/models');

describe('O model de book', () => {
  it('possui a propriedade "title"', () => {
    const book = new Book(); // tirar duvida sobre esse metodo new Book();
    // console.log('BOOK', book)
    expect(book).to.have.property('title');
  });

  it('possui a propriedade "author"', () => {
    const book = new Book();
    expect(book).to.have.property('author');
  });

  it('possui a propriedade "pageQuantity"', () => {
    const book = new Book();
    expect(book).to.have.property('pageQuantity');
  });

  it('possui a propriedade "publisher"', () => {
    const book = new Book();
    expect(book).to.have.property('publisher');
  });
})