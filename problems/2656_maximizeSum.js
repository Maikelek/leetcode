var maximizeSum = function(nums, k) {
    const length = nums.length;
    let max = nums[0];
    let sum = 0
    
    for (let i = 1; i < length; i++) {
        if (max < nums[i] ) max = nums[i];
    }
    
    sum = max;
    
    for (let i = 1; i < k; i++) {
        sum += max+i;
    }
    
    return sum;
};