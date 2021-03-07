const Bead = require("../models/Bead");
const Companies = require("../models/Companies");
const Users = require("../models/Users");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const cors = require('cors');
const express = require("express");
const app = express();
const pdf = require('html-pdf');
const ejs = require('ejs');
let path = require("path");
var moment = require('moment');
const pdf2base64 = require('pdf-to-base64');
var fs = require('fs');


module.exports = { 
    
}