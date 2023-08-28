const prompt = require('prompt-sync')({ sigint: true });


let n = prompt("guess the word!?");



// making a list of properties in my class
class ShrugManGame {
    constructor(word) {
        this.word = word.toLowerCase(); //movie or book

        // this two proprieties will build my shrugman? ¯\_(:/)_/¯
        this.attempts = this.attempts ; // (start at 0) how many attempts has use the user
        this.maxAttempts = maxAttempts; // (end at 10) all attempts user has

        this.gameOver = false; // lose or win scenario
    }

    isLetterHere(letter) {
        // Check if the guessed letter is in the word
        return this.word.includes(letter);
      }
}

const game = new ShrugManGame("Everything Everywhere All at Once");
console.log(game);

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

       // return this.word.replace(/[a-z]/g, '_'); I don't like much regex but that maybe will work
    //    I not sure it will count spaces

   // Checking if the guessed letter is in the word,

      //isLetterIn function() that return this.word.includes(letter);


    
    // Replace underscore for letters or symbol maybe this is a IF situation or another possible solution this.guesses.push(letter);
    // occurrences of the letter are revealed when the guess is correct
    // telling that the letter was already guess this.guesses.includes(letter)

    // how many attempts left ?
    // Counting attempts
        
      // attemptsLeft  function() that  return this.maxAttempts - this.attempts ;
      

    // Once the game is over, print a list of all games played, and whether they were a win or a loss
    // where do I place this box? this mus be an Array
