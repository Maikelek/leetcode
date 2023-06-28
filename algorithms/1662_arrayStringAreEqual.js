const arrayStringsAreEqual = (word1, word2) => {
    let w1 = "";
    let w2 = "";
    
    for (string of word1) {
        w1 += string;
    }
    
    for (string of word2) {
        w2 += string;
    }
    
    return w1 === w2 ? true : false;
    
}