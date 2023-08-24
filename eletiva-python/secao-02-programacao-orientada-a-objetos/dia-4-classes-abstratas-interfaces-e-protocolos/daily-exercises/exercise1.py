from abc import ABC, abstractmethod


class Funcionario(ABC):
    def __init__(self, nome: str, salario: float) -> None:
        self.nome = nome
        self.salario = salario

    @abstractmethod
    def calcularBonificacao(self):
        raise NotImplementedError


class Programador(Funcionario):
    def calcularBonificacao(self):
        return (
            f"O salário do programador {self.nome} é "
            f"R${'{:.2f}'.format(self.salario * 1.2)}"
        )


class Analista(Funcionario):
    def calcularBonificacao(self):
        return (
            f"O salário do analista {self.nome} é "
            f"R${'{:.2f}'.format(self.salario * 1.3)}"
        )


class Gerente(Funcionario):
    def calcularBonificacao(self):
        return (
            f"O salário do gerente {self.nome} é "
            f"R${'{:.2f}'.format(self.salario * 1.4)}"
        )


class Colaborador(Funcionario):
    def calcularBonificacao(self):
        return (
            f"O salário do colaborador {self.nome} é "
            f"R${'{:.2f}'.format(self.salario * 1.1)}"
        )


class Main():
    def main(self):
        programador = Programador("Carlos", 1200)
        print(programador.calcularBonificacao())

        analista = Analista("Fernando", 1700)
        print(analista.calcularBonificacao())

        gerente = Gerente("Gabriel", 2300)
        print(gerente.calcularBonificacao())

        colaborador = Colaborador("Pedro", 1000)
        print(colaborador.calcularBonificacao())


if __name__ == "__main__":
    Main().main()
