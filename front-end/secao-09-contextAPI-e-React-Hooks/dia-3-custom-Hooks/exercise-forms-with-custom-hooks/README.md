# Exercício de fixação

- Crie um formulário simples contendo três campos que, ao ser submetido, lança um alerta na página, utilizando a `biblioteca sweetalert2`;

- Crie um `Custom Hook` para deixar o código mais limpo:
  - O argumento do Hook customizado deve ser o valor inicial do `input`;
  - O retorno do Hook customizado deve ser o `value` e a função `onChange`, que será usada para controlar o `input` com React.

- Adicione a funcionalidade de limpar `inputs`:
  - Adicione diretamente no Custom Hook esta funcionalidade;
  - Ajuste o componente `App` para utilizar essa nova funcionalidade para limpar os campos quando o formulário for submetido;