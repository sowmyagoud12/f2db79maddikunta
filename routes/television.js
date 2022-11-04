var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('television', { title: 'Search Result for Television' });
});

module.exports = router;
