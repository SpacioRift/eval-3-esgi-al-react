const express = require("express");
const authRoute =require("./route/auth.route.js");
const userRoute =require("./route/user.route.js");
const {connect} = require('./model/connexion.js');
const sync = require('./model/sync.js');
const app = express();

const database = async () => {
    await connect();
    await sync();
}
database();

app.use(express.json());

app.use('/auth',authRoute);
app.use('/user', userRoute);

module.exports = app;