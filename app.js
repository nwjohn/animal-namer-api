var namer = require('animal-namer');
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router(); 

router.get('/getName', function(req, res) {
	namer.name().then(function (name) {
		res.json({ name : name });	
	}); 
});

router.get('/getAnimal', function(req, res) {
	namer.animal().then(function (animal) {
		res.json({ animal : animal });	
	}); 
});

router.get('/adj', function(req, res) {
	namer.adj().then(function (adjective) {
		res.json({ adjective : adjective });	
	}); 
});

router.get('/adj/:letter', function(req, res) {
	namer.adj(req.params.letter).then(function (adjective) {
		res.json({ adjective : adjective });	
	}); 
});

router.get('/', function(req, res) {
	res.json({ message : "animal-namer API" });	
});

app.use('/api', router);

app.listen(port);
console.log('Now using port: ' + port);