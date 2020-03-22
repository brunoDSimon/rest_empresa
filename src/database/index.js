const Sequelize = require('express');
const connection = require('../config/database');

const connection = new Sequelize(connection);

module.exports = connection;