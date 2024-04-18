function addArrays(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }
    return result;
}

let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
console.log(addArrays(arr_3, arr_4)); // Output: [12, 7, 16]
