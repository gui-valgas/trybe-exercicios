# Exercise - TrybeMail
Neste exercício, vamos desenvolver uma aplicação que renderiza uma lista de e-mails. A aplicação deve permitir que seja possível marcar um e-mail como lido ou não lido.

Quando todos os e-mail da lista estiverem lidos, um `alert` deve ser exibido informando que todas mensagens foram lidas!

Para realizar esse exercício você deve:

- usar somente componentes funcionais;
- gerenciar o estado da aplicação usando o hook useState;
- sua aplicação deve salvar no estado uma lista com os e-mails recebidos;
- cada email recebido deve ter a seguinte estrutura:

```javascript
{
  id: 1,
  title: "Título do email",
  status: 0
}
```
- use o `status: 0` para e-mails não lidos e `status: 1` para e-mails lidos;
- cada e-mail da lista deve ser renderizado junto com dois botões: um para marcar o e-mail como lido e outro para marcá-lo como não lido;
- além da lista de e-mails, também deve haver dois botões de controle: um para marcar todos os e-mails como lidos e outro para marcar todos os e-mails como não lidos;
- usar o hook `useEffect` para “monitorar” as mudanças que acontecerem na lista de e-mails salva no estado;
- sempre que todos os e-mails da lista forem marcados como “lidos”, exiba um `alert` com a mensagem: “Parabéns! Você leu todas suas mensagens!”.  

Veja abaixo um exemplo de como sua aplicação deve se comportar:

<img src="https://content-assets.betrybe.com/prod/d601c12f-51df-4f4e-bf51-e8d90f263c22-Exemplo%20da%20aplica%C3%A7%C3%A3o%20TrybeMail.gif">