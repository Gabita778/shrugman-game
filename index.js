const prompt = require('prompt-sync')({ sigint: true });

// making a list of properties in my class
class ShrugmanGame {
    constructor(word) {
        this.word = word.toLowerCase(); //movie or book

        // this two proprieties will build my shrugman
        this.attempts = 0; // how many attempts has use the user
        this.maxAttempts = 10; // all attempts user has

        this.gameOver = false; // lose or win scenario
    }
}

// Answering my own questions?


// what else in my list?
// player one: give the secret word
// player two: guess the secret word
// who to apply the guesses

// Where does the list of words come from? thinking.....
// R: everything must come from my class

// I need to do something with the symbols a method maybe?

// How do I create the underscores!!!!!?

// possible methods:

    // Replace letters with underscores thinking in the spaces,
    // Checking if the guessed letter is in the word,  return this.word.includes(letter);


    // Counting attempts
    // Replace underscore for letters or symbol maybe this is a IF situation or another possible solution this.guesses.push(letter);
    // occurrences of the letter are revealed when the guess is correct
    // telling that the letter was already guess this.guesses.includes(letter)
    // how many attempts left ?
        
    ShrugmanGame.attemptsLeft() {
        return this.maxAttempts - this.attempts;
      }

    // Once the game is over, print a list of all games played, and whether they were a win or a loss
    // where do I place this box? this mus be an Array
