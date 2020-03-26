const Bead = require("../models/Bead");
const Companies = require("../models/Companies");
const Sequelize = require('sequelize');

module.exports = {
    async index(req, res){
        const {companyID, dateEntry} = req.params;
        if(companyID != undefined){
            const bead = await Bead.findAll({
                attributes: [[ Sequelize.literal('COALESCE(value, 0) * COALESCE(amount, 0)'), 'valueTotal'],'id', 'value', 'amount', 'patch', 'dateEntry', 'companyID'],
                include: [{
                    association: 'companies',
                    attributes: ["companyName"],
                    where: {id : companyID}, 
                }],
                where: {dateEntry: dateEntry}
            })
            return res.json(bead);

        }else{
            const bead = await Bead.findAll({
                attributes: ['id', 'value', 'amount', 'patch', 'dateEntry', 'companyID',],
                include: [{
                    association: 'companies',
                    attributes: ["companyName"],
                }],
                where: {dateEntry: dateEntry}
            })
            return res.json(bead);
        }
        // const companies = await Companies.findByPk(companyID,{
        //     where: {id: companyID},
        //     include: {association: 'beads'}
        // })
        // return res.json(companies.bead)
    },
    async store(req,res){
        const { companyID} = req.params;
        const {reference, value, amount, patch, dateEntry} = req.body;
        const bead = await Bead.create({reference, value,amount,  patch, dateEntry, companyID,});
        return res.json(bead);
    }
}