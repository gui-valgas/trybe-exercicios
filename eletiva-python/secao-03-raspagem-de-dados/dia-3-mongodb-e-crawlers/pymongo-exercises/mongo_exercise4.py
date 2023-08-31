# Quando um documento é inserido, um _id único é gerado e retornado.
# Também podemos fazer inserção de múltiplos documentosde uma vez da seguinte forma: # noqa
from pymongo import MongoClient

client = MongoClient()
db = client.catalogue
documents = [
    {
        "title": "A Light in the Attic",
    },
    {
        "title": "Tipping the Velvet",
    },
    {
        "title": "Soumission",
    },
]
db.books.insert_many(documents)
client.close()  # fecha a conexão com o banco de dados
