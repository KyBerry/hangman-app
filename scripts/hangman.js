// Prototypal Inheritance

class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guess = [];
        this.status = 'playing'
    }

    calcStatus(){
        const finished = this.word.every((letter) => this.guess.includes(letter) || letter === ' ')

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }

    get statusMessage(){
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}."`
        } else {
            return `Great work! You guessed the word!`
        }
    }

    get puzzle() {
        let puzzle = '';
        this.word.forEach((letter) => {
            if (this.guess.includes(letter) || letter === ' ') {
                puzzle += letter;
            } else {
                puzzle += '*'
            }
        })
        return puzzle
    }

    makeGuess(guessLetter) {
        const isUnique = this.guess.includes(guessLetter)
        const badGuess = this.word.includes(guessLetter)
    
        if (this.status !== 'playing'){
            return 
        }
    
        if (!isUnique) {
            this.guess.push(guessLetter.toLowerCase());
        } 
        
        if (!isUnique && !badGuess)  {
            this.remainingGuesses--
        }
    
        this.calcStatus()
    }
};








