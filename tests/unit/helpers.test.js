const { checkScore, sortScores } = require('../../helpers/helpers');

describe('checkScore', () => {
  it('should return the length of a string if it is a palindrome', () => {
    const string = 'a man a plan a canal panama'

    // not sure if this should return string length including spaces
    // currently ignores spaces in score
    expect(checkScore(string)).toEqual(21);
  });

  it('should return 0 if a string is not a palindrome', () => {
    const string = 'this is not a palindrome'

    expect(checkScore(string)).toEqual(0);
  });
});

describe('sortScores', () => {
  it('should sort an array by points value', () => {
    const array = [ 
      { name: 'dasdasd', points: 23 }, 
      { name: 'qweqwe', points: 1 }, 
      { name: 'dsfffkk', points: 12 } 
    ]
    const sortedArray = [ 
      { name: 'dasdasd', points: 23 }, 
      { name: 'dsfffkk', points: 12 },
      { name: 'qweqwe', points: 1 }
    ]

    expect(sortScores(array)).toEqual(sortedArray);
  });
});