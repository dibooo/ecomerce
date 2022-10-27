require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bodyParser=require('body-parser')
const apiRoutes = require('./routes/index');
const {admin,router} =require('./adminjs')  

const app = express();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(express.json());
app.use(admin.options.rootPath, router);

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
app.use('/', apiRoutes);



// Logic goes here

module.exports = app;