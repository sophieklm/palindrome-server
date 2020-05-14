var express = require('express');
var bodyParser = require('body-parser')
const getScores = require('./getScores');
const submitEntry = require('./submitEntry');

var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json())

app.get('/', function(req, res) {
	res.render('index.html');
});

app.get('/api/getScores', async (req, res) => {
	await getScores()
					.then(scores => res.json(scores))
					.catch(err => {
						if (err.status) {
							res.status(err.status).json({ message: err.message })
						} else {
							res.status(500).json({ message: err.message })
						}
					})
});

app.post('/api/submitEntry', async (req, res) => {
	await submitEntry(req)
					.then(score => res.json(score))
					.catch(err => {
						if (err.status) {
							res.status(err.status).json({ message: err.message })
						} else {
							res.status(500).json({ message: err.message })
						}
					})
});

var port = 3000;
app.listen(port, function() {
	console.log('Server', process.pid, 'listening on port', port);
});
