def even_count(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + even_count(n - 1)
    else:
        return even_count(n - 1)
