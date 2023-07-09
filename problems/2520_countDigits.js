var countDigits = function(num) {
    let counter = 0;
    let array = String(num).split("").map(a => counter += num % a == 0 ? 1 : null);
    
    return counter;
}