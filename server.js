const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const path = require('path');

// parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//require routes
app.use(require('./api/notes'));
app.use(require('./api/HTMLroutes'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);