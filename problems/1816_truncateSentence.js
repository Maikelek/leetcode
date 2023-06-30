const  truncateSentence = (s, k) => {
    let words = s.split(" ");
    let output = [];
    
    for (let i = 0; i < k; i++) {
        output.push(words[i]);
    }
    
    return output.join(" ");
}