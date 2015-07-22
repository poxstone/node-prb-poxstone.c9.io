var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express', body_css : 'home' });
});

//router.get(/lola?(\/:id)?/, function(req, res, next) {
router.get('/lola(/:id)?/', function(req, res, next) {
	res.render('lola', { title: 'perro lola', body_css : 'internas',params:req.params });
});

router.post('/lola', function(req, res, next) {
	res.render('lola', { title: 'perro lola', body_css : 'interna', posts: req.body });
});

router.post('/json', function(req, res, next) {
	res.json({
		name : 'oscar',
		email : 'poxstone@gmail.com',
		work : 'eforcers',
		week : '5',
		number : '7',
	});
});

router.post('/jsonp', function(req, res, next) {
	res.json({
		name : 'oscar',
		email : 'poxstone@gmail.com',
		work : 'nuberti',
		week : '4',
		number : '8',
	});
});


module.exports = router;
