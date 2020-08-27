const Companies = require("../models/Companies");
const Beads     = require('../models/Bead');

module.exports = {
    async index(req, res){
      
        const companies = await Companies.findAll();
        // return res.status(200).send({status:{value: '0',messege: 'requisição efetuada com sucesso'},data:companies, user: req.userId })
        return res.status(200).send({status:{value: '0',messege: 'requisição efetuada com sucesso'},data:{companies} })
    },
    async return(req,res){
        const {cnpj} = req.params;
        const companies = await Companies.findOne({cnpj, where: {cnpj:cnpj}});
        if(!companies){
            return res.status(200).send({status:{value: '0',messege: 'requisição efetuada com sucesso'},data: true, messege: 'Compania não existe'})
        }else{
            return res.status(200).send({status:{value: '0',messege: 'requisição efetuada com sucesso'},data: false, messege: 'Compania existente'})
        }
    },
    async store(req,res){
        const {companyName, telephone, address, zipCode, number, cnpj} = req.body;
        const companies = await Companies.findOne({cnpj, where: {cnpj:cnpj}});

        if(!companies){
            if(companyName, cnpj, telephone,address,zipCode, number){
                const companies = await Companies.create({companyName, cnpj, telephone, address, zipCode, number});
                return res.status(200).send({status:{value: '0',messege: 'requisição efetuada com sucesso'},data:{companies}});
            }else{
                res.status(400).json({status:{value: '-1',description: 'requisição efetuada com sucesso'},messege: 'campos não foram enviados'})
            }
        }else{
            return res.status(200).json({status:{value: '-1',description: 'requisição efetuada com sucesso'},messege: 'CNPJ EXISTENTE'})
        }
       
    },
    async update(req, res) {
        const {id} = req.params
        const {companyName, cnpj, telephone, address, zipCode, number} = req.body;
        const companies = await Companies.update({companyName, cnpj, telephone, address, zipCode, number},{
            where: {id: id}
        });
        return res.status(200).json({status:{value: '0',messege: 'requisição efetuada com sucesso'}, data:{companies}});
    },

    async delete(req,res){
        const {id} = req.params;
        const companies = await Companies.destroy({
            where:{
                id: id
            }
        });
        if(!companies){
            return res.status(400).json({status:{value: '-1',description: 'requisição efetuada com sucesso'},messege: 'empresa nao existe'})
        }else{
            return res.status(200).json({status:{value: '0',messege: 'requisição efetuada com sucesso'},companies, messege: 'empresa apagada com sucesso'})
        }
    }
}