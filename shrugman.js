class ShrugManGame {
    constructor(myStrings, maxAttempts) {
        this.name = "ShrugManGame";
        this.instructions = "Guess the hidden word or phrase by suggesting letters. Every wrong guess brings you closer to losing."
        this.myStrings = myStrings.toLowerCase(); //movie
        this.attempts = 0;
        this.maxAttempts = maxAttempts;
        this.guesses = []
        this.gameOver = false;
        this.secretWord = this.hidesStrings()
        this.charInStrings = this.long()
    }

    long() {
        return this.myStrings.length
    }

    hidesStrings() {
        return this.myStrings.replace(/[a-z]/g, '_');
    }

    isLetterHere(letter) {
        return this.myStrings.includes(letter);
    }

    isGameOver() {
        return this.gameOver;
    }

    makeGuess(letter) {
        letter = letter.toLowerCase();

        let arrSecretWord = this.secretWord.split('');
        let letterFound = false;

        for (let i = 0; i < this.myStrings.length; i++) {

            if (this.secretWord[i] === '_' && this.myStrings[i] === letter) {
                arrSecretWord[i] = letter;
                letterFound = true;
            }
        }

        // Update the secret word
        this.secretWord = arrSecretWord.join("");

        if (!letterFound) {
            this.attempts++;
        }

        // The game is won/lost...working
        if (this.secretWord === this.myStrings.toLowerCase()) {
            this.gameOver = true;
            console.log('Congratulations! You won! The word was: ' + this.myStrings); 
        } else if (this.attempts === this.maxAttempts && this.secretWord !== this.myStrings.toLowerCase()) {
            this.gameOver = true;
            console.log('Sorry, you lost. The word was: ' + this.myStrings);
        }

        if (this.gameOver) {
            return 'The game is over.';
        } else if (this.guesses.includes(letter)) {
            return 'You already guessed that letter.';
        } else { this.guesses.push(letter); }

        return this.secretWord;
    }

    attemptsLeft() {
        return this.maxAttempts - this.attempts;
    }
}


const myGame = new ShrugManGame("Bridesmaids", 10)

console.log(myGame.makeGuess("d"));
console.log(myGame.makeGuess("o"));
console.log(myGame.makeGuess("g"));
console.log(myGame.makeGuess("k"));
console.log(myGame.makeGuess("m"));
console.log(myGame.makeGuess("q"));
console.log(myGame.makeGuess("1"));
console.log(myGame.makeGuess("2"));
console.log(myGame.makeGuess("1"));
console.log(myGame.makeGuess("t"));
console.log(myGame.makeGuess("z"));
console.log(myGame.makeGuess("ö"));


function displayGameState(game) {
    console.log(`Game: ${game.name}`)
    console.log(`Objective: ${game.instructions}`);
    console.log(`Movie: ${game.secretWord}`);
    console.log(`Letters in tittle: ${game.charInStrings}`)
    console.log(`Guessed Letters: ${game.guesses.join(', ')}`);
    console.log(`Attempts Left: ${game.attemptsLeft()}`);
    console.log("ShrugMan: " + "¯\\_(:/)_/¯".slice(0, game.attempts + 1));
}

displayGameState(myGame)