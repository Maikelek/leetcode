const reverseWords = (s) => {
    let words = s.split(" ");
    let output = [];
    let reversed = "";
    
    
    for (word of words) {
        for (let i = word.length-1; i >= 0; i--) {
            reversed += word[i]
        }
        output.push(reversed);
        reversed = "";
    }
    
    return output.join(" ");
}