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
            this.secretWord = this.hidesStrings();
            this.charInStrings = this.long();
            this.result = ''; 
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
                this.result = "won";
                return "won";
            } else if (this.attempts === this.maxAttempts && this.secretWord !== this.myStrings.toLowerCase()) {
                this.gameOver = true;
                this.result = "lost";
                return "lost";
            }
    
            return "ok";
        }
    
        attemptsLeft() {
            return this.maxAttempts - this.attempts;
        }
}
    
// const myGame = new ShrugManGame("hello", 3)
//console.log(myGame);
export default ShrugManGame

