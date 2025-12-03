import input from "analiza-sync";
import allRiddles from "./riddles/index.js"
import { createPlayer, addSolveTime, showStats } from "./utils/playerUtils.js";
import { askRiddle, measureSolveTime } from "./utils/riddleUtils.js";

function startGame() {
    console.log(`welcome to the game`);
    const name = input("what is your name? ")
    const player = createPlayer(name)
    console.log(`LETS START WITH THE RIDDLES!`);
    allRiddles.forEach((riddle) => {
        manageAskRiddle(riddle, player)
    })
    showStats(player)

}

function manageAskRiddle(riddleObj, playerObj) {
    const timeInSec = measureSolveTime(askRiddle, riddleObj)
    addSolveTime(playerObj, timeInSec)
}

startGame()