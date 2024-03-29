from exercise3 import Stack


def solve_expression(expr):
    stack = Stack()
    tokens_list = expr.split(" ")

    for token in tokens_list:
        if token == "+":
            # Sum operation
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == "*":
            # multiply operation
            result = stack.pop() * stack.pop()
            stack.push(result)
        elif token == "-":
            # Minus operation
            op2 = stack.pop()
            op1 = stack.pop()
            result = op1 - op2
            stack.push(result)
        elif token == "/":
            # Division operation
            op2 = stack.pop()
            op1 = stack.pop()
            result = op1 / op2
            stack.push(result)
        else:
            # add the number operation
            stack.push(int(token))

    return stack.pop()


# Análise de complexidade:
# O algoritmo realiza push e pop,
# que na Pilha possuem Complexidade de tempo é O(1).
