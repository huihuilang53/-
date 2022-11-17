/**
 * @param {number[]} arr
 * @return {number}
 */
 var lenLongestFibSubseq = function(arr) {
    //转移方程  dp[i,j]=dp[j,k]+1
    let map =new Map()
    let n = arr.length
    for(let i=0;i<arr.length;i++){//用哈希存值
        map.set(arr[i],i)
    }
    let ans = 0
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for(let i=0;i<arr.length;i++){
        for(let j=i-1;j>=0;j--){
            let k = arr[i]-arr[j]
            if(k>=arr[j]) break//边界条件 如 835
            if(map.has(k)){
                dp[i][j]=Math.max(3,dp[j][map.get(k)]+1) //存在的情况下最小为3
                ans=Math.max(dp[i][j],ans)

            }
        }
    }
    return ans
};