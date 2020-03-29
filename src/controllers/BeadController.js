const Bead = require("../models/Bead");
const Companies = require("../models/Companies");
const Users = require("../models/Users");
const Sequelize = require('sequelize');

module.exports = {
    async index(req, res){
        const {companyID, dateEntry, userID} = req.params;
        if(companyID != undefined && userID !=undefined){
            const bead = await Bead.findAll({
                attributes: [[ Sequelize.literal('COALESCE(value, 0) * COALESCE(amount, 0)'), 'valueTotal'],'id', 'value', 'amount', 'patch', 'dateEntry', 'companyID'],
                include: [{
                    association: 'companies',
                    attributes: ["companyName"],
                    where: {id : companyID}, 
                },
                {
                    association: 'users',
                    attributes: ['name'],
                    where: {id: userID}
                }
            ],
                where: {dateEntry: dateEntry},
               
            })
            return res.status(200).json({bead, messege: 'requisação efetuada com sucesso'});

        }else{
            const bead = await Bead.findAll({
                attributes: [[ Sequelize.literal('COALESCE(value, 0) * COALESCE(amount, 0)'), 'valueTotal'],'id', 'value', 'amount', 'patch', 'dateEntry', 'companyID',],
                include: [{
                    association: 'companies',
                    attributes: ["companyName"],
                },
                {
                    association: 'users',
                    attributes: ['name'],
                    where: {id: userID}
                }
            ],
                where: {dateEntry: dateEntry}
            })
            return res.status(200).json({bead, messege: 'requisação efetuada com sucesso'});
        }
        // const companies = await Companies.findByPk(companyID,{
        //     where: {id: companyID},
        //     include: {association: 'beads'}
        // })
        // return res.json(companies.bead)
    },
    async store(req,res){
        const { companyID, userID} = req.params;
        const {reference, value, amount, patch, dateEntry} = req.body;
        const bead = await Bead.create({reference, value,amount,  patch, dateEntry, companyID,userID});
        return res.json(bead);
    }
}