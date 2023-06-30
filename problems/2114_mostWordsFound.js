let mostWordsFound = (sentences) => {
    let wordCounter = 0;
    let longestSentence = 0;

    for (sentence of sentences) {
        wordCounter++;
        for (letter of sentence) {
            if (letter === " ") {wordCounter++}
        }
        longestSentence = wordCounter >= longestSentence ? wordCounter:longestSentence;
        wordCounter = 0;
    }
    
    return longestSentence;
}