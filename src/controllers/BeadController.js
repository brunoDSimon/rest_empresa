const Bead = require("../models/Bead");
const Companies = require("../models/Companies");

module.exports = {
    async index(req, res){
        const { companyID } = req.params;
        const bead = await Beads.findByPk(companyID, {
            include: { association: 'companies'}
        });

        return res.json(bead.companies)
    },
    async store(req,res){
        const { companyID } = req.params;
        const {reference, value, amount, patch} = req.body;
        const companies = await Companies.findOne({
            where: {id: companyID}
        });
        if(!companies){
            return res.status(400).json({error: 'Empresa não existente'})
        }
        const bead = await Bead.create({
            reference,
            value,
            amount, 
            patch, 
            companyID,
        });
        
        return res.json(bead);
    }
}