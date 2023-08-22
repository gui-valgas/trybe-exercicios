from src.livro.livro import Livro


def test_cria_livro():
    new_book = Livro("O Último Desejo", "Andrzej Sapkowski", 318)

    assert new_book.titulo == "O Último Desejo"
    assert new_book.autor == "Andrzej Sapkowski"
    assert new_book.paginas == 318
