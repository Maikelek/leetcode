const maximumWealth = (accounts) => {
    
    let wealth = [];
    let counter = 0
    
    for (let i = 0; i < accounts.length; i++){
        
        for (let j = 0; j < accounts[i].length; j++){
            counter += accounts[i][j];
        }
        wealth.push(counter)
        counter = 0
    }
    return Math.max(...wealth)
    
}