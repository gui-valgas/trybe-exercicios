import json
import csv


def get_books(file):
    return json.load(file)


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_percentage(book_count_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_category.items()
    ]


def write_csv(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    with open("arquivo-exercise4.json") as file:
        books = get_books(file)


book_count_by_category = count_books_by_categories(books)

number_of_books = len(books)
percentage_rows = calculate_percentage(book_count_by_category, number_of_books)

header = ["categoria", "porcentagem"]
with open("report-exercise4.csv", "w") as file:
    write_csv(file, header, percentage_rows)
