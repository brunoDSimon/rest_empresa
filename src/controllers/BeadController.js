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
       return res.status(400).json({messege:'erro ao invocar serviço'})
    },
    async store(req,res){
        const { companyID, userID} = req.params;
        const {reference, value, amount, patch, dateEntry} = req.body;
        if(reference, value, amount, patch,dateEntry ){
            const bead = await Bead.create({reference, value,amount,  patch, dateEntry, companyID,userID});
            
            return res.status(200).json({bead, messege: 'enviado com sucesso'});
        }else{
            return res.status(400).json({ messege: 'campos nao informado'});
        }
    },
    async update(req,res){
        const {id} = req.params
        const {reference, value, amount, patch, dateEntry, companyID,userID} = req.body;
        Bead.update({reference, value, amount, patch, dateEntry, companyID,userID},{
            where: {id: id}
        }).then(bead =>{
            return res.status(200).json({bead, messege: 'update feito com sucesso'})

        }).catch(err =>{
            return res.status(400).json({err, messege: 'fail update'})
        });
    },
    async delete(req,res){
        const {id} = req.params;

      Bead.destroy({ where:{id: id}}).then(bead =>{
        return res.status(200).json({bead, messege: 'talao apagado com sucesso'})
      }).catch(err =>{
        return res.status(400).json({err, messege: 'fail destroy'})

      })
    }
}