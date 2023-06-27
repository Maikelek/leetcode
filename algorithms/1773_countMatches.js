const countMatches = (items, ruleKey, ruleValue) => {
    
    let index;
    let counter = 0;
    
    if (ruleKey === "type") {
        index = 0;
    } else if (ruleKey === "color") {
        index = 1;
    } else {
        index = 2;
    }
    
   for (item of items) {
       if (ruleValue === item[index]) {counter++}
   }
   return counter;
}