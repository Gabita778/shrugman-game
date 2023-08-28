const prompt = require('prompt-sync')({ sigint: true });

// making a list of properties in my class
class ShrugmanGame {
    constructor(word) {
        this.word = word.toLowerCase(); //movie or book
        this.attempts = 0; // how many attempts has use the user
        this.maxAttempts = 10; // all attempts user has
        this.gameOver = false; // lose or win scenario
    }
}

// what else in my list?