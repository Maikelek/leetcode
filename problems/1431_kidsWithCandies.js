let kidsWithCandies = (candies, extraCandies) => {
    let answer = [];
    let biggest = 0;
    
    for (let candy of candies) {
        if (biggest <= candy) {biggest = candy}
    }
    
    for (let candy of candies) {
        answer.push(candy+extraCandies >= biggest ? true:false)
    }
    
    return answer;
}