const rootRoutes = require('./root-routes');
const currencyRoutes = require('./currency-routes');
module.exports = function(app, db) {
  rootRoutes(app, db);
  currencyRoutes(app, db);
  // Other route groups could go here, in the future
};