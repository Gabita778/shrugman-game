import ShrugManGame from './shrugman.js'
// const prompt = require('prompt-sync')({ sigint: true });
// const chalk = require('chalk');
import chalk from 'chalk';
import promptSync from 'prompt-sync';
let prompt = promptSync();
// const ShrugManGame = require('./shrugman');


// The class that creates the game is in the file shrugman.js

// the functions that creates the graphical interface

function displayGameState(game) {
    console.log(chalk.blue.underline.bold(`Game: ${game.name}`))
    console.log(chalk.cyan(`Objective: ${game.instructions}`));
    console.log(chalk.greenBright(`Movie/Book: ${game.secretWord}`));
    console.log(chalk.magentaBright(`Letters in tittle: ${game.charInStrings}, it count the spaces`))
    console.log(chalk.yellowBright(`Guessed Letters: ${game.guesses.join(', ')}`))
    console.log(chalk.green(`Attempts Left: ${game.attemptsLeft()}`));
    console.log(chalk.redBright("ShrugMan: " + "¯\\_(:/)_/¯".slice(0, game.attempts)));
    
    if (game.isGameOver()) {
        displayResult(game)
    }
}

const gameResults = [];
function displayResult(game) {
    console.log(chalk.greenBright( gameResults.push(`${game.myStrings} - ${game.result}`)));
}

//displayGameState(myGame);

function displayShrugMan() {
    console.log(chalk.blue("¯\\_(:/)_/¯"));
}

function displayHappyCat() {
    console.log(chalk.cyan("'^‿^'"));
}

//the functions that generate the strings to guess

function selectTitle(categories) {
    console.log(chalk.magenta.underline.bold("Choose a category:"));
    categories.forEach((category, index) => {
        console.log(`${index + 1}. ${category.name}`);
    });

    const choice = parseInt(prompt(chalk.bgGreenBright.bold("Enter the number of your chosen category:")));
    if (choice >= 1 && choice <= categories.length) {
        const randomIndex = Math.floor(Math.random() * categories[choice - 1].words.length);
        return categories[choice - 1].words[randomIndex];
    } else {
        console.log(chalk.bgRedBright("Invalid choice. Please enter a valid number."));
        return selectTitle(categories);
    }
}

const myList = [
    {
        name: "Movies",
        words: [
            "The Departed",
            "Mad Max: Fury Road",
            "The Avengers",
            "Inception",
            "Interstellar",
            "Superbad",
            "The Grand Budapest Hotel",
            "Get Out",
            "Hereditary",
            "A Quiet Place",
            "The Babadook",
            "Up",
            "Inside Out",
            "Zootopia",
            "Coco"
        ],
    },
    {
        name: "Books",
        words: [
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
        ],
    },

];

//the function that interacts with the user and brings together all the functions

function playGame(gameClass, displayGameStateFn, nameGenerator, categoriesList) {
    let play = "yes";

    while (play === "yes") {
        let selectedTitle = nameGenerator(categoriesList)
        let game = new gameClass(selectedTitle.toLowerCase(), 10);
        let result = "";

        do {
            console.clear();

            if ("won" === result) {
                displayHappyCat();
                console.log(chalk.magenta.italic('Congratulations! You won! The word was: ' + game.myStrings));
                break;
            } else if ("lost" === result) {
                displayShrugMan();
                console.log(chalk.red.bold('Sorry, you lost. The word was: ' + game.myStrings));
                break;
            } else if ("repeated" === result) {
                console.log(chalk.bgCyanBright.italic('You already guessed that letter.'));
            }

            displayGameStateFn(game);

            const answer = prompt(chalk.bgRedBright("Guess a letter: "));
            result = game.makeGuess(answer);


        } while (true);

        displayResult(game);

        play = prompt(chalk.cyan("Do you want to play again? "));
    }
   
    console.log(chalk.greenBright(chalk.yellowBright.bold("Game over! Bye!")));
    console.log(chalk.yellowBright.bold("Game Results:"));
    gameResults.forEach((gameResult) => {
        console.log(gameResult);
    })
}

playGame(ShrugManGame, displayGameState, selectTitle, myList);
