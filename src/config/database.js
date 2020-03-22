const { Sequelize, Model, DataTypes } = require('sequelize');
const conection = new Sequelize('estudorest', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00",
    define:{
        timestamps: true,
        underscored: true,
    }
});

module.exports = conection;