/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var findMaxForm = function(strs, m, n) {
    //dp[i][j]定义为最多有i个0，j个1的最大子集长度
    let dp = new Array(m+1).fill(0).map(()=>new Array(n+1).fill(0))
    for(let str of strs){
        let zeronums = 0
        let onenums = 0
        for(let c of str){
            if(c==0)  zeronums++
            else onenums++
        }

        for(let i =m;i>=zeronums;i--){
            for(let j =n;j>=onenums;j--){
                dp[i][j]=Math.max(dp[i][j],dp[i-zeronums][j-onenums]+1) 
            }
           
        }
    }
    return dp[m][n]
};