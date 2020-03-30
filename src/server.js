const express = require("express");
const routes = require("./router");
const cors = require('cors');

require("./database")

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors())
app.listen(3333);