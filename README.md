## Palindrome Game Service

#### Objective

Create a Node.js web service to handle the back-end for the Palindrome game.

In the game a user can enter their name and a word. If the word is a palindrome then a high score should be recorded, the score being the length of the string. A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. E.g. “bob”, “a man a plan a canal panama”. It is up to you what are considered valid characters.

#### Endpoints

You should implement the following endpoints in your Node.js server, which are called from ng/app.js. You should not need to modify app.js or index.html but are free to do so.

##### GET /api/getScores

- No parameters required but ok to change this
- Returns the top 5 scores, each consisting of {name, points}

##### POST /api/submitEntry

- Parameter is an entry consisting of {name, word}
- Returns the points scored for the entry

#### Run:

```
npm install
npm start
```

#### Navigate to:

`http://localhost:3000/`

#### Run Tests:

`npm test`
