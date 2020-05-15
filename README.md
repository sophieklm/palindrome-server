## Palindrome Game Service

##### Approach:
My main concern was keeping the code structure neat, for my own sanity and for future development. 

If a new endpoint needs adding in the future, this can be added to `/routes/routes.js` and the controller/services updated to handle the rest.

The scoreController handles both getting the list of top scores and submitting an entry. The score is submitted by the controller, then checked and saved using the scoreService and helper functions. I wanted to keep files small and easily readable, so separated out concerns as I thought was most appropriate.

With a real database I wouldn't need some of the file helpers and would instead have some of the score check/save/validation functions as methods on the Score model.

##### Structure:
```
framework
│   README.md
│   index.js
|   index.html
|   package.json
│
└───controllers
│   │   scoreController.js
│   
└───db
|   │   scores.json
|
└───helpers
|   |   helpers.js
|
└───routes
|   |   routes.js
|
└───services
|   |   scoreService.js
|
└───tests
```

##### Run:
`npm start`

##### Navigate to:
`http://localhost:3000/`

##### Run Tests: 
`npm test`