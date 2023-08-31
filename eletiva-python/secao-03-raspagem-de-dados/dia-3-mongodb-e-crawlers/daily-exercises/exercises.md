# Exercício: Recuperando Dados
Uma das ações mais elementares que podemos realizar em um banco de dados é a de recuperar dados armazenados. Vale salientar que uma pesquisa em uma base de dados, independente de ser realizada em um banco relacional ou não relacional.

**Usando o banco de dados trybnb devidamente carregado via container:**

- Realize uma busca por todos os imóveis que se localizam na Espanha ordenados, de forma crescente, pelo atributo _id;

```py
db.places.find({'address.country': 'Spain'}).sort({'_id':1})
```

---
- Realize uma busca por todos os imóveis que se localizam nos Estados Unidos que retorne a quantidade de imóveis.

```py
db.places.find({'address.country': 'United States'}).count()
```

# Exercício: Inserindo Dados

- Usando o banco de dados trybnb devidamente carregado via container:

Realize a inserção de três documento na coleção places que contenham os atributos _id, name e description utilizando o método insertMany();

```py
db.places.insertMany(
  [
    {
      '_id': 101,
      'name': 'Casa na Sol',
      'description': 'Apesar de distante, um lugar com clima sempre quente!',
    },
    {
      '_id': 102,
      'name': 'Casa em Marte ',
      'description': 'Ambiente calmo e inóspito onde é possível encontrar alguns robôs!',
    },
    {
      '_id': 103,
      'name': 'Casa em Plutão',
      'description': 'Para quem deseja ficar distante de tudo e de todes!',
    }
  ]
)
```

# Exercício: Método Update

**Usando o banco de dados trybnb…**

- Altere a hospedagem de `_id` “12”, para que seu campo `review_scores_rating` receba nota de 65:
```py
db.places.updateOne(
  { _id: 12 },
  { $set: { "review_scores.review_scores_rating": 65 } }
)
```
- Altere todas as hospedagens do `host` “José Edmílson” para que ele tenha o campo `host_identity_verified` como true;
```py
db.places.updateMany(
  { "host.host_name": "José Edmílson" },
  { $set: { "host.host_identity_verified": true } }
)
```
