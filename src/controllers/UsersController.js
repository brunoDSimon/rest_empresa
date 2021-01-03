const Bead = require("../models/Bead");
const Companies = require("../models/Companies");
const Sequelize = require('sequelize');
const Users = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function gerarToken(params ={}) {
    return jwt.sign(params, authConfig.secret,{
        expiresIn: 86400,
    })
}

module.exports = {
    
    async index(req,res){
        Users.findAll({
            attributes: ['id','email', 'name']
        }).then((user) =>{
            return res.status(200).json({status:{value:'0', messege: 'requisicão efetuada com sucesso' },data:{user}})
        }).catch(error =>{
            res.status(500).send({status:{value: '-1', description: 'Falha interna',messege: error}})
        });
    },

    async store(req,res){
        const {email, password, name} = req.body;
        const users = await Users.findOne({email, where: {email:email}});
       
        if(!users){
            var salt = await bcrypt.genSalt(10);
            var hash = await bcrypt.hashSync(password, salt)
           Users.create({email: email, password: hash, name: name}).then((user) =>{
               return res.status(200).json({status:{value: '0',messege: 'requisição efetuada com sucesso'},messege: 'Usuario criado'});
           }).catch(error =>{
                res.status(500).send({status:{value: '-1', description: 'Falha interna',messege: error}})
           });
        }else{
            res.status(200).json({status:{value: '0',messege: 'requisição efetuada com sucesso'},data:'E-mail já cadastrado'});
        }
    },

    async auth(req,res){
        const {email, password} = req.body
        Users.findOne({email, where: {email:email}}).then(user =>{
            if(user){
                var correct = bcrypt.compareSync(password, user.password)
                if(correct){
                    res.status(200).send({status:{value: '0',messege: 'requisição efetuada com sucesso' },data:{user,token:gerarToken({id:user.id})}})
                }else{
                    res.status(401).send({status:{value: '-1', messege: 'verificar usuario ou senha'}})
                }
            }else{
                res.status(401).send({status:{value: '-1',messege: 'verificar usuario ou senha'}} )
            }
        }).catch(error =>{
            res.status(401).send({status:{value: '-1' ,messege: 'servico fora'}} )
        })
        
    }
}