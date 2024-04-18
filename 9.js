function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

// Test the function with the provided 2D array
var arr = [[1, 2],
           [3, 4],
           [5, 6]];

printArray(arr);
