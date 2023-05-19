const isPalindrome = (x) => {
    
    let startNum = x;
    let remainder;
    let reversed = 0;
    
    while (x) {
        remainder = x % 10;
        reversed = (reversed * 10) + remainder;
        x = x/10|0;
    }
    
    return reversed === startNum && startNum >= 0 ? true : false
}