const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const routes = require('./routes/index.js');
const ErrorHandler = require('./utils/ErrorHandler')
const Cors = require('./utils/Cors')
require('./db.js');

const server = express();
server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(Cors);

server.use('/api', routes);

// Error catching endware.
server.use(ErrorHandler);

module.exports = server;
