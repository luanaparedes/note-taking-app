const apiRoutes = require('express').Router();
const fs = require('fs');

// read db.json and return saved notes
module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    })
};

