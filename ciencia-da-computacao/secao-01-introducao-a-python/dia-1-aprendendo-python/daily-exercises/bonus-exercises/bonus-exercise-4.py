def fuel_price(gas, liters):
    if gas == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif gas == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total
