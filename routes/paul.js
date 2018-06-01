var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('paul', { title: 'This is paul\'s page.' });
});

module.exports = router;
