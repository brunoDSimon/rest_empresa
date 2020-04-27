const express = require('express');
const BeadController = require("./controllers/BeadController");
const CompaniesControler = require("./controllers/CompaniesController")
const UsersController = require("./controllers/UsersController");
const routes = express.Router();

routes.use((req,res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type', 'Accept', 'Authorization');
    if(res.method == 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
    }
        
    next()
})

routes.get('/companies', CompaniesControler.index);
routes.post('/companies', CompaniesControler.store);
routes.get('/companies/verificarCNPJ/:cnpj', CompaniesControler.return);
routes.delete('/companies/:id', CompaniesControler.delete);
routes.post('/companies/update/:id', CompaniesControler.update);

routes.get('/beads', BeadController.index);
routes.post('/beads', BeadController.store);
routes.post('/beads/:id', BeadController.update);
routes.delete('/beads/:id', BeadController.delete);
routes.get('/pdf', BeadController.pdf)
routes.get('/extrato', BeadController.extrato)

routes.post('/user', UsersController.store)
routes.get('/user', UsersController.index);
routes.post('/auth', UsersController.auth);

module.exports = routes;
