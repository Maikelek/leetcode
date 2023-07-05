var numberOfSteps = function(num) {
    let counter = 0;
    while (num !== 0) {
        num = num % 2 == 0 ? num / 2 : num - 1;
        counter++;
    }
    return counter;
};