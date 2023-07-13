var fizzBuzz = function(n) {
    let output = [];
    
    for (let i = 1; i <= n; i++) {
        let temporary = "";
        if (i % 3 == 0) {temporary += "Fizz"}
        if (i % 5 == 0) {temporary += "Buzz"}
        
        temporary ? output.push(temporary) : output.push(String(i));
    }
    return output;
};