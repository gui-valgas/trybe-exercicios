# Exercícios do dia 7.1

## _**Parte I - Criando fluxo de exceção**_
Copie e cole o código abaixo no seu editor de texto:
```javascript
<!DOCTYPE html>
<html lang='pt-BR'>
<head>
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Calculadora</title>
</head>
<body>
  <p>Informe dois números para realizar a soma:</p>
  <label for='value1'>Valor 1:</label>
  <input type='text' id='value1'>
  <label for='value2'>Valor 2:</label>
  <input type='text' id='value2'>
  <button id='button'>Somar</button>
  <p id='result'></p>
  <script>
    function sum() {
      const value1 = document.getElementById('value1').value;
      const value2 = document.getElementById('value2').value;
      const result = Number(value1) + Number(value2);
      document.getElementById('result').innerHTML = `Resultado: ${result}`;
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
    }
    window.onload = () => {
      const button = document.getElementById('button');
      button.addEventListener('click', sum);
    }
  </script>
</body>
</html>
```
Aparentemente está tudo funcionando, mas a aplicação não possui fluxo de exceção. Ou seja, caso ocorra um erro, eles não serão tratados. Que tal resolver isso?

- Crie erros personalizados.
- Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?

- Utilize o throw new Error e o bloco try/catch.

- Evite funções que tenham muitas responsabilidades distintas.

- Caso a pessoa usuária nao preencha nenhum input, ou preencha apenas um input, lance um erro.

- Caso os valores inseridos nos inputs pela pessoa usuária não sejam números, lance um erro. Você pode fazer essa verificação utilizando a função isNan().

- Adicione o texto dos erros no parágrafo com id result, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!

- Utilize o finally para apagar os valores dos inputs ao final do bloco try/catch.

## Parte II -  Pedido de clientes

### Bloco 7, Dia 2 -> JavaScript ES6 - Objects

_**Parte II - Pedido de clientes**_

Para os exercícios a seguir, use o seguinte código:

```javascript
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.

}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);
```

 - Complete a função `customerInfo()` para que seu retorno seja similar a `"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701"`;
     - Note que o parâmetro da função já está sendo passado na chamada da função.

 - Complete a função `orderModifier()` para que seu retorno seja similar a `"Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."`.
     - Modifique o nome da pessoa compradora;
     - Modifique o valor total da compra para R$ 50,00.


_**Parte III - Organizando lições**_

Para os exercícios a seguir, use o seguinte código:

```javascript
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
```

 - Crie uma função para adicionar o turno da manhã na `lesson2` . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

 - Crie uma função para mostrar o tamanho de um objeto.

 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

 - Crie um objeto de nome `allLessons`, que deve agrupar todas as aulas através do `Object.assign`. Cada chave desse novo objeto será uma aula, sendo essas chaves: `lesson1` , `lesson2` e `lesson3`. Ao executar o comando `console.log(allLessons)`, a saída deverá ser a seguinte:
```javascript
console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/
```

 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
```javascript
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
```

 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
```javascript
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
```


_**BÔNUS Organizando lições**_

 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
```javascript
console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */
```