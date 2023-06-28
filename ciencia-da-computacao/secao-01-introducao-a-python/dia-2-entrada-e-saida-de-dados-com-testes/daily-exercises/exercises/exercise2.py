import random

palavras = [
    "helicóptero",
    "carro",
    "navio",
    "video",
    "futebol",
    "hospital"]


def jogo_palavra_embaralhada():
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
