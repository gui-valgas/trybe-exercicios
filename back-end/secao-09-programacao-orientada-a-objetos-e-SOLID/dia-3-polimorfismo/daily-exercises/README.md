# Exercícios do dia 3 - seção 9: Polimorfismo

## Exercício 1
Agora vamos criar uma interface IAgenda, que será usada para definir o padrão dos agendamentos das quadras. Para isso:

  - Crie a interface IAgenda:
    - deve ser criada no caminho **src/interfaces/IAgenda.ts**,
    - IAgenda que deve receber `um` parâmetro `genérico` do tipo `T`,
    - IAgenda deve possuir 3 atributos:
      - protocolo do tipo `string`;
      - data do tipo `Date`;
      - regras do tipo `T`.

## Exercício 2
Crie a classe Quadra em `src/Quadra.ts`, que não pode ser instanciada (classe abstrata). Ela deve possuir um método abstrato `reservar` que recebe um parâmetro do tipo `Date` e que retorna um atributo do tipo IAgenda.

## Exercício 3
Agora crie um interface chamada IFutebol. Ela será usada para implementar as regras da classe que iremos utilizar no exercício 4. A interface IFutebol:

- deve ser criada no caminho src/interfaces/IFutebol.ts,
- deve possuir uma chave chuteira que será do tipo string. spoiler: aqui serão guardadas as regras referente a chuteira que pode ser usada na Quadra de Futebol

## Exercício 4
Como você já criou a classe abstrata Quadra e a interface IFutebol, agora você deve criar a classe QuadraFutebol, essa classe deverá:

- ser criada no caminho src/QuadraFutebol.ts,
- extender a classe abstrata Quadra;
- implementar o método reservar, o tipo que esse método recebe deverá ser a interface IFutebol que você criou no exercício anterior.
- retornar o método de reservar com a seguinte resposta:

```js
{
  // protocolo é o "id" da reserva, gere de forma aleatória
  protocolo: 'q39tgorea9',
  date: '2022-11-03T17:53:24.393Z',
  regras: { chuteira: 'cravo' }
}
```

## Exercício 5
Agora no seu arquivo src/index.ts:

- instancie a classe Clube,
- instancie a classe QuadraFutebol,
- adicione a classe que você acabou de instanciar (classe QuadraFutebol), ao clube, com o método adicionarQuadra
- Com sua quadra adicionada ao clube, você já pode reservar essa quadra na data que você quiser. Chame o método reservar da classe QuadraFutebol, com a data que você quer jogar uma bolinha com as pessoas que você gosta.
- Imprima no console o resultado da reserva da quadra.

## Exercício 6
Agora que você já sabe como uma nova quadra é criada no nosso clube, repita esse processo e crie uma quadra de tênis. Essa quadra deverá:

- ser criada no caminho src/QuadraTenis

- depois de ser criada, deverá ser instanciada e ser adicionada às quadras do nosso clube.
