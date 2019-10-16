const express = require('express');

const routes = require('./routes/routes');
const variaveis = require('./configs/variaveis');

const app = express();

app.use(routes)

app.listen(variaveis.porta, () => console.log(`A api está rodando na porta ${variaveis.porta}`));
