'use strict';

module.exports.init = initModels;

function initModels(app,Models) {

  const modelsPath = app.get('root') + '/api/models/';

  ['Schema'].forEach((model) => {
    Models[model] = require(modelsPath + model);
  });
};