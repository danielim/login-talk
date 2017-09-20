"use strict";

var assert = require("assert");
var sqlite3 = require("sqlite3").verbose();
var dba = require("../db.js");

describe("Database", function() {
    var db = new sqlite3.Database(":memory:")

    before(function(done) {
        dba.genDB(db);
        done();
    });

    beforeEach(function(done) {
        dba.addUser(db, "bob", "password")
        dba.addUser(db, "jane", "qweQWE123!@#")
        done();
    });

    afterEach(function(done) {
        dba.wipeDB(db, "DELETE FROM accounts");
        done();
    });
    after(function(done){
        db.close();
        done();
    });

    describe("db_addUser", function(){
        it("should save username and password without error", function(done){
            db.serialize(function(){
                dba.addUser(db, "steve", "qW1@")

                db.get("SELECT uname, pw FROM accounts WHERE uname= ?", "steve", function (err, row) {
                    assert.equal("steve", row.uname)
                    assert.equal("qW1@", row.pw)
                })

                //assert.equal("bob", data[0]);
            });
            done();
        });
    });

    describe("dba_getUsers", function(){
        it("should load all user and passwords without error", function(done) {
            dba.getUsers(db, function(data){
                assert.equal(2, data.length);
            });
            done();
        });
    });

    describe("dba_getUser", function(){
        it("should load a user and password without error", function(done) {
            dba.getUser(db, "bob", function(data){
                assert.equal("bob", data.uname);
                assert.equal("password", data.pw);
            });
            done();
        });
    });

    describe("dba_validateUser", function(){
        it("should return true if user/password combination matches the database entry", function(done) {
            dba.validateUser(db, "bob", "password", function(bool){
                assert.equal(true, bool);
            });
            done();
        });

        it("should return false if user/password combination does NOT match a database entry", function(done) {
            dba.validateUser(db, "bob", "unicorns", function(bool){
                assert.equal(false, bool);
            });
            done();
        });
    });
});

