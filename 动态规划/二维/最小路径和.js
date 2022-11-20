/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    let m=grid.length
    let n=grid[0].length

    let memo = new Array(m).fill().map(item => Array(n).fill(1))
       for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            memo[i][j] = grid[i][j]
        }}
    //初始化
    for(let i=1;i<m ;i++){
        memo[i][0]=memo[i][0]+memo[i-1][0]
    }
    for(let j=1;j<n;j++){
        memo[0][j]=memo[0][j]+memo[0][j-1]
    }

    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
                memo[i][j]=Math.min(memo[i-1][j]+memo[i][j],memo[i][j]+memo[i][j-1]) //转移方程
        }
    }
    return memo[m-1][n-1]
};
