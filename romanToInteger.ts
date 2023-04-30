function romanToInt(s: string): number {
    const AL = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    const roman = s.split('');
    const arabic = roman.reduce(function (reducer, el, i) {
        if (roman[i + 1] != undefined &&
            AL[roman[i]] < AL[roman[i + 1]]) {
            reducer -= AL[el];
        } else {
            reducer += AL[el]
        }
        return reducer;
    }, 0);
    return arabic;
};

    