const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json())

app.use('/api', require('./routes/routes'));

app.get('/', (req, res) => {
  res.render('index.html');
});

const port = 3000;
const server = app.listen(port, function() {
	console.log('Server', process.pid, 'listening on port', port);
});

module.exports = server;