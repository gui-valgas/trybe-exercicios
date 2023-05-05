# Exercícios dia 3: Camada Controller

## Exercício 1
- Para Realizar o exercício 1, será necessário criar os seguintes arquivos:
  - O arquivo `tests/unit/controllers/mocks/driver-exercises.controller.mock.js;`
  - O arquivo `tests/unit/controllers/driver-exercises.controller.test.js;`
  - O arquivo `src/controllers/driver.controller.js;`
  - O arquivo `src/routers/driver.router.js;`
  - O arquivo `src/routers/index.js;`
1. Desenvolva os testes da função `driverController.getDrivers()`, que é responsável por buscar todos os motoristas cadastrados. A função `driverController.getDrivers()` deve utilizar a camada de controller.
2. Desenvolva a função `getDrivers` de maneira que ela passe em nossos testes.
3. Crie a rota GET `/drivers`

## Exercício 2
Finalmente chegou a hora de estruturarmos uma rota POST! E para isso vamos utilizar a função `driverController.createDriver()`, responsável por cadastrar um novo motorista. Para isso:

- Para Realizar o exercício 2, será necessário criar o seguinte arquivo:
  - `src/utils/errorMap.js` com o seguinte conteúdo:
```javascript
const errorMap = {
  TRAVEL_NOT_FOUND: 404,
  DRIVER_NOT_FOUND: 404,
  CAR_NOT_FOUND: 404,
  INVALID_VALUE: 422,
  TRAVEL_CONFLICT: 409,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
```
1. Desenvolva os testes da função `driverController.createDriver()`, que é responsável por cadastrar um novo motorista.

2. Desenvolva a função `createDriver` de maneira que ela passe em nossos testes.

3. Crie a rota POST `/drivers`

Agora que estamos com nossa rota POST `/drivers` pronta, podemos criar middlewares para validar suas requisições:

4. (Opcional) Crie os testes para um middleware que valida se a chave `name` é obrigatória.
5. (Opcional) Crie o middleware e utilize na rota POST `/drivers`.
- Para Realizar os exercícios opcionais, sugerimos que crie os seguintes arquivos:
  - O arquivo `tests/unit/middlewares/validateDriverNameField.middleware.js`;
  - O arquivo `src/middlewares/validateDriverNameField.js`;

## Exercício 3
- Para Realizar o exercício 3, será necessário criar os seguintes arquivos:
  - O arquivo `tests/unit/controllers/mocks/car-exercises.controller.mock.js`;
  - O arquivo `tests/unit/controllers/car-exercises.controller.test.js`;
  - O arquivo `src/controllers/car.controllers.js`;
  - O arquivo `src/routers/car.router.js`;
Agora que você fez a `controller` para a função `createDriver` com seus devidos testes e rotas, faça o mesmo para a função `createCar`, que é nossa função responsável por cadastrar um novo carro.

1. Desenvolva os testes da função `carController.createCar()`, que é responsável por cadastrar um novo carro.

2. Desenvolva a função `createCar` de maneira que ela passe em nossos testes.

3. Crie a rota POST `/cars`

Agora que estamos com nossa rota POST `/cars` pronta, podemos criar middlewares para validar suas requisições:

4. (Opcional) Crie os testes para um middleware que valida se as chaves `model, color e licensePlate` são obrigatórias.

5. (Opcional) Crie o middleware e utilize na rota POST `/cars`.

- Para Realizar os exercícios opcionais, sugerimos que crie os seguintes arquivos:
  - O arquivo `tests/unit/middlewares/validateCarFields.middleware.js`;
  - O arquivo `src/middlewares/validateCarFields.middleware.js`;

