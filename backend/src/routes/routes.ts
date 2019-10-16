import * as express from 'express';

const controller = require('../controllers/controller');

const routes = express.Router();

routes.get('/', controller.teste);

module.exports = routes;
