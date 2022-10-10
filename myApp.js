const express = require('express');
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')

const app = express();

let PORT = process.env.PORT || 3000


const homePath = __dirname + '/views/index.html'

const getCurrentTime = () => {
    return new Date().toString()
}

//logger logs request details: method, path and ip
app.use((req, res, next) => {
    let string = `${req.method} ${req.path} - ${req.ip}`
    console.log(string);      
     next();   
});

//added bodyparser middleware
app.use(bodyParser.urlencoded({extended: false}))


//returns html for home route
app.get("/", (req, res, ) =>{    
    res.sendFile(homePath)
});

// hard coded .env variable returns conditionally formated json
app.get("/json", (req, res) => {
    process.env.MESSAGE_STYLE === "uppercase" ? 
    res.json({"message": "the meaning of life the universe and everything".toUpperCase()}) : res.json({"message": "The meaning of life the universe and everything"})
});

// Route for /now which adds a key to the request object of .time. This calls a function to get current time. Once returned send as json   
app.get('/now', (req,res, next) =>{
    req.time = getCurrentTime();
    next();
}, (req, res) => {
    res.send({time: req.time})
});

// gets params from url and echos them back as json  
app.get('/:word/echo', (req, res) => {
    const {word} = req.params;
    res.json({
        echo: word
    });    
});

//gets query string from url and sends as json, POST gets form data from req.body and outputs as json. 
app.route('/name').get((req, res)=> {    
    const {first, last} = req.query;
    res.json({
        name: `${first} ${last}`
    })
})
.post((req,res) => {
    const {first,last} = req.body;
    res.json({
        name: `${first} ${last}`
    })
})



app.use('/public', express.static('public'))


 
































 module.exports = app;
