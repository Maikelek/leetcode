const defangIPaddr = (address) => {
    
    let output = "";
    
    for (symbol of address) {
        output += symbol === "." ? "[.]":symbol
    }
    
    return output;
}