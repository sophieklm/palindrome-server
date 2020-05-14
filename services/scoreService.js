const fs = require('fs');
const path = require('path');

const getScores = async () => {
  try {
    const data = fs.readFileSync(path.join(__dirname, '../scores.json'));
    const scores = JSON.parse(data);
    return scores;
  } catch (error) {
    console.log('Something went wrong: getScores', error);
    throw new Error(error);
  }
}

const sort = (array) => {
  return array.sort(function(a,b) {
    return b.points - a.points
  })
}

module.exports.getTopScores = async ({ limit = 5 }) => {
  try {
    let scores = await getScores();
    sortedScores = sort(scores);
    return sortedScores.slice(0,limit)
  } catch (error) {
    console.log('Something went wrong: getTopScores', error);
    throw new Error(error);
  }
}

