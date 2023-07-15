var restoreString = function(s, indices) {
    const len = indices.length;
    let output = [];
    
    for (let i = 0; i < len; i ++) {
        let index = indices[i];
        let letter = s[i]
        output[index] = letter;
    }
    
    return output.join("")
};