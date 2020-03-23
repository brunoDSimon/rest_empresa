const express = require('express');
const BeadController = require("./controllers/BeadController");
const CompaniesControler = require("./controllers/CompaniesController")
const routes = express.Router();

routes.get('/companies', CompaniesControler.index);
routes.post('/companies', CompaniesControler.store);

routes.get('/companies/:companyID/beads', BeadController.index);
routes.post('/companies/:companyID/beads', BeadController.store);
module.exports = routes;