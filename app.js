var AnimalNamer = require('animal-namer');
var namer       = new AnimalNamer();
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var siteRouter = express.Router();

app.use(siteRouter);

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

siteRouter.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

namer.loadSync();

var port = process.env.PORT || 8080;
var siteRouter = express.Router();
var router = express.Router();

router.get('/name', function(req, res) {
	namer.name().then(function (name) {
		res.json({ name : name });
	}); 
});

router.get('/name/:letter', function(req, res) {
	namer.name(req.params.letter).then(function (name) {
		res.json({ name : name });
	}); 
});

router.get('/animal', function(req, res) {
	namer.animal().then(function (animal) {
		res.json({ animal : animal });
	}); 
});

router.get('/animal/:letter', function(req, res) {
	namer.animal(req.params.letter).then(function (animal) {
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
	res.json({ about : "animal-namer API", version: "1.0" });
});

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/api', router);

app.listen(port);
console.log('Now using port: ' + port);