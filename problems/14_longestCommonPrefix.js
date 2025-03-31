const longestCommonPrefix = (arr) => {
    
    if (arr.length === 0) {
        return "";
    }
    
    arr.sort();
    
    const first = arr[0];
    const last = arr[arr.length - 1];
    let prefix = "";

    for (let i = 0; i < first.length; i++) {
        if (first[i] === last[i]) {
            prefix += first[i];
        } else {
            break;
        }
    }

    return prefix;
}