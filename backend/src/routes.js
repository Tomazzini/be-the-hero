const express = require('express');
const OngController = require('./Controllers/OngController');
const IncidentController = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

const routes = express.Router();

//rota para logar no sistema
routes.post('/sessions', SessionController.create);

// rota para listar todas as ongs
routes.get('/ongs', OngController.index);

// rota para cadastrar ongs
routes.post('/ongs', OngController.create);

// rota para listar incidents(casos) especificos de uma ong
routes.get('/profile', ProfileController.index);

///////////////////////////////////////////////

// rota para listas todos incidents(casos)
routes.get('/incidents', IncidentController.index);

// rota para cadastro de incidents(casos)
routes.post('/incidents', IncidentController.create);

// deletar um incident(caso)
routes.delete('/incidents/:id', IncidentController.delete);

//exportando um modulo no node
module.exports = routes;