const twoSum = (nums, target) => {
    
    for(i = 0; i < nums.length; i++) {
        for(j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target){
                return console.log([i,j]);
            }
        }
    }
    
    return [];
}
