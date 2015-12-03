var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BoxClox - A roller derby penalty box clocking app' });
});

router.get('/timer', function(req, res, next) {
  res.render('./timer.ejs', { title: 'BoxClox -- timer title here'});
});

router.get('/basic', function(req, res, next) {
  res.render('./basic.ejs', { title: 'BoxClox -- timer title here'});
});

module.exports = router;
