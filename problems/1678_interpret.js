var interpret = function(command) {
    return command.replaceAll('()','o').replaceAll('(al)','al')
};