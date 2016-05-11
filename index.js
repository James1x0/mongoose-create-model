var mongoose = require('mongoose');

module.exports = function (name, schema) {
  try {
    return mongoose.model(name);
  } catch ( err ) {
    return mongoose.model(name, schema);
  }
};

