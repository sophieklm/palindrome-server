const express = require('express');
const router = express.Router();

const scoreController = require('../controllers/scoreController');

router.get('/getScores', scoreController.getScores);

router.post('/submitEntry', scoreController.createScore);

module.exports = router;