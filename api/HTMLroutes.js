const HTMLroutes = require('express').Router();
const path = require('path');


app.get('/notes', function(req,res){
    res.sendfile(__dirname + '/public/notes.html');
});

app.get('*', function(req,res){
    res.sendfile(__dirname + '/public/index.html');
});
 module.exports = HTMLroutes;