var express = require('express');
var app = express();
const store = require("store2");

app.listen(3500, () => {
    console.log('listening on port 3500 http://localhost:3500')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('/checklogin', (req, res) => {
    a = [{
        username: "guru",
        password: "123"
    }, {
        username: "kratika",
        "password": "1234"
    }];
    for (var i = 0; i < a.length; i++) {
        if (a[i].username == req.query.username && a[i].password == req.query.password) {
            res.send(req.query);
        }
    }
    //Setting store key and data
    store('Profile', {name: 'Adam', age: 27, salary: 3452}); 
    res.send('no credentials found');
})