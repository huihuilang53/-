/**
 * @param {number} n
 * @return {number}
 */
 var integerBreak = function(n) {

    let dp =new Array(n+1).fill(0)
    dp[2]=1
    // dp[1]=1
    //dp[i]的定义为 数字i的最大乘积和 如10=9*1  即dp[9]*1
    for(let i =3;i<=n;i++){
        for(let j=1;j<i;j++){
            //如果DP[I]*DP[I-J] 意思是4个以上的拆分相乘    J*dp[I-J]为3个
            dp[i]= Math.max(Math.max(dp[j]*dp[i-j], j*(i-j),j*dp[i-j]), dp[i])
        } 
    }
    return dp[n]
};