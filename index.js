const prompt = require('prompt-sync')({ sigint: true });

// making a list of properties in my class
class ShrugManGame {
    constructor(strings, maxAttempts) {
        this.strings = strings.toLowerCase(); //movie or book
        this.attempts = 0; // how many attempts has use the user
        this.maxAttempts = maxAttempts; // all attempts user has
        this.guesses = [] //store letters
        this.gameOver = false; // lose or win scenario
        this.secretWord = this. hidesStrings()
    }

    // Replace letters with underscores thinking in the spaces,
    hidesStrings() {

        return this.strings.replace(/[a-z]/g, '_');
    }

     // Check if the guessed letter is in the word
    isLetterHere(letter) {
       
        return this.strings.includes(letter);
    }

    makeGuess(letter) {

    //    letter = letter.toLowerCase(); // where to apply

        if (this.gameOver) {
            return 'The game is over.';
        } else if (this.guesses.includes(letter)) {
           
            return 'You already guessed that letter.';
        } else {
            // I push the letter in the array of guesses if it isn't there already
            this.guesses.push(letter);
        }

        // I check if the letter is in the word
        if (this.isLetterHere(letter)) {

            this.secretWord = this.secretWord.split('').map((char, index) => (char === "_" && this.strings[index] === letter ? letter : char)) 
                .join('');

        } else {
            // Increment the wrong attempts
            this.attempts++;
        }

        // The game is won
        if (this.hidesStrings === this.strings) {
            this.gameOver = true;
            return 'Congratulations! You won!';
        }

        // The game is lost
        if (this.attempts >= this.maxAttempts) {
            this.gameOver = true;
            return 'Sorry, you lost. The word was: ' + this.strings;
        }

        return `Keep guessing`;
    }
}

const game = new ShrugManGame("Everything Everywhere All at Once");


console.log(game);
console.log(game.hidesStrings());
console.log(game. isLetterHere());
console.log(game.makeGuess());



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
