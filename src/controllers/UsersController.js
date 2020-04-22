const Bead = require("../models/Bead");
const Companies = require("../models/Companies");
const Sequelize = require('sequelize');
const Users = require('../models/Users');
const bcrypt = require('bcryptjs');

module.exports = {
    async index(req,res){
        const users = await Users.findAll({
            attributes: ['id','email', 'name']
        });
        return res.status(200).json({data:users, messeger: 'requisição efetuada com sucesso'})
    },
    async store(req,res){
        const {email, password, name} = req.body;
        const users = await Users.findOne({email, where: {email:email}});
       
        if(!users){
            var salt = await bcrypt.genSalt(10);
            var hash = await bcrypt.hashSync(password, salt)
            await Users.create({email: email, password: hash, name: name});
            return res.status(200).json({messege: 'Usuario criado'});
        }else{
            res.status(200).json({messege: 'Usuario existente'});
        }
    },
    async auth(req,res){
        const {email, password} = req.body

        const user = await Users.findOne({email, where: {email:email}}).then(user =>{
            if(user){
                var correct = bcrypt.compareSync(password, user.password)
                if(correct){
                    res.status(200).json({user, messege: 'requisição efetuada com sucesso'})
                }else{
                    res.status(200).send({messege: 'verificar usuario ou senha'})
                }
            }else{
                res.status(200).send({messege: 'verificar usuario ou senha'})
            }
        })
        
    }
}