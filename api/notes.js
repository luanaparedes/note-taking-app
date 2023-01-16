const apiRoutes = require('express').Router();
const { application } = require('express');
const fs = require('fs');
const uniqid = require('uniqid')

// read db.json and return saved notes

application.get('/api/notes', (req, res) => {
   res.sendFile(path.join(__dirname, '../db/db.json'));
});

// GET Route for retrieving api route information

apiRoutes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data))
    );
})

apiRoutes.post('/', (req, res) => {
    const {noteTitle, noteText} = req.body;

    if (req.body) {
        const newNote = {
            noteTitle,
            noteText,
            note_id: uniqid(),
        };

        readAndAppend(newNote, '.db/db.json');
    } else {
        console.log('Error adding note');
    }
})
