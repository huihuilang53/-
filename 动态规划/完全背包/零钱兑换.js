/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let memo=new Array(amount+1).fill(999999)//初始
    memo[0]=0

    for(let i=1;i<amount+1;i++){
        for(let coin of coins ){
            if(i-coin >=0 ){//边界
                memo[i] =Math.min(memo[i-coin]+1 ,memo[i]) //转移方程
            }
    }
    }
    if(memo[amount]==999999) return -1
    return memo[amount]
    
    
};