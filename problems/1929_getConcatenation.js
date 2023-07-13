var getConcatenation = function(nums) {
    let output = [];
    let length = nums.length * 2;
    
    for (let i = 0; i < length; i++) {
        let number = i % nums.length;
        output.push(nums[number]);
    }
    
    return output;
};