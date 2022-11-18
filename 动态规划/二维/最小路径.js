/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    let n = cost.length
    let dp = new Array(n+1).fill(0)
    cost[n] = 0
    //dp[i]的意思为到达第i阶梯再加上 本阶梯往上爬的钱 (重点)
    for(let i=0;i<=n;i++){
        if(i<2) {dp[i]=cost[i]
         continue}
        dp[i]=Math.min(dp[i-1]+cost[i],dp[i-2]+cost[i])
    }
    return dp[n]
};