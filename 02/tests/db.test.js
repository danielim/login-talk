"use strict";

var assert = require('assert');
var sqlite3 = require('sqlite3').verbose();
var dba = require('../db.js');

describe("Database", function() {
    var db = new sqlite3.Database(':memory:')

    before(function(done) {
        dba.genDB(db);
        done();
    });

    beforeEach(function(done) {
        db.serialize(function(){
            dba.addUser(db, 'bob', 'password')
            dba.addUser(db, 'jane', 'qweQWE123!@#')
        });
        done();
    });

    afterEach(function(done) {
        db.serialize(function(){
            dba.wipeDB(db, "DELETE FROM accounts");
        });
        done();
    });
    after(function(done){
        db.close();
        done();
    });

    describe("db_addUser", function(){
        it('should save username and password without error', function(done){
            db.serialize(function(){
                dba.addUser(db, 'steve', 'qW1@')

                db.get('SELECT uname, pw FROM accounts WHERE uname= ?', "steve", function (err, row) {
                    assert.equal('steve', row.uname)
                    assert.equal('qW1@', row.pw)
                })

                //assert.equal("bob", data[0]);
            });
            done();
        });
    });

    describe("dba_getUsers", function(){
        it('should load all user and passwords without error', function(done) {
            dba.getUsers(db, function(data){
                assert.equal(2, data.length);
            });
            done();
        });
    });
});

