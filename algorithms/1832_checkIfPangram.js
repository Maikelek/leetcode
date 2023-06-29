const checkIfPangram = (sentence) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
    
    for (letter of alphabet){
        if(sentence.indexOf(letter) === -1){
            return false;
        }
    }
    return true
}