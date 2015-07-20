var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express', body_css : 'home' });
});

router.get('/lola', function(req, res, next) {
	res.render('lola', { title: 'perro lola', body_css : 'interna' });
});

router.post('/lola', function(req, res, next) {
	res.render('lola', { title: 'perro lola', body_css : 'interna', posts: req.body });
});

module.exports = router;
