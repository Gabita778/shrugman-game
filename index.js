const prompt = require('prompt-sync')({ sigint: true });

// making a list of properties in my class
class ShrugManGame {
    constructor(strings, maxAttempts) {
        this.strings = strings.toLowerCase(); //movie or book
        this.attempts = 0; // how many attempts has use the user
        this.maxAttempts = maxAttempts; // all attempts user has
        this.guesses = [] //store letters
        this.gameOver = false; // lose or win scenario
        this.secretWord = this.hidesStrings()
    }

    // Replace letters with underscores thinking in the spaces,
    hidesStrings() {

        return this.strings.split('').map(char => (char === ' ' ? ' ' : '_')).join(' ');
    }

    // Check if the guessed letter is in the word
    isLetterHere(letter) {

        return this.strings.includes(letter);
    }

    isGameOver() {
        return this.gameOver;
    }

    makeGuess(letter) {
        letter = letter.toLowerCase();
    
        if (this.gameOver) {
            return 'The game is over.';
        } else if (this.guesses.includes(letter)) {
            return 'You already guessed that letter.';
        } else {
            // I push the letter into the array of guesses if it isn't there already
            this.guesses.push(letter);
        }
    
        // I check if the letter is in the word

    let letterFound = false;

   
    for (let i = 0; i < this.strings.length; i++) {
        if (this.secretWord[i] === '_' && this.strings[i] === letter) {
          
            this.secretWord = this.secretWord.substring(0, i) + letter + this.secretWord.substring(i + 1);
            letterFound = true;
        }
    }

    // If the guessed letter was not found 
    if (!letterFound) {
        this.attempts++;
    }
    
        // The game is won
        if (this.secretWord === this.strings) {
            this.gameOver = true;
            return 'Congratulations! You won!';
        }
    
        // The game is lost
        if (this.attempts >= this.maxAttempts) {
            this.gameOver = true;
            return 'Sorry, you lost. The word was: ' + this.strings;
        }
    
        return 'Keep guessing';
    }
} 

const game = new ShrugManGame("Everything Everywhere All at Once");


console.log(game);
console.log("undercover strings");
console.log(game.hidesStrings());
console.log("check letter");
console.log(game.isLetterHere("e"));

console.log("replace letter");
console.log(game.makeGuess("e"));

console.log("letter is in the []");
console.log(game.guesses);



// *** Important: I need a loop to check the class ShrugManGame but I don't know if it's something with functions***





// Answering my own questions?


// what else in my list?
// player one: give the secret word is the code
// player two: guess the secret word is the prompt
// where to apply the guesses? to the object in the class

// Where does the list of words come from? thinking.....
// R: everything must come from my class, no better a function 

// I need to do something with the symbols a method maybe?

// How do I create the underscores!!!!!?

// possible methods:

    // Replace letters with underscores thinking in the spaces,

       // return this.word.replace(/[a-z]/g, '_'); I don't like much regex but that maybe will work
    //    I not sure it will count spaces

   // Checking if the guessed letter is in the word, =========done==========
      //isLetterIn function() that return this.word.includes(letter);
      // telling that the letter was already guess this.guesses.includes(letter)

    
    // Replace underscore for letters or symbol maybe this is a IF situation or another possible solution this.guesses.push(letter);
    // occurrences of the letter are revealed when the guess is correct

   

    // how many attempts left ? ===========done=======
    // Counting attempts
    // attemptsLeft  function() that  return this.maxAttempts - this.attempts ;
      

    // Once the game is over, print a list of all games played, and whether they were a win or a loss
    // where do I place this box? this mus be an Array
