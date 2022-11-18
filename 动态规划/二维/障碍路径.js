/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    let m=obstacleGrid.length
    let n=obstacleGrid[0].length

    let memo = new Array(m).fill().map(item => Array(n).fill(0))
    //初始化
    for(let i=0;i<m && obstacleGrid[i][0] == 0;i++){
        memo[i][0]=1
    }
    for(let j=0;j<n && obstacleGrid[0][j] == 0;j++){
        memo[0][j]=1
    }

    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            if(obstacleGrid[i][j] == 1){
                memo[i][j]=0
                continue
            }
            else{
                memo[i][j]=memo[i-1][j]+memo[i][j-1]//转移方程
            }
        }
    }
    return memo[m-1][n-1]
};