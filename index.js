var express = require('express');
var bodyParser = require('body-parser')
const getScores = require('./getScores');

var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json())

app.get('/', function(req, res) {
	res.render('index.html');
});

app.get('/api/getScores', async (req, res) => {
	await getScores()
					.then(scores => res.json(scores))
});

var port = 3000;
app.listen(port, function() {
	console.log('Server', process.pid, 'listening on port', port);
});
