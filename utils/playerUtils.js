import { getSum } from "./mathUtils.js"

export function createPlayer(name) {
    return {
        name,
        times: []
    }
}

export function addSolveTime(player, seconds) {
    player.times.push(seconds)
}


export function showStats(player) {
    console.log(`showing stats for player: ${player.name}`);
    const sum = getSum(player.times)
    console.log(`total time: ${sum}`);
    if (!player.times || player.times.length === 0) {
        console.log(`avg: 0`);
        return
    }
    console.log(`avg time: ${sum / player.times.length}`);
}