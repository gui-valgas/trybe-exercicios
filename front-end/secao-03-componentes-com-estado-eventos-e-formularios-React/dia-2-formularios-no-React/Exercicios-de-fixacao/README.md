# Exercícios de fixação

## Parte 1  

- Crie um novo projeto utilizando npx create-react-app my-form-1.0.

- Crie um formulário que contenha os seguintes elementos: um campo select, dois inputs de tipo diferente e uma textarea . Feito isso, faça com que um desses elementos seja um componente controlado, ou seja, elemento do formulário controlado pelo Estado.  

## Parte 2 

- Faça todos os seus elementos componentes do formulário, criado nos exercícios anteriores, ficarem 100% controlados. Para isso, construa um event handler genérico para lidar com eles.  

- Acrescente no seu formulário um input do tipo checkbox, e garanta que seu event handler esteja tratando este caso corretamente.  

- Na documentação de React (primeiro link da seção de Recursos Adicionais!), busque sobre os formulários e faça a leitura de como se deve adicionar um input para arquivos. Feito isso, acrescente um input ao seu formulário.  

- Encapsule alguns dos seus campos num fieldset.

## Parte 3  

- No seu formulário, criado nos exercícios anteriores, faça que dois de seus campos sejam componentes filhos do seu componente de formulário. Garanta que seu estado ainda pertença ao componente pai.  

- Faça validações nos componentes criados.  

- Crie no estado do componente pai, um campo formularioComErros o qual deve ser true, caso algum desses componentes tenha erros e false caso os componentes não tenham erros.