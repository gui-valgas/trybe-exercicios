from exercise3 import Stack


class LimitStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self.limit = limit

    def push(self, value):
        if self.size() + 1 > self.limit:
            raise ValueError("Estouro de pilha")
        super().push(value)


# Análise de complexidade:

# O método push realiza inserção de itens,
# que na Pilha possui Complexidade de tempo é O(1).
