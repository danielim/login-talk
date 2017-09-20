var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var dbpath = './login.db';
var db = new sqlite3.Database(dbpath);

function genDB(){
    db.run('CREATE TABLE if not exists accounts (uname TEXT, pw BLOB);')
}

function wipeDB(){
    db.run('DELETE FROM accounts;');
}


function addUser(uname, pw){
    var stmt = db.prepare('INSERT INTO accounts VALUES (?, ?)')
    stmt.run(uname, pw)
    stmt.finalize()
}

function getUsers(callback){
    db.all('SELECT uname, pw FROM accounts', function (err, rows) {
        if(err != null){
            console.log(err);
            callback(err);
        }
        callback(rows);
    });
}

db.serialize(function(){
    genDB();
    wipeDB();
    addUser('bob', 'password')
    addUser('jane', 'qweQWE123!@#')
    getUsers(function(i){console.log(i)});
});

