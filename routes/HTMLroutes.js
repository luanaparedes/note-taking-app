const HTMLroutes = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid')

app.get('/notes', function(req,res){
    res.sendfile(__dirname + '/public/notes.html');
});

app.get('/*', function(req,res){
    res.sendfile(__dirname + '/public/index.html');
});
