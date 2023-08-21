class Car:
    def __init__(
      self,
      model: str,
      year: int,
    ) -> None:
        self.model = model,
        self.year = year,
        self.speed: int = 0

    def increase_speed(self, value: int) -> None:
        self.speed += value

        print(
            f"Car: {self.model} \n"
            f"Year: {self.speed} \n"
            f"speed: {self.speed} \n"
        )

    def decrease_speed(self, value) -> str:
        if self.speed <= 0:
            return "The car is stopped"

        self.speed -= value

        print(
            f"Car: {self.model} \n"
            f"Year: {self.speed} \n"
            f"speed: {self.speed} \n"
        )


carro = Car("Gol", 2015)
carro.increase_speed(100)
carro.decrease_speed(50)
