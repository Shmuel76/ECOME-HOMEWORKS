function findDup(arr) {
    let repeatedElements = [];
    let countMap = {};

    // Count occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        countMap[element] = (countMap[element] || 0) + 1;
    }

    // Find elements repeated more than once
    for (const key in countMap) {
        if (countMap.hasOwnProperty(key) && countMap[key] > 1) {
            repeatedElements.push(parseInt(key));
        }
    }

    return repeatedElements;
}

var arr = [4,2,34,4,1,12,1,4];
console.log(findDup(arr)); // Output: [4, 1]
