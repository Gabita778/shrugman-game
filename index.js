const prompt = require('prompt-sync')({ sigint: true });

// The class that creates the game

class ShrugManGame {
    constructor(myStrings, maxAttempts) {
        this.name = "ShrugManGame";
        this.instructions = "Guess the hidden word or phrase by suggesting letters. Every wrong guess brings you closer to losing."
        this.myStrings = myStrings.toLowerCase(); //movie or book
        this.attempts = 0;
        this.maxAttempts = maxAttempts;
        this.guesses = []
        this.gameOver = false;
        this.status = 
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

        if (this.guesses.includes(letter)) {
            return "repeated";
        } else {
            this.guesses.push(letter);
        }

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

        // The game is won/lost
        if (this.secretWord === this.myStrings.toLowerCase()) {
            this.gameOver = true;
            return "won";
        } else if (this.attempts === this.maxAttempts && this.secretWord !== this.myStrings.toLowerCase()) {
            this.gameOver = true;
            return "lost";
        }

        return "ok";
    }

    attemptsLeft() {
        return this.maxAttempts - this.attempts;
    }
}

//console.log(myGame);


//the functions that creates the graphical interface

function displayGameState(game) {
    console.log(`Game: ${game.name}`)
    console.log(`Objective: ${game.instructions}`);
    console.log(`Movie/Book: ${game.secretWord}`);
    console.log(`Letters in tittle: ${game.charInStrings}, it count the spaces`)
    console.log(`Guessed Letters: ${game.guesses.join(', ')}`);
    console.log(`Attempts Left: ${game.attemptsLeft()}`);
    console.log("ShrugMan: " + "¯\\_(:/)_/¯".slice(0, game.attempts));
}

//displayGameState(myGame);

function displayShrugMan() {
    console.log("¯\\_(:/)_/¯");
}

function displayHappyCat() {
    console.log("'^‿^'");
}

//the functions that generate the strings to guess

function getRandomMovieForGame() {
    const moviesList = [
        "The Departed",
        "Mad Max: Fury Road",
        "The Avengers",
        "Inception",
        "Interstellar",
        "Superbad",
        "The Grand Budapest Hotel",
        "testing programs... no, it's not for me. Is there any way to do it efficiently? (insert thinking doll)",
        "Get Out",
        "Hereditary",
        "A Quiet Place",
        "The Babadook",
        "Up",
        "Inside Out",
        "Zootopia",
        "Coco"
    ];


        const randomIndex = Math.floor(Math.random() * moviesList.length);
        return moviesList[randomIndex];
}

function getRandomBookForGame() {
    const bookList = [
        "To Kill a Mockingbird",
        "1984",
        "Pride and Prejudice",
        "The Great Gatsby",
        "The Catcher in the Rye",
        "Harry Potter and the Sorcerer's Stone",
        "The Hobbit",
        "The Lord of the Rings",
        "Brave New World",
        "The Hunger Games",
        "The Da Vinci Code",
        "The Alchemist",
        "War and Peace",
        "The Odyssey",
        "Moby-Dick",
        "The Shining"
    ];

    const randomIndex = Math.floor(Math.random() * bookList.length);
    return bookList[randomIndex];
}

//the function that interacts with the user and brings together all the functions

function playGame(gameClass, displayGameStateFn, nameGenerator) {
    let play = "yes";

    while (play === "yes") {
        let game = new gameClass(nameGenerator(), 10);
        let result = "";

        do {
            console.clear();

            if ("won" === result) {
                displayHappyCat();
                console.log('Congratulations! You won! The word was: ' + game.myStrings);
                break;
            } else if ("lost" === result) {
                displayShrugMan();
                console.log('Sorry, you lost. The word was: ' + game.myStrings);
                break;
            } else if ("repeated" === result) {
                console.log('You already guessed that letter.');
            }

            displayGameStateFn(game);

            const answer = prompt("Guess a letter: ");
            result = game.makeGuess(answer);


        } while (true);

        play = prompt("Do you want to play again? ");
    }

    console.log("Game over! Bye!");
}

playGame(ShrugManGame, displayGameState, getRandomBookForGame);
