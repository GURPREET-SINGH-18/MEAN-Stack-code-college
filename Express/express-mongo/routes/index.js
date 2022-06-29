var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient


router.get('/', function(req, res, next) {
  var url = "mongodb://127.0.0.1:27017"
  MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true},function(err,db) {
    if(err) throw err;
    var dbo=db.db("mydb");
    var myobj={"name":"oppo","address":"mumbai"};
    dbo.collection("customers").insertOne(myobj,function(err,res) {
      if(err) throw err;
      console.log("1 document inserted successfully");
      db.close();
    })
  })
  res.send("ok");
});

module.exports = router;
