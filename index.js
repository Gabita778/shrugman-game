const prompt = require('prompt-sync')({ sigint: true });

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

//let myGame = new ShrugManGame("Everything Everywhere All at Once", 10);


//console.log(myGame);

function displayGameState(game) {
    console.log(`Game: ${game.name}`)
    console.log(`Objective: ${game.instructions}`);
    console.log(`Movie: ${game.secretWord}`);
    console.log(`Letters in tittle: ${game.charInStrings}`)
    console.log(`Guessed Letters: ${game.guesses.join(', ')}`);
    console.log(`Attempts Left: ${game.attemptsLeft()}`);
    console.log("ShrugMan: " + "¯\_(:/)_/¯".slice(0, game.attempts + 1));
}

function displayShrugMan(game) {
    console.log("ShrugMan: " + "¯\\_(:/)_/¯".slice(0, game.attempts + 1));
}

//displayGameState(myGame);

function playGame(gameClass, displayGameStateFn, filmNameGenerator) {
    let play = "yes";

    while (play === "yes") {
        let game = new gameClass(filmNameGenerator(), 10);
        while (true) {
            console.clear();
            displayGameStateFn(game);

            const answer = prompt("Guess a letter: ");
            const result = game.makeGuess(answer);

            if (game.isGameOver()) {
                // console.clear();
                displayShrugMan(game)
                break;
            }
        }

        play = prompt("Do you want to play again? ");
    }

    console.log("Game over! Bye!");
}



function getRandomMovieForGame() {
    const moviesList = [
        "The Departed",
        "Mad Max: Fury Road",
        "The Avengers",
        "Inception",
        "Interstellar",
        "Superbad",
        "The Grand Budapest Hotel",
        "Bridesmaids",
        "Get Out",
        "Hereditary",
        "A Quiet Place",
        "The Babadook",
        "Up",
        "Inside Out",
        "Zootopia",
        "Coco"
    ];

//    const getRandomMovie = () => {
        const randomIndex = Math.floor(Math.random() * moviesList.length);
        return moviesList[randomIndex];
//    };
}

playGame(ShrugManGame, displayGameState, getRandomMovieForGame);