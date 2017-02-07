const http = require('http');
const express = require('express');
const config = require('./config');

const app = express();
const Models = {};
app.set('root', __dirname);
app.set('config', config);

require('./config/express').init(app);
require('./config/routes').init(app);
require('./config/models').init(app,Models);

if (!module.parent) {
  server = http.createServer(app);
  server.listen(80);
}

module.exports = app;