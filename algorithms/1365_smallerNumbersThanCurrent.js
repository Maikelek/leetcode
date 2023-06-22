const smallerNumbersThanCurrent = (nums) => {
    
    let smallerCounter = 0;
    let smallerArray = [];
    
    for (let i = 0; i < nums.length; i++) {
        
        for (let j = 0; j < nums.length; j++) {
            if (j == i) {continue}
            if (nums[j] < nums[i]) {smallerCounter++}
        }
        smallerArray.push(smallerCounter);
        smallerCounter = 0;
    }
    return smallerArray;
}