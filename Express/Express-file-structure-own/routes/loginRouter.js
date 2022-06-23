var express = require('express');
var router=express.Router();
var bodyParser = require('body-parser');

var url=bodyParser.urlencoded({ extended:false });

router.get("/",(req, res) => {
    res.render("login");
});

router.post("/",url,(req, res) => {
    res.send(req.body)
});

router.get("/xyz",(req, res) => {
    res.send("xyz page")
})

module.exports=router;