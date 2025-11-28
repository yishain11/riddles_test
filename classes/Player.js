export default class Player {
    constructor(name) {
        this.name = name
        this.times = []
    }

    addTime(time) {
        this.times.push(time)
    }

    showStats() {
        console.log(`showing stats`);
        console.log(`total time: ${this.calcTotalTime()}`);
        console.log(`avg time: ${this.calcAVGTime()}`);
    }

    calcTotalTime() {
        let total = 0
        for (const time of this.times) {
            total += time
        }
        return total / 1000
    }

    calcAVGTime() {
        if (this.times.length === 0) {
            return 0
        }
        const time = this.calcTotalTime()
        return time / this.times.length
    }
}
