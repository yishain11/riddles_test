import input from "analiza-sync";

export function askRiddle(riddleObj) {
    console.log(`asking riddle named: ${riddleObj.name}`);
    console.log(`the riddle is: \n ${riddleObj.taskDescription} \n`);
    if ("choices" in riddleObj) {
        console.log(`answer options:`);
        riddleObj.choices.forEach((el, i) => {
            console.log(`${i}: ${el}`);
        })
        askForAnswer("what is the correct answer? select a number ", riddleObj)
    } else {
        askForAnswer("what is your answer? ", riddleObj)

    }
    console.log(`correct!`);
}

export function measureSolveTime(fn, args) {
    const start = Date.now()
    fn(args)
    const end = Date.now()
    const totalSecs = Math.floor((end - start) / 1000)
    return totalSecs
}

function askForAnswer(question, riddleObj) {
    let answer;
    answer = input(question)
    while (answer !== riddleObj.correctAnswer) {
        answer = input(`wrong answer. ${question} `)
    }
}