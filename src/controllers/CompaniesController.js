const Companies = require("../models/Companies");
const Beads     = require('../models/Bead');

module.exports = {
    async index(req, res){
      
        const companies = await Companies.findAll();
        return res.status(200).json({data:companies, messege: 'requisição efetuada com sucesso' })
    },
    async store(req,res){
        const {cnpj} = req.params;
        const {companyName, telephone, address, zipCode, number} = req.body;
        const companies = await Companies.findOne({cnpj, where: {cnpj:cnpj}});

        if(!companies){
            if(companyName, cnpj, telephone,address,zipCode, number){
                const companies = await Companies.create({companyName, cnpj, telephone, address, zipCode, number});
                return res.status(200).json({companies, messege: 'enviado com sucesso'});
            }else{
                res.status(400).json({messege: 'campos não foram enviados'})
            }
        }else{
            return res.status(401).json({messege: 'CNPJ EXISTENTE'})
        }
       
    },
    async update(req, res) {
        const {id} = req.params
        const {companyName, cnpj, telephone, address, zipCode, number} = req.body;
        const companies = await Companies.update({companyName, cnpj, telephone, address, zipCode, number},{
            where: {id: id}
        });
        return res.status(200).json({companies, messege: 'update feito com sucesso'});
    },

    async delete(req,res){
        const {id} = req.params;
        const companies = await Companies.destroy({
            where:{
                id: id
            }
        });
        if(!companies){
            return res.status(400).json({messege: 'empresa nao existe'})
        }else{
            return res.status(200).json({companies, messege: 'empresa apagada com sucesso'})
        }
    }
}