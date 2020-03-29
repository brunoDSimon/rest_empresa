const express = require('express');
const BeadController = require("./controllers/BeadController");
const CompaniesControler = require("./controllers/CompaniesController")
const UsersController = require("./controllers/UsersController");
const routes = express.Router();

routes.get('/companies', CompaniesControler.index);
routes.post('/companies', CompaniesControler.store);
routes.delete('/companies/:id', CompaniesControler.delete);
routes.post('/companies/:id', CompaniesControler.update);

routes.get('/beads/:userID/:dateEntry/:companyID?', BeadController.index);
routes.post('/beads/:userID/:companyID', BeadController.store);
routes.post('/beads/:id', BeadController.update);
routes.delete('/beads/:id', BeadController.delete);

routes.post('/user', UsersController.store)
routes.get('/user', UsersController.index);

module.exports = routes;