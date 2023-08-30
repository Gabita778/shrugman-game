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

        if (this.gameOver) {
            return 'The game is over.';
        } else if (this.guesses.includes(letter)) {
            return 'You already guessed that letter.';
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

        // The game is won/lost...working
        if (this.secretWord === this.myStrings.toLowerCase()) {
            this.gameOver = true;
            console.log('Congratulations! You won! The word was: ' + this.myStrings); 
        } else if (this.attempts === this.maxAttempts && this.secretWord !== this.myStrings.toLowerCase()) {
            this.gameOver = true;
            console.log('Sorry, you lost. The word was: ' + this.myStrings);
        }

        return this.secretWord;
    }

    attemptsLeft() {
        return this.maxAttempts - this.attempts;
    }
}


const myGame = new ShrugManGame("Bridesmaids", 5)

console.log(myGame.makeGuess("d"));
console.log(myGame.makeGuess("d"));
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

// function getRandomMovieForGame() {
//     const moviesList = [
//         "The Departed",
//         "Mad Max: Fury Road",
//         "The Avengers",
//         "Inception",
//         "Interstellar",
//         "Superbad",
//         "The Grand Budapest Hotel",
//         "testing programs... no, it's not for me. Is there any way to do it efficiently? (insert thinking doll)",
//         "Get Out",
//         "Hereditary",
//         "A Quiet Place",
//         "The Babadook",
//         "Up",
//         "Inside Out",
//         "Zootopia",
//         "Coco"
//     ];


//         const randomIndex = Math.floor(Math.random() * moviesList.length);
//         return moviesList[randomIndex];
// }

// function getRandomBookForGame() {
//     const bookList = [
//         "To Kill a Mockingbird",
//         "1984",
//         "Pride and Prejudice",
//         "The Great Gatsby",
//         "The Catcher in the Rye",
//         "Harry Potter and the Sorcerer's Stone",
//         "The Hobbit",
//         "The Lord of the Rings",
//         "Brave New World",
//         "The Hunger Games",
//         "The Da Vinci Code",
//         "The Alchemist",
//         "War and Peace",
//         "The Odyssey",
//         "Moby-Dick",
//         "The Shining"
//     ];

//     const randomIndex = Math.floor(Math.random() * bookList.length);
//     return bookList[randomIndex];
// }
