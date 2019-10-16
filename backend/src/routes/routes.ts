import * as express from 'express';

const controller = require('../controllers/controller');

const routes = express.Router();

routes.get('/onAirConditioning', controller.onAirConditioning);
routes.get('/offAirConditioning', controller.offAirConditioning);
routes.get('/automaticMode', controller.automaticMode);

module.exports = routes;
