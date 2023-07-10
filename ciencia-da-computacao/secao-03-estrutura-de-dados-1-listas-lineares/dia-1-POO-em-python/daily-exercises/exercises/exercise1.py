class TV:
    def __init__(self, tamanho):
        self._volume = 50
        self._canal = 1
        self._tamanho = tamanho
        self._ligada = False

    def aumentar_volume(self):
        if self._ligada is False:
            raise ValueError(
                "A TV está desligada!"
              )

        if 0 < self._volume < 99:
            self._volume += 1

    def diminuir_volume(self):
        if self._ligada is False:
            raise ValueError(
              "A TV está desligada!"
            )

        if self._volume > 0:
            self._volume -= 1

    def modificar_canal(self, channel):
        if 1 >= channel >= 99:
            raise ValueError("Canal indisponível")

        if self._ligada is False:
            raise ValueError(
                "Não é possivel modificar o canal com a TV desligada!"
              )

        self._canal = channel

    def ligar_desligar(self):
        self._ligada = not self._ligada
