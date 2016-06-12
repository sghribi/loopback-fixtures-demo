var path = require('path');
var loopback = require('loopback');

module.exports = function(app) {
  app.use(loopback.static(path.resolve(__dirname, '../client')));
};
