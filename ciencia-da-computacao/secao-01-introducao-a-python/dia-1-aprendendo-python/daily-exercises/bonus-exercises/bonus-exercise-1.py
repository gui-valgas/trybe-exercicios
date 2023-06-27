def small_number(numbers):
    small_num = numbers[0]
    for num in numbers:
        if num < small_num:
            small_num = num
    return small_num


# Outra forma de resolução com a função min, nativa do Python:


def minimum(numbers):
    return min(numbers)
