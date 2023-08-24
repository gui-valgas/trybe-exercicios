# Exercícios: Classes abstratas, interfaces e protocolos

## Exercício 1
Você trabalha em uma empresa que desenvolve sistemas de gestão para empresas de diversos segmentos. Então, o seu gerente de projetos pediu a você que desenvolvesse uma classe abstrata chamada `Funcionario` que servirá de base para as classes `Programador`, `Analista` e `Gerente`. Nessa classe abstrata deverá conter um método abstrato chamado `calcularBonificacao` a ser implementado nas classes filhas. Então, o método `calcularBonificacao` deverá retornar o valor do salário do funcionário acrescido de um bônus, que precisa ser calculado da seguinte forma:

- Para o `Programador` o bônus será de 20% do salário;
- Para o `Analista` o bônus será de 30% do salário;
- Para o `Gerente` o bônus será de 40% do salário;
- Para as demais funções o bônus será de 10% do salário.

Crie uma classe chamada `Main` com um método `main` que instancie um objeto de cada uma das classes filhas. Além disso, ele devem imprimir o valor do salário e da bonificação de cada um deles.

Formate a saída dos valores numéricos para que sejam impressos com duas casas decimais.

## Exercício 2
Agora, você deve criar um sistema para gerenciamento de serviços de entrega. Para isso, deverá ter uma interface chamada `Entregavel` que precisa conter um método chamado `entregar`. Essa interface vai ser implementada pelas classes `Correios` e `Transportadora`. O método `entregar` deverá receber como parâmetro um objeto da classe `Cliente` e um objeto da classe `Endereco`. Além disso, o método precisa imprimir uma mensagem informando que o serviço foi entregue com sucesso.

➡️ Siga os passos a seguir para a construção.

- Crie uma classe chamada `Cliente` com os atributos `nome` e `telefone`.
- Crie uma classe chamada `Endereco` com os atributos `rua`, `numero`, `bairro`, `cidade` e `estado`.
- Crie uma classe chamada `Correios` que implemente a interface `Entregavel`.
- Crie uma classe chamada `Transportadora` que implemente a interface `Entregavel`.
- Crie uma classe chamada `Main` com um método `main` que instancie um objeto de cada uma das classes `Correios` e `Transportadora`. Em seguida, crie um objeto da classe `Cliente` e um objeto da classe `Endereco`. Por fim, utilize o método `entregar` dos objetos `Correios` e `Transportadora` passando como parâmetro o objeto `Cliente` e o objeto `Endereco`.


## Exercício 3 – Protocolos
Implemente uma classe de protocolo para um sistema de mensagens que defina os métodos necessários para enviar e receber mensagens. Em seguida, faça classes para dois sistemas de mensagens diferentes que implementam o protocolo.

**Passos**
Defina uma classe de protocolo chamada `MessagingProtocol` que defina os seguintes métodos:

- `send_message(to: str, message: str) -> bool:` envia uma mensagem para o destinatário especificado. Retorna True se a mensagem for enviada com sucesso e False caso contrário.
- `receive_message() -> Union[str, None]:` recebe uma mensagem, se houver disponível. Retorna a mensagem como uma string ou None se nenhuma mensagem estiver disponível.
- Implemente uma classe chamada `InMemoryMessaging` que implemente o protocolo `MessagingProtocol`. Nessa classe deve ser usada uma estrutura de dados na memória (por exemplo, um dicionário) para armazenar mensagens. Você pode usar a classe `queue.Queue` para implementar uma fila de mensagens simples.
- Implemente uma classe chamada `FileMessaging` que implemente o protocolo `MessagingProtocol`. Essa classe deve usar uma abordagem baseada em arquivo para armazenar mensagens. Você pode usar a função interna `open()` para criar e manipular arquivos.
- Teste as classes `InMemoryMessaging` e `FileMessaging` criando instâncias de cada classe e usando os métodos `send_message()` e `receive_message()`.
