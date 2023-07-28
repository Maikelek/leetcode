var numberOfMatches = function(n) {
    let output = 0
    while (n !== 1){
        if (n % 2){
            output += (n - 1) / 2
            n = (n - 1) / 2 + 1
        } else {
            output += n / 2
            n /= 2
        }
        
    }
    return output
};