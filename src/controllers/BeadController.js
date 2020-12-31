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
const pdf2base64 = require('pdf-to-base64');
var fs = require('fs');


module.exports = {
    async index(req, res){
        const {companyID, dateEntry, dateFinal, dateFinalNotNul} = req.query;
        let objetWhere;
        if(dateFinalNotNul == 'true'){
            objetWhere =  {
                dateEntry: {
                    [Op.between]: [dateEntry, dateFinal]
                },
                dateFinal: {[Op.ne]: null}

            }
        }else{
            objetWhere =  {
                dateEntry: {
                    [Op.between]: [dateEntry, dateFinal]
                },
                dateFinal: {[Op.eq]: null}
            }
        }

        Bead.findAll({
            attributes: [[ Sequelize.literal('COALESCE(value, 0) * COALESCE(amount, 0)'), 'valueTotal'],'id', 'value', 'amount', 'patch', 'dateEntry','dateFinal', 'companyID', 'reference'],
            include: [{
                association: 'companies',
                attributes: ["companyName"],
                where: {id : companyID}, 
            },
            {
                association: 'users',
                attributes: ['name'],
            }
        ],
        where:objetWhere
            
        }).then((bead) =>{
            let sumValueTotal =  bead.reduce((sum,item) =>{
                return sum + item.amount * item.value
            },0)
            let sumBags =  bead.reduce((sum,item) =>{
                return sum + item.amount 
            },0)
            return res.status(200).json({status:{value: '0',messege: 'requisição efetuada com sucesso'},data:{bead, sumValueTotal, sumBags}});
        }).catch(erro =>{
            return res.status(200).json({status:{value: '-1',messege: 'Error consulta invalida'}});
        })
        

        
    },
    async indexOne(req,res){
        const {id} = req.query;
        console.log(id);
        Bead.findOne({where:{ id:id }}).then((bead) =>{
            return res.status(200).json({status:{value: '0',messege: 'requisição efetuada com sucesso'},data:{bead}}); 
        }).catch((error) =>{
            return res.status(400).json({status:{value: '-1', description:'Falha interna',error}});
        })
    },
    async store(req,res){
        const {reference, value, amount, patch, dateEntry, companyID, userID} = req.body;
           Bead.create({reference, value,amount,  patch, dateEntry, companyID,userID}).then(bead =>{
               console.log(bead)
             return res.status(200).json({status:{value: '0',messege: 'requisição efetuada com sucesso'},data:{bead}});
           }).catch(error =>{
            return res.status(400).json({status:{value: '-1', description:'Falha interna',error},messege: 'campos nao informado'});
           });

    },
    async update(req,res){
        const {id} = req.params
        const {reference, value, amount, patch, dateEntry,dateFinal, companyID,userID} = req.body;
      Bead.update({reference, value, amount, patch, dateEntry, dateFinal, companyID,userID},{
            where: {id: id}
        }).then(bead =>{
            return res.status(200).json({status:{value: '0',messege: 'requisição efetuada com sucesso'},data:{bead}})
        }).catch(error =>{
            return res.status(400).json({status:{value: '-1', description:'Falha interna'},messege: 'fail update'})
        })
    },
    async delete(req,res){
        const {id} = req.params;

      Bead.destroy({ where:{id: id}}).then(bead =>{
        return res.status(200).json({status:{value: '0',messege: 'requisição efetuada com sucesso'},data:bead})
      }).catch(err =>{
        return res.status(400).json({status:{value: '-1', description:'Falha interna'},err, messege: 'fail destroy'})

      })
    },
    async pdf(req,res){
        let options ={
            "format": "A4",
            "orientation": "portrait",
            "border": "0", 
            
        }
        const {companyID, dateEntry, dateFinal} = req.query;
        const bead = await Bead.findAll({
            attributes: [[ Sequelize.literal('COALESCE(value, 0) * COALESCE(amount, 0)'), 'valueTotal'],'id', 'value', 'amount', 'patch', 'dateEntry','dateFinal', 'companyID', 'reference'],
            include: [{
                association: 'companies',
                attributes: ["companyName"],
                where: {id : companyID}, 
            }],
        where: {
            dateEntry: {
                [Op.between]: [dateEntry, dateFinal]
            },
             dateFinal: {[Op.ne]: null}
            
        }
        }).then(bead =>{
            if(!bead.length){
                return res.status(200).json({status:{value: '-1',messege: 'Periodo não possui dados'}});
            }else{
                let sumValueTotal = bead.reduce((sum,item) =>{
                    return sum + item.amount * item.value
                },0)
                let sumBags = bead.reduce((sum,item) =>{
                    return sum + item.amount 
                },0)
                ejs.renderFile(path.join(__dirname, '../views/beads/index.ejs'),{bead:bead, moment:moment, dateEntry:dateEntry,dateFinal:dateFinal, sumValueTotal:sumValueTotal, sumBags:sumBags}, 
                (err, html)=>{
                    if(err){
                        console.log(err)
                    }else{
                     pdf.create(html, options).toFile("pdf/relatorio_de_pagamento.pdf", (error,res) =>{
                         if(error){
                             console.log(error)
                         }else{
                            fazerBase()
                         }
                     })    
                    }
                })
            }
           function fazerBase(){
               pdf2base64("pdf/relatorio_de_pagamento.pdf").then(response => {    
                  return res.status(200).json({status:{value: '0',messege: 'requisição efetuada com sucesso'},data:{base64:response}})
              }).catch((error) => {
                  return res.status(400).json({status:{value: '-1', description:'Falha interna',messege: 'erro inesperado'}});
              })  
           } 
        }).catch(erro =>{
            return res.status(400).json({status:{value: '-1', description:'Falha interna'},messege: 'erro inesperado'});
        })
       
      
    },

    async SumCompaniesValueTotal(req,res){
        Bead.findAll({
            attributes: [[Sequelize.literal('SUM(Bead.value * Bead.amount)'), 'resultGroup']],
            include: [{
                association: 'companies',
                attributes: ["companyName"],
            }],
            group:['companyID'],
        }).then(beadSumGroup =>{
            return res.status(200).send({status:{value: '0',messege: 'requisição efetuada com sucesso'},data:{beadSumGroup }});
        }).catch(erro =>{
            return res.status(400).json({status:{value: '-1', description:'Falha interna'},messege: 'erro inesperado'});
        });
    },

    async sumGroupMonth(req,res){
        const beadGroupMonth = await Bead.findAll({
            attributes: [[Sequelize.literal('SUM(Bead.value * Bead.amount)'), 'resultGroup'],[Sequelize.fn('date_format', Sequelize.col('dateEntry'), '%Y-%m'), 'periodo']],
            group:[Sequelize.fn('date_format', Sequelize.col('dateEntry'), '%Y-%m')],
            order:[Sequelize.fn('date_format', Sequelize.col('dateEntry'), '%Y-%m')]
        })
        return res.status(200).send({status:{value: '0',messege: 'requisição efetuada com sucesso'},data:{beadGroupMonth }});
    },

    async sumGroupMonthCompanies(req,res){
        const beadSumGroupMonth = await Bead.findAll({
            attributes: [[Sequelize.literal('SUM(Bead.value * Bead.amount)'), 'resultGroup'],[Sequelize.fn('date_format', Sequelize.col('dateEntry'), '%Y-%m'), 'periodo']],
            include: [{
                association: 'companies',
                attributes: ["companyName"],
            }],
            group:['companyID',Sequelize.fn('date_format', Sequelize.col('dateEntry'), '%Y-%m')],
            order:[Sequelize.fn('date_format', Sequelize.col('dateEntry'), '%Y-%m')]
        });
        return res.status(200).send({status:{value: '0',messege: 'requisição efetuada com sucesso'},data:beadSumGroupMonth});
    },

    async totalSumPeriod(req,res){
        const {dateEntry, dateFinal} = req.query;
        Bead.findAll({
            attributes: [[Sequelize.literal('SUM(Bead.value * Bead.amount)'), 'valueTotal'],[Sequelize.literal('SUM(Bead.amount)'), 'sumBags']],
            where:{
                dateEntry:{
                    [Op.between]: [dateEntry, dateFinal]
                }
            } 
        }).then(totalSumPeriod => {
            return res.status(200).send({status:{value: '0',messege: 'requisição efetuada com sucesso'},data:{totalSumPeriod, periodo:{dateEntry,dateFinal}}});
        }).catch(error => {
            return res.status(400).json({status:{value: '-1', description:'Falha interna'},messege: 'erro inesperado'});
        });
    },

    async generatePayment(req,res, next){
        let options ={
            "format": "A4",
            "orientation": "portrait",
            "border": "0", 
            
        }
        const {userID, dateEntry, dateFinal, companyID, descont} = req.query;
        const bead = await Bead.findAll({
            // attributes: [[ Sequelize.literal(`(COALESCE(value, 0) - ${descont}) * COALESCE(amount, 0)`), 'valueTotal'],[ Sequelize.literal(`COALESCE(value, 0)- ${descont}`), 'value'], 'id', 'amount', 'patch', 'dateEntry', 'companyID', 'reference'],
            attributes: [[ Sequelize.literal(`COALESCE(value, 0)- ${descont}`), 'value'], 'id', 'amount', 'patch', 'dateEntry','dateFinal', 'companyID', 'reference'],
            include: [
            {
                association: 'companies',
                attributes: ["companyName"],
                // where: {id : companyID}, 
            },
            {
                association: 'users',
                attributes: ['name'],
                where: {id: userID}
            }],
            where: {
                dateEntry: {
                    [Op.between]: [dateEntry, dateFinal]
                },
                dateFinal: {[Op.ne]: null}

            },
            order:[['dateEntry', 'DESC']]
            
        }).then(bead =>{
            if(!bead.length){
                return res.status(200).json({status:{value: '0',messege: 'requisição efetuada com sucesso'}, data:{bead}});
            }else{
                let sumValueTotal = bead.reduce((sum,item) =>{
                    return sum + item.amount * item.value
                },0)
                let sumBags = bead.reduce((sum,item) =>{
                    return sum + item.amount 
                },0)
                ejs.renderFile(path.join(__dirname, '../views/beads/paymentUser.ejs'),{moment:moment,data:{bead, moment, dateEntry, dateFinal, sumValueTotal, sumBags}}, 
               (err, html)=>{
                   if(err){
                       console.log(err)
                   }else{
                    pdf.create(html, options).toFile("pdf/relatorio_de_pagamento_user.pdf", (error,res) =>{
                        if(error){
                            console.log(error)
                        }else{
                            createBase()
                        }
                    })    
                   }
               })
            }
            function createBase(){
                pdf2base64("pdf/relatorio_de_pagamento_user.pdf").then(response => {    
                    var base64 = response;
                    return res.status(200).json({status:{value: '0',messege: 'requisição efetuada com sucesso'}, data:{base64}});
                    }).catch(
                        (error) => {
                        return res.status(400).json({status:{value: '-1', description:'Falha interna'},messege: 'erro inesperado'});
                    })
            }
        }).catch(erro =>{
            return res.status(400).json({status:{value: '-1', description:'Falha interna'},messege: 'erro inesperado'});
        })
       
    },

    async consultValuesPaymentUser(req, res, next){
        const {userID, dateEntry, dateFinal, descont, dateFinalNotNul} = req.query;
        let objetWhere;
        if(dateFinalNotNul == 'true'){
            objetWhere =  {
                dateEntry: {
                    [Op.between]: [dateEntry, dateFinal]
                },
                dateFinal: {[Op.ne]: null}

            }
        }else{
            objetWhere =  {
                dateEntry: {
                    [Op.between]: [dateEntry, dateFinal]
                },
                dateFinal: {[Op.eq]: null}
            }
        }
        Bead.findAll({
            attributes: [[ Sequelize.literal(`(COALESCE(value, 0)- ${descont}) * COALESCE(amount, 0)`), 'valueTotal'],[ Sequelize.literal(`COALESCE(value, 0)- ${descont}`), 'value'], 'id', 'amount', 'patch', 'dateEntry','dateFinal', 'companyID', 'reference'],
            include: [
            {
                association: 'companies',
                attributes: ["companyName"],
            },
            {
                association: 'users',
                attributes: ['name'],
                where: {id: userID}
            }],
            where: objetWhere,
            order:[['dateEntry', 'DESC']]
            
        }).then(bead =>{
            let sumValueTotal = bead.reduce((sum,item) =>{
                return sum + item.amount * item.value
            },0)
            let sumBags = bead.reduce((sum,item) =>{
                return sum + item.amount 
            },0)       
            return res.status(200).json({status:{value: '0',messege: 'requisição efetuada com sucesso'}, data:{bead,sumValueTotal,sumBags,descont}});
        }).catch(error =>{
            return res.status(200).json({status:{value: '-1',messege: 'Error consulta invalida'}});
        })
       
    }
}