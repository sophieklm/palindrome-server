const fs = require('fs');
const path = require('path');

const clean = word => word.toLowerCase().replace(/[\W]/g, '');

const isPalindrome = (word) => {
  const cleanWord = clean(word);
  const reversedWord = cleanWord.split('').reverse().join('');
  return cleanWord === reversedWord;
}

const checkScore = word => isPalindrome(word) ? word.length : 0;

const saveScore = async (name, score) => {
  try {
    const scores = await getScoresFromFile();
    const newScore = { name: name, points: score.toString() }
    const updatedScores = [...scores, newScore]
    fs.writeFileSync(path.join(__dirname, '../scores.json'), JSON.stringify(updatedScores));
  } catch (error) {
    console.log('Something went wrong: saveScore', error);
    throw new Error(error);
  }
  return score;
}

const getScoresFromFile = async () => {
  try {
    const data = fs.readFileSync(path.join(__dirname, '../scores.json'));
    const scores = JSON.parse(data);
    return scores;
  } catch (error) {
    console.log('Something went wrong: getScoresFromFile', error);
    throw new Error(error);
  }
}

module.exports = { getScoresFromFile, saveScore, checkScore }

