var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;

    String(n).split('').map(num => {
        product *= num
        sum += parseInt(num);
    })
    
    return product - sum;
};