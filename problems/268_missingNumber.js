var missingNumber = function(nums) {
    const len = nums.length;
    let sumAll = 0;
    for (let i = 0; i <= len; i++) {
        sumAll += i;
    }
    let sumMissing = nums.reduce((n1, n2) => n1 + n2, 0);
    return sumAll - sumMissing;
};