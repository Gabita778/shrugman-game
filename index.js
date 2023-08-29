const prompt = require('prompt-sync')({ sigint: true });

class ShrugManGame {
    constructor(strings, maxAttempts) {
        this.name = "ShrugManGame";
        this.instructions = "Guess the hidden word or phrase by suggesting letters. Every wrong guess brings you closer to losing."
        this.strings = strings.toLowerCase();
        this.attempts = 0;
        this.maxAttempts = maxAttempts;
        this.guesses = []
        this.gameOver = false;
        this.secretWord = this.hidesStrings()
        this.charInStrings = this.long()
    }

    long() {
        return this.strings.length
    }

    hidesStrings() {
        return this.strings.replace(/[a-z]/g, '_');
    }

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

        if (!letterFound) {
            this.attempts++;
        }

        this.guesses.push(letter);

        // The game is won... not working
        if (this.secretWord === this.strings) {
            this.gameOver = true;
            return 'Congratulations! You won!';
        }

        // The game is lost... not working
        if (this.attempts >= this.maxAttempts) {
            this.gameOver = true;
            return 'Sorry, you lost. The word was: ' + this.strings;
        }

        return this.secretWord;
    }

    attemptsLeft() {
        return this.maxAttempts - this.attempts;

    }
}

let myGame = new ShrugManGame("Everything Everywhere All at Once", 10);


console.log(myGame);


console.log('======\nWhat the player will actually see\n');
function displayGameState(game) {
    console.log(`Game: ${game.name}`)
    console.log(`Objective: ${game.instructions}`);
    console.log(`Word: ${game.secretWord}`);
    console.log(`Guessed Letters: ${game.guesses.join(', ')}`);
    console.log(`Attempts Left: ${game.attemptsLeft()}`);
    console.log("ShrugMan: " + "¯\\_(:/)_/¯".slice(0, game.attempts));
}

displayGameState(myGame);


function playGame(gameClass, displayGameStateFn) {
    let play = "yes";

    while (play === "yes") {
        let game = gameClass();
        while (true) {
            console.clear();
            displayGameStateFn(game);

            const answer = prompt("Guess a letter: ");
            const result = game.makeGuess(answer);

            if (game.isGameOver()) {
                console.log("game over!!!!");
                console.clear();
                displayGameStateFn(game);
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

    const getRandomMovie = () => {
        const randomIndex = Math.floor(Math.random() * moviesList.length);
        return moviesList[randomIndex];
    };

    return new ShrugManGame(getRandomMovie(), 10);
}

playGame(getRandomMovieForGame, displayGameState);