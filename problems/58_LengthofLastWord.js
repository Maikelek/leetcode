const lengthOfLastWord = (s) => {
    const textTrimmed = s.trim();
    let counter = 0;
    
    for (let i = 0; i < textTrimmed.length; i++) {
        if (textTrimmed[i] != " "){
            counter++;
        }
        else {
            counter = 0;
        }
    }
    
    return counter;
}
