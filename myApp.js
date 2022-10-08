const express = require('express');
const dotenv = require('dotenv').config()

const app = express();

let PORT = process.env.PORT || 3000

const absolutePath = __dirname + '/views/index.html'


app.get("/", function(req, res){
    res.sendFile(absolutePath)

})

// added a get request to a hard coded json object
app.get("/json", function(req, res){

    process.env.MESSAGE_STYLE === "uppercase" ? 
    res.json({"message": "Hello json".toUpperCase()}) : res.json({"message": "Hello json"})
})


app.use('/public', express.static('public'))



































 module.exports = app;
