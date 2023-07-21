var plusOne = function(digits) {
    const number = String(Number(digits.join(""))+1)
    return number.split('').map(Number);
};