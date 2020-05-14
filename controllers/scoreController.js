const scoreService = require('../services/scoreService');

module.exports.getScores = async (req, res) => {
  try {
    const response = await scoreService.getTopScores(req.query);
    return res.send(response);
  } catch (error) {
    console.log('Something went wrong: getScores', error);
  }
}