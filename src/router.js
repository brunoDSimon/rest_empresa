const express = require('express');
const BeadController = require("./controllers/BeadController");
const CompaniesControler = require("./controllers/CompaniesController")
const routes = express.Router();

routes.get('/beads', BeadController.index);
routes.post('/beads', BeadController.store);

routes.get('/beads/:companyTalaoId/companies', CompaniesControler.index);
routes.post('/beads/:companyTalaoId/companies', CompaniesControler.store);
module.exports = routes;