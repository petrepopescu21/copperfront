'use strict';

module.exports.init = initRoutes;

function initRoutes(app) {
  let routesPath = app.get('root') + '/api/routes';

  app.use('/', require(routesPath + '/root'));
};