def longer_no_repeating_substring_len(string):
    char_index = {}
    start_index = 0
    biggest = 0

    for end_index, letter in enumerate(string):
        if letter in char_index and char_index[letter] >= start_index:
            start_index = char_index[letter] + 1
        char_index[letter] = end_index
        current_len = end_index - start_index + 1
        biggest = max(biggest, current_len)

    return biggest


# Teste
string = "serdevemuitolegalmasehprecisoestudarbastante"
print(longer_no_repeating_substring_len(string))
