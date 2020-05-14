const express = require('express');
const router = express.Router();
const submitEntry = require('../submitEntry');

const scoreController = require('../controllers/scoreController');

router.get('/getScores',
  scoreController.getScores
);

router.post('/submitEntry', async (req, res) => {
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

module.exports = router;