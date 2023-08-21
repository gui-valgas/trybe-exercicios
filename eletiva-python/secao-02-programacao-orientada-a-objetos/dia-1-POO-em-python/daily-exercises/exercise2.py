from typing import List


def starts_with(list: List[str], char: str) -> List[str]:
    result = []
    for string in list:
        if string.startswith(char):
            result.append(string)
    return result
