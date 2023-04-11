// Importando o arquivo criado no app.js
const app = require('./app');

// Utilizando método listen, adicionando como parâmetro a porta 
// e a callback com mensagem desejada para o servidor
app.listen(3001, () => console.log('Servidor Online on port 3001'));