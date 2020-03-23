const Companies = require("../models/Companies");
const Beads     = require('../models/Bead');

module.exports = {
    async index(req, res){
        const { companyTalaoId } = req.params;
        const bead = await Beads.findByPk(companyTalaoId, {
            include: { association: 'companies'}
        });

        return res.json(bead.companies)
    },
    async store(req,res){
        const { companyTalaoId } = req.params;
        const {companyName, cnpj, telephone, address, zipCode, number} = req.body;

        const beads = await Beads.findByPk(companyTalaoId);
        if(!beads){
            return res.status(400).json({error: 'usuario nao existe'})
        }
        const companies = await Companies.create({
            companyName, 
            cnpj, 
            telephone, 
            address, 
            zipCode, 
            number, 
            companyTalaoId,
        });
        
        return res.json(companies);
    }
}