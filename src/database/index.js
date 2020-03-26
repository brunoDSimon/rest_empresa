const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Bead = require('../models/Bead');
const Companies = require('../models/Companies');
const Users = require("../models/Users")

const connection = new Sequelize(dbConfig);

Bead.init(connection);
Companies.init(connection);
Users.init(connection);

Users.associate(connection.models)
Companies.associate(connection.models);
Bead.associate(connection.models)

module.exports = connection;