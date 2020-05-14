const fs = require('fs');
const path = require('path');

const getScores = async () => {
  try {
    const data = fs.readFileSync(path.join(__dirname, './scores.json'));
    const scores = JSON.parse(data);
    return getTopFiveScores(scores);
  } catch (e) {
    console.log(e.message);
  }
}

function getTopFiveScores(scores) {
  const sortedScores = scores.sort(function(a,b) {
    return b.points - a.points
  })
  return sortedScores.slice(0,5);
}

module.exports = getScores