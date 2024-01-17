function uniqueOccurrences(arr: number[]): boolean {
    // const occurrences: {[key: number]: number} = arr.reduce(function (acc, curr) {
    //     return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    //   }, {});

    const occurrences: {[key: number]: number}  = {}
    for (const number in arr) {
        occurrences[arr[number]] ? occurrences[arr[number]] += 1 :
        occurrences[arr[number]] = 1
    };
    
    return  Object.keys(occurrences).length == new Set(Object.values(occurrences)).size
}

console.log(uniqueOccurrences([1,2,2,2,1]))