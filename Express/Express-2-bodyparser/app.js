var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.listen(3000,()=>{
    console.log('listening on http://localhost:3000')
})

var url=bodyParser.urlencoded({ extended:true});

app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html");
})

app.post('/xyz',url,(req, res)=>{
    a=req.body.t1;
    res.send("Hello "+a);
});