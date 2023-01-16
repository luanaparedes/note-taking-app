const express = require('express');
const app = express;
const index = require('./public/assets/js/index');
const PORT = process.env.PORT || 3001;

const path = require('path');

// parsing JSON
app.use(express.json());
// urlencoded?
app.use('/index', index);

//express status?

//require routes
require('./api/HTMLroutes');
require('./api/notes');

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);