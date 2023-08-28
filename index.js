const prompt = require('prompt-sync')({ sigint: true });

// making a list of properties in my class
class ShrugmanGame {
    constructor(word) {
        this.word = word.toLowerCase(); //movie or book

        // this two propieties will build my shrugman
        this.attempts = 0; // how many attempts has use the user
        this.maxAttempts = 10; // all attempts user has

        this.gameOver = false; // lose or win scenario
    }
}

// Answering my own questions?


// what else in my list?

// Where does the list of words come from? thinking.....
// R: everything must come from my class
