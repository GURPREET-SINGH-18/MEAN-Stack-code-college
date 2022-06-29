var express = require('express');
var router=express.Router();

// router.get("/",(req, res) => {
//     res.send("Home page");
// });

router.get("/",(req, res) => {
    rows=[
        {name: "Kratika"},
        {name: "Guru"},
        {name: "Guri"}
    ]
    res.render('home',rows);
});

module.exports=router;