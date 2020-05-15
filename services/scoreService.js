const { sort } = require('../helpers/sort');
const { checkScore, saveScore, getScoresFromFile } = require('../helpers/scoreHelpers');

module.exports.getTopScores = async ({ limit = 5 }) => {
  try {
    let scores = await getScoresFromFile();
    sortedScores = sort(scores);
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
