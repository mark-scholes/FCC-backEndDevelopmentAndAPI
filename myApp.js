let express = require('express');
let app = express();

const absolutePath = __dirname + '/views/index.html'


app.get("/", function(req, res){
    res.sendFile(absolutePath)

})

// added a get request to a hard coded json object
app.get("/json", function(req, res){
    res.json({"message": "Hello json"})
})

app.use('/public', express.static('public'))



































 module.exports = app;
