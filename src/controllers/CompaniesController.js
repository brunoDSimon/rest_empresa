const Companies = require("../models/Companies");
const Beads     = require('../models/Bead');

module.exports = {
    async index(req, res){
      
        const companies = await Companies.findAll();
        return res.json(companies)
    },
    async store(req,res){
        const {companyName, cnpj, telephone, address, zipCode, number} = req.body;

        const companies = await Companies.create({companyName, cnpj, telephone, address, zipCode, number});
        return res.json(companies);
    }
}