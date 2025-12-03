export function getSum(numArr) {
    const sum = numArr.reduce((acc, current) => {
        return acc + current
    })
    return sum
}