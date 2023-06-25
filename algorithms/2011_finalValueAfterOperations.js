let finalValueAfterOperations = (operations) => {
    let x = 0
    
    for (operation of operations) {
        if (operation === "--X" || operation === "X--") {x--}
        else{x++}
    }
    
    return x
}