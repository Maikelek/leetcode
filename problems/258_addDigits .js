var addDigits = function(num) {

    let number = num;
    let sum = 0;
    
    while (number >= 10) {
        sum = 0;

        while (number > 0) {
            sum += number % 10;
            number = Math.floor(number / 10);
        }
        
        number = sum;
    }
    
    return number;
};
