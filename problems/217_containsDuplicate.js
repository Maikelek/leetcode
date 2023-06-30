const containsDuplicate = (nums) => {
    
    let sorted = nums.sort((a, b) => a - b);
    let swap = 1;
    
    for (let i = 0; i < nums.length ; i++ ) {
        if ( sorted[i] === sorted[swap] ) {
            return true
        }
        swap++;
    }
    return false
}
