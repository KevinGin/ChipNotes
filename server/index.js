const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const apiRouter = require('./routes/api.js');
const port = process.env.PORT || 8080;


const app = express();

app.use(require('morgan')('dev'));  // for Development

// routes
// app.use('/api', apiRouter);

// static
app.use(express.static(path.join(__dirname + '/../client/')));


const server = app.listen(port);
console.log("Server listening on port " + port);