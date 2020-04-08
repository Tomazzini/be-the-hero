// importando o pacote express
const express = require('express');
// importando a rota de dentro do routes.js
const routes = require('./routes');
// importando modo de segurança
const cors = require('cors');

// criando a aplicação
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// porta da aplicação como se fosse a porta 8080
app.listen(3333);
