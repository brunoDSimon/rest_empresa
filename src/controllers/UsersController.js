const Bead = require("../models/Bead");
const Companies = require("../models/Companies");
const Sequelize = require('sequelize');
const Users = require('../models/Users');
module.exports = {
    async index(req,res){
        const users = await Users.findAll();
        return res.json(users)
    },
    async store(req,res){
        const {email, password, name} = req.body;

        const users = await Users.create({email, password, name});
        return res.json(users);
    }
}