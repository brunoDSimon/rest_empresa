const express = require("express");
const routes = require("./router");

require("./database")

const app = express();

app.use(express.json());
app.use(routes);
app.use((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Credentials', true);
})
app.listen(3333);