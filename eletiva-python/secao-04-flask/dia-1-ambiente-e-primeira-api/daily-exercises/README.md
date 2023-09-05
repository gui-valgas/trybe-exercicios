# Exercícios - Flask: Ambiente e primeira API
> Para subir a aplicação rode o seguinte comando:
```py
docker compose up flask-api
```

## Exercício 1
Crie uma Blueprint Controller semelhante à API de piadas, para criar uma coleção de sugestões de músicas na base de dados.

Passos:

1. Crie a `music_model.py` (Implementação equivalente a `joke_model.py`).
2. Crie a `musics_controller.py` e registre como Blueprint.
    - Registre em `musics_controller.py` e `app.py`, semelhante ao realizado para a API no exemplo do conteúdo.
3. Crie uma rota `POST` para salvar uma música.

```py
@musics_controller.route("/", methods=["POST"])
```


## Exercício 2
Crie uma rota GET para retornar uma música aleatória.


```py
@musics_controller.route("/random", methods=["GET"])
```

## Exercício 3
Em nossas `jokes_controller` e `musics_controller`, retornamos os números fixos dos status HTTP:

- 200 - OK

- 201 - Created
 
- 204 - No Content
 
- 404 - Not Found

Faça uma refatoração na hora de retornar o status HTTP, de forma que não sejam utilizados números mágicos nos status.

Sugestão, refatore usando o `<enum>`(https://docs.python.org/3/library/enum.html) do Python.