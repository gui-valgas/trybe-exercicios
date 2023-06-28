import random


def jogo_palavra_embaralhada():
    "Lendo as palavras de um arquivo txt, como pedido no Exercício 3"
    with open("palavras-exercise3.txt", "r") as file:
        palavras = file.read()
    palavra = random.choice(palavras)
    palavra_embaralhada = "".join(random.sample(palavra, len(palavra)))

    print("A palavra embaralhada é:", palavra_embaralhada)

    tentativas = 3
    while tentativas > 0:
        resposta = input("Digite sua resposta: ")

        if resposta.lower() == palavra:
            print("Parabéns! Você acertou a palavra.")
            return

        print("Resposta incorreta.")
        tentativas -= 1
        print(f"Tente novamente! {tentativas} tentativas restantes")

    print(f"Suas tentativas acabaram. A palavra correta era {palavra}")


jogo_palavra_embaralhada()
