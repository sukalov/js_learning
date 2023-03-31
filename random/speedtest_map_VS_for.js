const arr = []
for (let a=1; a <= 10000000; a++) {
    arr.push(a)
}

const testFor = (arr) => {
    for (let i in arr) {
        arr[i] *= 2
    }
    return arr[arr.length-1]
}

const testMap = (arr) => {
    return arr.map(a => a*2)[arr.length-1]
}

console.log(testFor(arr))