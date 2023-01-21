const app = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid')
const {readFromFile, readAndAppend} = require("../helpers/fsUtils");

// GET Route for retrieving api route information

app.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data))
    );
})

app.post('/api/notes', (req, res) => {
    const {title, text} = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uniqid(),
        };
        
        readAndAppend(newNote, './db/db.json');
    } else {
        console.log('Error adding note');
    }
})

module.exports = app;