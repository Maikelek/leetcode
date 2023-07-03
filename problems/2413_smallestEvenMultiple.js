var smallestEvenMultiple = function(n) {
    
    let i = 1;
    
    while (true) {
        if (n % 2 == 0) {
            return n;
        } else {
            i++;
            n = n*i;
        }
    }
};