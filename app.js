const express = require('express');
var path = require('path');

const app = express();

app.use(express.json());

app.use('/static', express.static(path.join(__dirname, 'public')))

module.exports = app;
