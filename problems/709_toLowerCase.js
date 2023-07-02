const toLowerCase = (s) => {
    let output = "";
    
    for (let char of s) {
        let charCode = char.charCodeAt();
        output += charCode >= 65 && charCode <= 90 ? String.fromCharCode(charCode+32) : char;
    }
    return output;
}