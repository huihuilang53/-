2个注意点：
一维dp的写法，背包容量一定是要倒序遍历，防止重复计算
dp[1] = dp[1 - weight[0]] + value[0] = 15
dp[2] = dp[2 - weight[0]] + value[0] = 30 
dp[2]算了2次物品1  dp[2]=dp[1] + value[0] 此时dp[1]已经给赋值 
倒叙的话dp[1]==0  不会重复  有点像凑硬币

先遍历物品再嵌套遍历背包容量，否则会每个背包只放了一个物品，如
dp[100]=dp[60]+40
dp[100]=dp[70]+30 
两者求最大 只放一个物品

function testWeightBagProblem(wight, value, size) {
  const len = wight.length, 
    dp = Array(size + 1).fill(0);
  for(let i = 1; i <= len; i++) {
    for(let j = size; j >= wight[i - 1]; j--) {
      dp[j] = Math.max(dp[j], value[i - 1] + dp[j - wight[i - 1]]);
    }
  }
  return dp[size];
