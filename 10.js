function countZeros(matrix) {
    let zeroCount = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroCount++;
            }
        }
    }
    return zeroCount;
}

var arr = [[0,1,1],[0,1,0],[1,0,0]];
var zeroCount = countZeros(arr);
console.log(zeroCount); // Output: 5
