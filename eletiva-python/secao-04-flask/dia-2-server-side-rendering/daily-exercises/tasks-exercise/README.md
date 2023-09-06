# Exercícios: Server side Rendering em Flask


## Exercício 1
Você foi contratado para desenvolver um aplicativo web de gerenciamento de tarefas usando Flask e templates do Jinja2. O aplicativo deve permitir aos usuários adicionar, visualizar e marcar tarefas como concluídas.

1. Crie uma classe chamada `Task` que representa uma tarefa, com os atributos `id`, `title` e `completed`. 
2.  Crie uma lista de tarefas no arquivo do aplicativo e inicialize-a com algumas tarefas de exemplo.

## Exercício 2

1. Crie um template chamado `tasks.html` que exiba a lista de tarefas e forneça um formulário para adicionar novas tarefas. 
4. Use uma estrutura de repetição do Jinja2 para iterar sobre a lista de tarefas e exibi-las na página.
5. Adicione um botão de marcação de conclusão para cada tarefa exibida, permitindo que os usuários marquem uma tarefa como concluída.
6. Estilize a página usando CSS para torná-la atraente visualmente.

## Exercício 3

1. Crie uma rota ‘/‘ que renderize o template `tasks.html`. 
2. No template, adicione um formulário para adicionar novas tarefas.
3. Quando o usuário enviar uma nova tarefa, a rota deve adicionar a tarefa à lista de tarefas.
4. Adicione uma rota adicional `'/complete/int:task_id'` que seja acionada quando um usuário marcar uma tarefa como concluída. Essa rota deve atualizar o estado da tarefa correspondente na lista de tarefas.
