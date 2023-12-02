const express = require('express');
const connect = require('./config/database')





const app = express();
app.listen(3000, async () => {
    console.log("server is running")
    await connect();
    console.log("mongodb connect")

 

});
