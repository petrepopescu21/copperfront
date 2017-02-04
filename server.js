const http = require('http');
const express = require('express');
const config = require('./config');
const app = express();
app.set('root', __dirname);
app.set('config', config);

require('./config/routes').init(app);
require('./config/express').init(app);

if (!module.parent) {
  server = http.createServer(app);
  server.listen(config.port || 3000, config.hostname, () => {
    let addr = server.address();
    // console.info('---');
    // console.info('%s is running.', config.app.name);
    // console.info('Hostname: %s', addr.address);
    // console.info('Port: %s', addr.port);
    // console.info('Environment: %s', ENV.toLowerCase());
    // console.info('Access: %s', config.baseUrl);
    //console.info('---');
    
  });
}

module.exports = app;
