import readline from 'readline-sync';

export class Riddle {
    constructor(id, name, riddleDescription, correctAnswer) {
        this.id = id;
        this.name = name;
        this.riddleDescription = riddleDescription;
        this.correctAnswer = correctAnswer
    }

    ask() {
        const time = this.recordTime()
        return time
    }

    recordTime() {
        const startTime = Date.now()
        this.askQuesion()
        const endTime = Date.now()
        return endTime - startTime
    }

    askQuesion() {
        console.log(`asking question name: ${this.name} `);
        let answer = readline.question(this.riddleDescription + " ")
        while (answer.trim().toLowerCase() !== this.correctAnswer.toLowerCase()) {
            console.log(`wrong answer please try again`);
            answer = readline.question(this.riddleDescription + " ")
        }
        console.log(`${answer} is the correct answer!`);
        return
    }
}

export class MultiChoiceRiddle extends Riddle {
    constructor(id, name, riddleDescription, correctAnswer, choices) {
        super(id, name, riddleDescription, correctAnswer)
        this.choices = choices
    }
    askQuesion() {
        console.log(`asking question name: ${this.name} `);
        let answer = readline.question(this.riddleDescription + " ")
        console.log(`options: ${this.choices}`);
        while (answer.trim().toLowerCase() !== this.correctAnswer.toLowerCase()) {
            console.log(`wrong answer please try again`);
            answer = readline.question(this.riddleDescription + " ")
        }
        console.log(`${answer} is the correct answer!`);
        return
    }
}