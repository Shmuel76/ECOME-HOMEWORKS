function findIndex(array) {
    let index = 0;
    while (index < array.length - 1) {
        if (array[index] !== array[index + 1]) {
            return index + 1;
        }
        index++;
    }
    return -1;
}

let array1 = [true, false, false, true, true, false];
let array2 = [true, false, true, false, true, true];
let array3 = [true, false, true, false, true, false];

console.log(findIndex(array1)); // Output: 2
console.log(findIndex(array2)); // Output: 5
console.log(findIndex(array3)); // Output: -1
