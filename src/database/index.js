const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Bead = require('../models/Bead');
const Companies = require('../models/Companies');

const connection = new Sequelize(dbConfig);

Bead.init(connection);
Companies.init(connection);

Companies.associate(connection.models);
Bead.associate(connection.models)

module.exports = connection;