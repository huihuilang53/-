

// 300. 最长递增子序列
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let n=nums.length

    let dp = new Array(n).fill(1)//初始化
    for(let i=1 ;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){//边界
            dp[i]=Math.max(dp[i],dp[j]+1)//最后一步和转移方程
            }
        }
    }
        let maxn=0
    for(let i=0;i<n;i++){
        if(dp[i]>maxn){
            maxn=dp[i]
        }
    }
    return maxn
    
};

// 931. 下降路径最小和
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    //备忘录
    let m = matrix.length
    let n = matrix[0].length
 
    let memo = new Array(m).fill(0).map(item=>{ //初始化
        return Array(n).fill(123456)
    })
    let res=9999999
    for(let j=0;j<n;j++){
        res = Math.min(dp(matrix,m-1,j),res)
    }
    return res
    
 
 
 
 
    function dp (matrix,i,j){
    // 1、索引合法性检查   边界
    if(i<0 || j<0 ||
    i>=m ||
    j>=n)
    return 99999
    // 2、base case
    if(i==0)
    return matrix[0][j] //初始化
    // 3、查找备忘录，防止重复计算
    if(memo[i][j]!=123456)
    return memo[i][j]
 
    memo[i][j] = matrix[i][j] + Math.min(//转移方程 最后一步
        dp(matrix,i-1,j),
        dp(matrix,i-1,j-1),
        dp(matrix,i-1,j+1)
    )
    return memo[i][j]
}
};
// 剑指 Offer II 098. 路径的数目
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let memo = new Array(m).fill(new Array(n).fill(1))
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(i==0 || j==0){//初始化
                memo[0][j]=1
                memo[i][0]=1
            }
            else{
                memo[i][j]=memo[i-1][j]+memo[i][j-1]//转移方程
            }
        }
    }
    return memo[m-1][n-1]
};
// 322. 零钱兑换
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

