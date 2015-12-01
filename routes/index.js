var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./views/error.ejs', { title: 'BoxClox - A roller derby penalty timer app' });
});

router.get('/timer', function(req, res, next){
	res.render('./timer.ejs');
});

module.exports = router;
