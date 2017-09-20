"use strict";

var assert = require('assert');
var sqlite3 = require('sqlite3').verbose()

describe("Database", function() {
    var db = new sqlite3.Database(':memory:')

    before(function(done) {
        db.run('CREATE TABLE accounts (uname TEXT, pw BLOB);');
        done();
    });

    beforeEach(function(done) {
        db.serialize(function(){
            var stmt = db.prepare('INSERT INTO accounts VALUES (?, ?)')
            stmt.run('bob', 'password')
            stmt.run('jane', 'qweQWE123!@#')

            stmt.finalize()
        });
        done();
    });

    afterEach(function(done) {
        db.serialize(function(){
            db.run("DELETE FROM accounts");
        });
        done();
    });
    after(function(done){
        db.close();
        done();
    });

    describe("db_save", function(){
        it('should save without error', function(done){
            db.serialize(function(){
                var stmt = db.prepare('INSERT INTO accounts VALUES (?, ?)')
                stmt.run('steve', 'qW1@')

                stmt.finalize()

                db.get('SELECT uname, pw FROM accounts WHERE uname= ?', "steve", function (err, row) {
                    assert.equal('steve', row.uname)
                    assert.equal('qW1@', row.pw)
                })

                //assert.equal("bob", data[0]);
            });
            done();
        });
    });

    describe("db_load", function(){
        it('should load data without error', function(done) {
            db.serialize(function(){
                var stmt = db.prepare('INSERT INTO accounts VALUES (?, ?)')
                stmt.run('bob', 'password')
                stmt.run('jane', 'qweQWE123!@#')

                stmt.finalize()

                db.all('SELECT rowid AS id, uname, pw FROM accounts', function (err, row) {
                    assert.equal(2, row.length);
                })
            });
            done();
        });
    });
});

