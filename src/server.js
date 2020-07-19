const express = require("express");
const routes = require("./router");
const cors = require("cors");

require("./database")

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333
app.listen(PORT);
