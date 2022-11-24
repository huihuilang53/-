function testWeightBagProblem(weight, value, size) {
    let len = weight.length
    //dp[i,j]为可选i个物品，背包体积j的最大价值
    let dp = new Array(len).fill(0).map(() => new Array(size + 1).fill(0))


    // 初始化
    for (let j = weight[0]; j <= size; j++) {
        dp[0][j] = value[0];
    }
    for (let i = 1; i < len; i++) {
        for (let j = 1; j <= size; j++) {
            //2种情况 选择或者不选择i 求max 得到转移方程
            if (j < weight[i]) dp[i][j] = dp[i - 1][j];
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
        }
    }
    return dp[len - 1][size]

}