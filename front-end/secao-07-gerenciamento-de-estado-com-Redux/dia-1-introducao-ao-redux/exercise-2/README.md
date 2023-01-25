# Exercício 2

Vamos fazer uma aplicação que utiliza um reducer para controlar o tema (`light mode` e `dark mode`) e para alterar o status (online e offline). Um botão deverá mudar o tema e outro botão deverá mudar o status. O código inicial está disponibilizado a seguir:

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>App Trybe</title>
    <script src="https://unpkg.com/redux@latest/dist/redux.js"></script>
    <style>
      body {
        color: white;
        background-color: #333;
        font-family: sans-serif;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Minha Aplicação</h1>
      <p>Status: Você está <span id="status">Offline</span></p>
      <button id="toggle-theme">Light Mode</button>
      <button id="toggle-status">Ficar Online</button>
    </div>
    <script>
      const INITIAL_STATE = {
        status: 'offline',
        theme: 'dark',
      };

      const themeButton = document.getElementById('toggle-theme');
      const statusButton = document.getElementById('toggle-status');

      themeButton.addEventListener('click', () => {
        // coloque o código aqui.
      });

      statusButton.addEventListener('click', () => {
        // coloque o código aqui.
      });
    </script>
  </body>
</html>
```

1 - Crie um reducer com os estados iniciais.

2 - Crie uma store com o reducer criado.

3 - Adicione um `case` dentro do `switch` do reducer para alterar os estados `theme` e `status`. O `case` do estado `theme` deve alterná-lo entre ‘light’ e ‘dark’. O `case` do estado `status` deve alterná-lo entre ‘online’ e ‘offline’.

4 - Faça o dispatch de cada uma das actions ao clicar nos respectivos botões.

5 - Adicione um `store.subscribe()` para atualizar as seguintes informações na página:

- Se o tema for `light`, o `body` deverá possuir uma cor de fundo escura e uma letra clara.
- Se o tema for `dark`, deverá possuir uma cor de fundo clara e uma letra escura.
- Se o status for `online`, o `#status` deverá possuir o texto `Online`.
- Se o status for `offline`, o `#status` deverá possuir o texto `Offline`.
- Não se esqueça também de modificar o texto dos botões para refletirem exatamente o que eles fazem.