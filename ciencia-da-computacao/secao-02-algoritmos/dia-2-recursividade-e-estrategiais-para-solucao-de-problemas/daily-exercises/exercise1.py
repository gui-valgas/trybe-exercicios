def even_count(n):
    even_nums = 0
    for num in range(n + 1):
        if num % 2 == 0 and num != 0:
            even_nums += 1
    return even_nums
