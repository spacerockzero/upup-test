var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Online' });
});

router.get('/offline', function(req, res, next) {
  res.render('offline', { title: 'Offline' });
});

module.exports = router;
