"use strict";

var assert = require("assert");
var sqlite3 = require("sqlite3").verbose();
var index = require("../index.js");
var dba = require("../db.js");
var request = require("supertest");

describe("Express Server", function() {
    var db = new sqlite3.Database(":memory:")

    before(function(done) {
        dba.genDB(db);
        index.server;
        done();
    });

    beforeEach(function(done) {
        db.serialize(function(){
            dba.addUser(db, "bob", "password")
            dba.addUser(db, "jane", "qweQWE123!@#")
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
        index.server.close();
        done();
    });

    describe("get", function(){
        it("should return index.html with inputs username and password when requesting /", function(done) {
            request(index.server)
                .get("/")
                .expect(200)
                .expect(/name="password"/)
                .expect(/name="username"/, done);
        });
    });

    describe("post", function(){
        it("should return 'Authenticated [user]'  when successful POSTing to /", function(done) {
            request(index.server)
                .post("/")
                .type('form')
                .send({ "username": "bob", "password": "password" })
                .expect(200)
                .expect(/Authenticated/)
                .expect(/bob/, done);
        });

        it("should return 'Authentication Failed'  when successful POSTing to /", function(done) {
            request(index.server)
                .post("/")
                .type('form')
                .send({ "username": "bob", "password": "unicorn" })
                .expect(403)
                .expect("Authentication Failed", done);
        });
    });
});

