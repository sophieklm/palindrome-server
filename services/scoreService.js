const { sortScores, checkScore, saveScore, getScoresFromFile } = require('../helpers/helpers');

module.exports.getTopScores = async ({ limit = 5 }) => {
  try {
    let scores = await getScoresFromFile();
    const sortedScores = sortScores(scores);
    return sortedScores.slice(0,limit)
  } catch (error) {
    console.log('Something went wrong: getTopScores', error);
    throw new Error(error);
  }
}

module.exports.submitScore = async (req) => {
  let { name, word } = req.body;
  const score = checkScore(word);
  if (score > 0) {
    await saveScore(name, score);
  }
  return score;
}
