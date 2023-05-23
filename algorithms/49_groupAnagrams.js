const groupAnagrams = (strs) => {
    let stringPairs = {}
    
    for (let string of strs) {
        let current = string.split('').sort().join("");
        
        if (!stringPairs[current]) {
            stringPairs[current] = [];
        }
        
        stringPairs[current].push(string);
    }
    
    return Object.values(stringPairs);
}