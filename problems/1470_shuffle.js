var shuffle = function(nums, n) {
    let output = [];
    for (i = 0; i < n; i++) {
        output.push(nums[i],nums[i+n]);
    }
    return output;
};