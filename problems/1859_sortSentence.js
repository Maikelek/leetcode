const sortSentence = (s) => {
    let index;
    const sentence = s.split(" ");
    let output = [];
    
    for(word of sentence){
        index = word[word.length-1];
        output[index-1] = word;
    }
    
    return output.join(" ").replaceAll(/[0-9]/g, "");
}