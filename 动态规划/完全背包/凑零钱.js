/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 var change = function(amount, coins) {
    let dp = new Array(amount + 1).fill(0)
    dp[0] = 1
    for(let i=1;i<=amount;i++){
        for(let coin of coins){
            if(i >= coin){
                dp[i]+=dp[i-coin]
                console.log(dp[i])
            }
            

        }
    }
    return dp[amount]

};