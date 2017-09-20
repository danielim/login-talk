var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var dbpath = './login.db';
var db = new sqlite3.Database(dbpath);
var dba = require('./db.js');

db.serialize(function(){
    dba.genDB(db);
    dba.wipeDB(db);
    dba.addUser(db, 'bob', 'password')
    dba.addUser(db, 'jane', 'qweQWE123!@#')
    dba.getUsers(db, function(i){console.log(i)});
});
