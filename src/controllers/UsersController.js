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
        var salt = await bcrypt.genSalt(10);
        var hash = await bcrypt.hashSync(password, salt)
        const users = await Users.create({email: email, password: hash, name: name});
        return res.json(users);
    }
}