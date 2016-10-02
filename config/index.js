var config;

try {
  config = require('.deploy.json');
} catch (err) {
  config = require('./dev.json');
}

module.exports = config;