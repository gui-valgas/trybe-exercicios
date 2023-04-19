# Exercício - Arquitetura de Software MSC: Camada Model

## Exercício 1
> Crie testes unitários da camada de model responsável por listar todas as pessoas motoristas cadastradas no banco de dados.  

**Você deve verificar que**:
  - A função retorna uma estrutura de array;
  - Retorna a lista de pessoas motoristas com o seguinte formato:
```javascript
 const expected = [
   {
     id: 1,
     name: 'Liana Cisneiros',
   }, 
   {
     id: 2,
     name: 'Fábio Frazão',
   },
 ];
```  
- Crie a camada de model responsável por listar todas as pessoas motoristas.

## Exercício 2
> Crie testes unitários da camada de model responsável por cadastrar um carro no banco de dados.  

**Você deve verificar que**:
- Retorna o id do carro cadastrado com o seguinte formato:
```javascript
 const expected = 1;
```  
- Crie a camada de model responsável por cadastrar um carro.

## Exercício 3
> Crie testes unitários da camada de model responsável por encontrar um carro por meio do id.

**Você deve verificar que**:
- Retorna o carro solicitado pelo `id` com o seguinte formato:
```javascript
  const expected = {
   id: 2,
   model: 'Volkswagen Gol',
   color: 'Vermelho',
   licensePlate: 'DZG-4376',
 };
```  
- Crie a camada de model responsável por encontrar um carro por meio do id.

## Exercício 4
> Crie testes unitários da camada de model responsável por encontrar uma pessoa motorista por meio do id.

**Você deve verificar que**:
- Retorna a pessoa motorista solicitado pelo id com o seguinte formato:
```javascript
 const expected = {
   id: 1,
   name: 'Liana Cisneiros',
 };
 ```
- Crie a camada de model responsável por encontrar uma pessoas motorista por meio do id.

## Exercício 5
> Crie testes unitários da camada de model responsável por cadastrar uma pessoa motorista.  

**Você deve verificar que**:
- Retorna a pessoa motorista cadastrada com o seguinte formato:
```javascript
 const expected = 1;
```
- Crie a camada de model responsável por cadastrar uma pessoa motorista.

## Exercício 6
> Crie testes unitários da camada de model responsável por criar o relacionamento N:N entre as pessoas motoristas e os carros.  

**Você deve verificar que**:
- Retorna o relacionamento entre motorista e carro cadastrado com o seguinte formato:
```javascript
 const expected = 1;
```
- Crie a camada de model responsável por cadastrar as pessoas motoristas com o relacionamento N:N com os carros cadastrados.
