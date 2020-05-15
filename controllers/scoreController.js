const scoreService = require('../services/scoreService');

module.exports.getScores = async (req, res) => {
  try {
    const response = await scoreService.getTopScores({ limit: 5 });
    return res.json(response);
  } catch (error) {
    console.log('Something went wrong: getScoresController', error);
  }
}

module.exports.createScore = async (req, res) => {
  try {
    const response = await scoreService.submitScore(req);
    return res.json(response);
  } catch (error) {
    console.log('Something went wrong: createScore', error);
  }
} 