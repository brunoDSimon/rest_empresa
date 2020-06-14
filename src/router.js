const express = require('express');
const BeadController = require("./controllers/BeadController");
const CompaniesControler = require("./controllers/CompaniesController")
const UsersController = require("./controllers/UsersController");
const authMiddlewares = require('./middlewares/auth');

const routes = express.Router();

routes.use((req,res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type', 'Accept', 'Authorization');
    if(res.method == 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
    }
        
    next()
})
// routes.use(authMiddlewares);
routes.get('/companies',authMiddlewares, CompaniesControler.index);
// routes.get('/companies', CompaniesControler.index);
routes.post('/companies',authMiddlewares, CompaniesControler.store);
routes.get('/companies/verificarCNPJ/:cnpj',authMiddlewares, CompaniesControler.return);
routes.delete('/companies/:id',authMiddlewares, CompaniesControler.delete);
routes.post('/companies/update/:id',authMiddlewares, CompaniesControler.update);

routes.get('/beads',authMiddlewares, BeadController.index);
routes.post('/beads',authMiddlewares, BeadController.store);
routes.post('/beads/:id',authMiddlewares, BeadController.update);
routes.delete('/beads/:id',authMiddlewares, BeadController.delete);
routes.get('/pdf',authMiddlewares, BeadController.pdf)
routes.get('/bead/sumTotalGroupCompanies',authMiddlewares, BeadController.SumCompaniesValueTotal);
routes.get('/bead/sumGroupMonth',authMiddlewares, BeadController.sumGroupMonth);
routes.get('/bead/SumGroupMonthCompanies',authMiddlewares, BeadController.sumGroupMonthCompanies);
routes.get('/bead/totalSumPeriod',authMiddlewares, BeadController.totalSumPeriod);

routes.post('/user', UsersController.store)
routes.get('/user', UsersController.index);
routes.post('/auth', UsersController.auth);

module.exports = routes;
