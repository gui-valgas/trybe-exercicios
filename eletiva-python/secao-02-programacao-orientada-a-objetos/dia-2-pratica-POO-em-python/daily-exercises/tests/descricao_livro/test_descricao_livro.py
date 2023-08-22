from src.livro.livro import Livro


def test_descricao_livro():
    new_book = Livro("O Último Desejo", "Andrzej Sapkowski", 318)

    assert (
            repr(new_book) == f"O livro {new_book.titulo}"
            f" de {new_book.autor}"
            f" possui {new_book.paginas} páginas."
        )
