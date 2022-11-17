const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const morgran = require('morgan');
const cors = require('cors');
//middlewares
app.use(require('cors')());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgran('combined'));
app.use(cors({
    credentials:true,
    origin:"*"
}));
process.on('uncaughtException', function (err) {
    console.error(err);
  });
require('./helpers/routeHandler')(app);
//listen to server
app.listen(process.env.PORT,"0.0.0.0", ()=>{});