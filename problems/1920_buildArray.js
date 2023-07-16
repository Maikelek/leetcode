var buildArray = function(nums) {
    const len = nums.length;
    let answer = [];
    
    for (let i = 0; i < len; i++){
        answer[i] = nums[nums[i]];
    }
    
    return answer;
};