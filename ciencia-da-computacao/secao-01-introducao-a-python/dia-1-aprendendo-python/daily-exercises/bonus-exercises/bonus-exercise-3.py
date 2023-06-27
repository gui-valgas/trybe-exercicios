def sum(max_num):
    counter = 0
    for number in range(1, max_num + 1):
        counter += number
    return counter


# Outra forma de resolução com a função min, nativa do Python:


def summation(limit):
    return sum(range(1, limit + 1))
