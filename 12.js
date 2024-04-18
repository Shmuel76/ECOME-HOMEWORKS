function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
console.log(reverseArray(arr)); // Output: [true, 3, "be", false, "cannot", true, 9, "what", 43]
