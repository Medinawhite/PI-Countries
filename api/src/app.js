const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const errorHandler= require('./utils/Midlewares/ErrorHandler.js')
const setHeader = require('./utils/Midlewares/setHeaders.js');
require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
//Aqui importamos nuestro header
server.use(setHeader);

server.use('/api', routes);

//Este va a ser nuestro errorHandler
server.use(errorHandler)

module.exports = server;
