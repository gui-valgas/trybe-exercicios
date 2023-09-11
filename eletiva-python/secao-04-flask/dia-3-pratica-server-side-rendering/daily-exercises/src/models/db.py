from pymongo import MongoClient

# Conecta no Mongo, pela variável ambiente definida no Docker Compose
client = MongoClient('mongodb://localhost:27017')

# Cria uma coleção chamada db_chat
db = client.db_exercises
