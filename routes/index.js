/* jshint esversion: 6 */
const express = require('express');
var router    = express.Router();

router.get('/test', function(req, res) {
  var body = { body: 'hooray! Welcome to my api!' };
  res.status(200).json(body);
});

require('./cats')(router);

module.exports = router;
