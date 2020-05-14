const fs = require('fs');
const path = require('path');

const submitEntry = async (req) => {
  let { name, word } = req.body
  const score = checkScore(word)
  if (score > 0) {
    saveScore(name, score)
  }
  return score;
}

const checkScore = word => isPalindrome(word) ? word.length : 0;
const clean = word => word.toLowerCase().replace(/[\W]/g, '');

const isPalindrome = (word) => {
  const cleanWord = clean(word);
  const reversedWord = cleanWord.split('').reverse().join('');
  return cleanWord === reversedWord;
}

const saveScore = (name, score) => {
  const data = fs.readFileSync(path.join(__dirname, './scores.json'));
  const scores = JSON.parse(data);
  scores.push({ name: name, points: score.toString() })
  fs.writeFile('./scores.json', JSON.stringify(scores), function(err) {
    if (err) {
        return console.error(err);
    }});
}

module.exports = submitEntry