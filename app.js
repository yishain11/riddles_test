import readline from 'readline-sync';
import Player from "./classes/Player.js"
import AllRiddles from "./riddles/totalRiddels.js"
import { Riddle, MultiChoiceRiddle } from './classes/Riddle.js';

function main() {
    const player = generatePlayer()
    startGame(player)
}

function generatePlayer() {
    const name = readline.question("what is your name? ")
    const player = new Player(name)
    return player
}

function startGame(player) {
    const riddles = genRiddles()
    for (const riddle of riddles) {
        const time = riddle.ask()
        player.addTime(time)
    }
    player.showStats()
}

function genRiddles() {
    const riddels = []
    for (const riddle of AllRiddles.riddels) {
        const { id, name, riddleDescription, correctAnswer, choices } = riddle
        let newRiddle;
        if (choices) {
            newRiddle = new MultiChoiceRiddle(id, name, riddleDescription, correctAnswer, choices)
        }
        else {
            newRiddle = new Riddle(id, name, riddleDescription, correctAnswer)
        }
        riddels.push(newRiddle)
    }
    return riddels
}

main()