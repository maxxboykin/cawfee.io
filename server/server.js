const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

//body parsing middleware
app.use(express.json());

//auth and api routes
app.use('/auth', require('./auth'));
app.use('/api', require('./api'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '--', 'public/index.html')));

app.use(express.static(path.join(__dirname, '--', 'public')));

