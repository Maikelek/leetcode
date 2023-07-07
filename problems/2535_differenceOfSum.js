var differenceOfSum = function(nums) {
    let sum_digits = 0;
    let sum_elements = 0;
    let elements = nums.join("");
    
    for (element of elements) {
        sum_elements += parseInt(element);
    }
    
    nums.map(a => sum_digits += a);
    
    return sum_digits - sum_elements;
};