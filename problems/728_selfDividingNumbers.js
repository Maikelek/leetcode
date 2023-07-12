var selfDividingNumbers = function(left, right) {
    let counter = 0;
    let output = [];

    for (let i = left; i <= right; i++) {
        let numArray = String(i).split("");
        let arrayLength = numArray.length;
        let divisionCounter = 0;

        for (let num of numArray) {
            divisionCounter += i % num === 0 ? 1 : 0;
        }

        if (divisionCounter === arrayLength) {output.push(i);}
    }
    return output;
};
