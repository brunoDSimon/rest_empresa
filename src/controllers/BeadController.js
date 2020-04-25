const Bead = require("../models/Bead");
const Companies = require("../models/Companies");
const Users = require("../models/Users");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const cors = require('cors');
const express = require("express");
const app = express();
const pdf = require('html-pdf');
const ejs = require('ejs');
let path = require("path");
var moment = require('moment');


module.exports = {
    async index(req, res){
        const {companyID, dateEntry, userID, dateFinal} = req.query;
        if(companyID != undefined && userID !=undefined && isNaN(userID)){
            const bead = await Bead.findAll({
                attributes: [[ Sequelize.literal('COALESCE(value, 0) * COALESCE(amount, 0)'), 'valueTotal'],'id', 'value', 'amount', 'patch', 'dateEntry', 'companyID', 'reference'],
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
            where: {
                dateEntry: {
                    [Op.between]: [dateEntry, dateFinal]
                }
            }
               
            })
            return res.status(200).json({data:bead, messege: 'requisação efetuada com sucesso'});

        }else{
            const bead = await Bead.findAll({
                attributes: [[ Sequelize.literal('COALESCE(value, 0) * COALESCE(amount, 0)'), 'valueTotal'],'id', 'value', 'amount', 'patch', 'dateEntry', 'companyID', 'reference'],
                include: [{
                    association: 'companies',
                    attributes: ["companyName"],
                    where: {id : companyID}, 
                },
                {
                    association: 'users',
                    attributes: ['name'],
                    // where: {id: userID}
                }
            ],
            where: {
                dateEntry: {
                    [Op.between]: [dateEntry, dateFinal]
                }
            }
            })
            return res.status(200).json({data:bead, messege: 'requisação efetuada com sucesso'});
        }
       return res.status(400).json({messege:'erro ao invocar serviço'})
    },
    async store(req,res){
        const {reference, value, amount, patch, dateEntry, companyID, userID} = req.body;
        if(reference, value, amount, patch, dateEntry, companyID, userID ){
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
    },
    async pdf(req,res){
        let options ={
            "format": "A4",
            "orientation": "portrait",
            "border": "0", 
        }
        const {companyID, dateEntry, userID, dateFinal} = req.query;
        if(companyID != undefined && userID !=undefined && isNaN(userID)){
            const bead = await Bead.findAll({
                attributes: [[ Sequelize.literal('COALESCE(value, 0) * COALESCE(amount, 0)'), 'valueTotal'],'id', 'value', 'amount', 'patch', 'dateEntry', 'companyID', 'reference'],
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
            where: {
                dateEntry: {
                    [Op.between]: [dateEntry, dateFinal]
                }
            }
               
            })
            return res.status(200).json({data:bead, messege: 'requisação efetuada com sucesso'});

        }else{
            const bead = await Bead.findAll({
                attributes: [[ Sequelize.literal('COALESCE(value, 0) * COALESCE(amount, 0)'), 'valueTotal'],'id', 'value', 'amount', 'patch', 'dateEntry', 'companyID', 'reference'],
                include: [{
                    association: 'companies',
                    attributes: ["companyName"],
                    where: {id : companyID}, 
                },
                {
                    association: 'users',
                    attributes: ['name'],
                    // where: {id: userID}
                }
            ],
            where: {
                dateEntry: {
                    [Op.between]: [dateEntry, dateFinal]
                }
            }
            })
            ejs.renderFile(path.join(__dirname, './index.ejs'),{bead:bead, moment:moment}, (err, html)=>{
                if(err){
                    console.log(err)
                }else{
                    pdf.create(html, options).toFile("../meupdf.pdf", (error,res) =>{
                        if(error){
                            console.log(error)
                        }else{
                             console.log(res);
                        }
                    })
                }
            })
            return res.status(200).json({messege: 'requisação efetuada com sucesso', data:bead});
        }
       
       
        return res.status(200).json({messege: 'pdf gerado com sucesso'})
    }
}