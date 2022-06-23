var express = require('express');
var homeRouter=require("./routes/homeRouter"); 
var loginRouter=require("./routes/loginRouter");
var ejs = require('ejs');

var app = express();
app.listen(5000);

app.engine('html',ejs.renderFile)
app.set('view engine', 'html')

app.use("/",homeRouter);
app.use("/login",loginRouter);