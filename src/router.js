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
routes.post('/companies',authMiddlewares, CompaniesControler.store);
routes.get('/companies/verificarCNPJ/:cnpj',authMiddlewares, CompaniesControler.return);
routes.delete('/companies/:id',authMiddlewares, CompaniesControler.delete);
routes.post('/companies/update/:id',authMiddlewares, CompaniesControler.update);

routes.get('/bead',authMiddlewares, BeadController.index);
routes.post('/bead', BeadController.store);
routes.post('/bead/update/:id',authMiddlewares, BeadController.update);
routes.delete('/bead/:id',authMiddlewares, BeadController.delete);
routes.get('/pdf',authMiddlewares, BeadController.pdf)
routes.get('/bead/sumTotalGroupCompanies',authMiddlewares, BeadController.SumCompaniesValueTotal);
routes.get('/bead/sumGroupMonth',authMiddlewares, BeadController.sumGroupMonth);
routes.get('/bead/SumGroupMonthCompanies',authMiddlewares, BeadController.sumGroupMonthCompanies);
routes.get('/bead/totalSumPeriod',authMiddlewares, BeadController.totalSumPeriod);
routes.get('/bead/geratePaymentUser',authMiddlewares, BeadController.generatePayment);
routes.get('/bead/consultValuesPaymentUser',authMiddlewares, BeadController.consultValuesPaymentUser);
routes.get('/bead/pesquisaID', BeadController.indexOne);

routes.post('/user',authMiddlewares, UsersController.store)
routes.get('/user',authMiddlewares, UsersController.index);
routes.post('/auth', UsersController.auth);

module.exports = routes;
