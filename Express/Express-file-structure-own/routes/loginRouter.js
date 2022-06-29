var express = require('express');
var router=express.Router();
var bodyParser = require('body-parser');

var url=bodyParser.urlencoded({ extended:false });

router.get("/",(req, res) => {
    res.render("login",{msg:""});
});
router.post("/",url,(req, res) => {
    id=req.body.id
    obj={}
    password=req.body.password
    if (id=="guru"&&password=="1234"){
        obj={msg:"Login Successfully"}
    }
    else{
        obj={msg:"Login Failure"}
    }
    res.render("login",obj);
});

router.get("/xyz",(req, res) => {
    res.send("xyz page")
})

module.exports=router;