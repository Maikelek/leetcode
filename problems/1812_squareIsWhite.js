var squareIsWhite = function(coordinates) {
    let data = coordinates.split("");
    
    let column = ['a', 'c', 'e', 'g'].includes(data[0]) ? 1 : 0;
    let row = data[1] % 2 == 0 ? 1 : 0;

    if (column === 1 && row === 1 || column === 0 && row == 0) {
        return true;
    } else {
        return false;
    }
};