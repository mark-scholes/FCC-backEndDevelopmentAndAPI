let express = require('express');
let app = express();
const path = require('path')

const Port = 3000; 

const absolutePath = __dirname + '/views/index.html'

console.log(absolutePath)

app.get("/", function(req, res){
    res.sendFile(absolutePath)
})



































 module.exports = app;
