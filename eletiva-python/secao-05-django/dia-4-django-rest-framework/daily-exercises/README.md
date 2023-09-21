# Exercícios: Django Rest Framework

Após aprender os principais conceitos do Django, está na hora de entrar de vez no desenvolvimento de APIs com ele. 
API desenvolvida para gerenciar playlists de músicas utilizando Django Rest Framework (DRT) para evidenciar como a utilização deste _framework_ torna mais rápido o desenvolvimento


## Exercícios:

> Preparando o ambiente:
- Crie um diretório novo para o projeto e, dentro dele, crie e ative o ambiente virtual
- Crie o projeto e o app
- Configure a aplicação e o banco de dados que sera utilziado, no caso do exercício de hoje MySQL
---

- Inclua o `rest_framework` no projeto, adicione ao ambiente virtual e ao `settings.py`
- Crie os modelos `Singer`, `Music` e `Playlists`, e registre cada um deles no `admin`
- Crie os `serializers`:
  - crie o arquivo `serializers.py` na pasta `core` e inclua os `serializers` dos modelos
- Crie os `viewsets` da API no arquivo `core/views.py`
- Defina as rotas do projeto no arquivo `playlistify/urls.py`