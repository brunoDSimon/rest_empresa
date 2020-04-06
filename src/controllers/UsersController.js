const Bead = require("../models/Bead");
const Companies = require("../models/Companies");
const Sequelize = require('sequelize');
const Users = require('../models/Users');
module.exports = {
    async index(req,res){
        const users = await Users.findAll({
            attributes: ['email', 'name']
        });
        return res.status(200).json({data:users, messeger: 'requisição efetuada com sucesso'})
    },
    async store(req,res){
        const {email, password, name} = req.body;

        const users = await Users.create({email, password, name});
        return res.json(users);
    }
}