var path = require("path");
var sqlite3 = require("sqlite3").verbose();
var dbpath = "./login.db";
var db = new sqlite3.Database(dbpath);
var dba = require("./db.js");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

db.serialize(function(){
    dba.genDB(db);
    dba.wipeDB(db);
    dba.addUser(db, "bob", "password");
});

app.use(express.static(path.resolve(__dirname + "/static")));

app.get("/", function (req, res) {
});

app.post("/", function (req, res) {
    if(!req.body){
        return res.sendStatus(400);
    } else {
        var data = req.body;
        console.log(data['username']);
        console.log(data['password']);
        dba.validateUser(db, data['username'], data['password'], function(bool){
            if(bool){
                return res.send("Authenticated " + data['username']);
            } else {
                return res.status(403).send("Authentication Failed");
            }
        });
    }
});

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log("Example app listening at port %s", port);
});

// nodejs or browser
if (typeof exports !== "undefined") {
    exports.server = server;
}
