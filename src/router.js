const express = require('express');
const BeadController = require("./controllers/BeadController");
const CompaniesControler = require("./controllers/CompaniesController")
const routes = express.Router();

routes.get('/companies', CompaniesControler.index);
routes.post('/companies', CompaniesControler.store);

routes.get('/beads', BeadController.index);
routes.post('/beads/:companyID', BeadController.store);
module.exports = routes;