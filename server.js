const express = require('express');
const bcrypt = require('bcrypt');
const configureMiddleware = require('./auth/configureMiddleware');
const apiRouter = require('./api/api-router');
const server = express();
configureMiddleware(server);
 
server.use('/api',apiRouter)


 


module.exports = server;
