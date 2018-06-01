var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('roman', { title: 'This is my page' });
});

module.exports = router;
