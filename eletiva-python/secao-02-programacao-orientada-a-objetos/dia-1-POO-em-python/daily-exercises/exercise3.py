class Book:
    def __init__(
        self,
        title: str,
        author: str,
        total_pages: int,
    ) -> None:
        self.title = (title,)
        self.author = (author,)
        self.total_pages = total_pages

    def book_description(self):
        return (
            f"The title of the book is {self.title}, "
            f" written by {self.author}, and has {self.total_pages} pages"
        )


livro = Book("O Último Desejo", "Andrzej Sapkowski", 318)
