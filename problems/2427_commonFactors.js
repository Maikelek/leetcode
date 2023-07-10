var commonFactors = function(a, b) {
    const highest = a > b ? a : b;
    let counter = 0;
    
    for (let i = 1; i <= highest; i++) {
        counter += a % i == 0 && b % i == 0 ? 1 : 0;
    }
    
    return counter;
};