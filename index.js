const prompt = require('prompt-sync')({ sigint: true });

// making a list of properties in my class
class ShrugManGame {
    constructor(strings, maxAttempts) {
        this.name = "ShrugManGame";
        this.strings = strings.toLowerCase(); //movie or book
        this.attempts = 0; // how many attempts has use the user
        this.maxAttempts = maxAttempts;
        this.guesses = []
        this.gameOver = false;
        this.secretWord = this.hidesStrings()
        this.charInStrings = this.long()
    }

    long() {
        return this.strings.length // i#ll like to tell how many different letters possible loop 
    }

    // Replace letters with underscores thinking in the spaces,
    hidesStrings() {

        return this.strings.replace(/[a-z]/g, '_');
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

        }
        // array for updated secret word
        let arrSecretWord = this.secretWord.split('');

        let letterFound = false;

        for (let i = 0; i < this.strings.length; i++) {
            if (this.secretWord[i] === '_' && this.strings[i] === letter) {
                arrSecretWord[i] = letter;
                letterFound = true;
            }
        }

        // Update the secret word
        this.secretWord = arrSecretWord.join("");

        // If the guessed letter was not found, increment attempts
        if (!letterFound) {
            this.attempts++;
        }

        this.guesses.push(letter);



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

        return this.secretWord;
    }

    attemptsLeft() {
        return this.maxAttempts - this.attempts;

    }

    // lettersRemaining() {
    //     const remainingLetters = ;
    //     return remainingLetters;
    // }
    // en veremos

}

const game = new ShrugManGame("Everything Everywhere All at Once", 10);


console.log(game);

console.log("undercover strings");
console.log(game.hidesStrings());

console.log("check letter");
console.log(game.isLetterHere("e"));

console.log("replace letter");
console.log(game.makeGuess("e"));
console.log(game.makeGuess("h"));
console.log(game.makeGuess("p"));
console.log(game.makeGuess("e"));
console.log(game.makeGuess("z"));
console.log(game.makeGuess("t"));
console.log(game.makeGuess("u"));

console.log("letter is in the []");
console.log(game.guesses);

console.log(game.attemptsLeft());

// console.log(game.lettersRemaining());

// console.log(game.long());



// *** Important: I need a loop to check the class ShrugManGame but I don't know if it's something with functions***

console.log('======\nWhat the player will actually see\n');
function displayGameState(game) {
    console.log(`Game: ${game.name}`)
    console.log(`Word: ${game.secretWord}`);
    console.log(`Guessed Letters: ${game.guesses.join(', ')}`);
    console.log(`Attempts Left: ${game.attemptsLeft()}`);
    console.log("Shrugman: " + "¯\\_(:/)_/¯".slice(0, game.attempts));
}


displayGameState(game);

// new questions?

// how to loop the questions?