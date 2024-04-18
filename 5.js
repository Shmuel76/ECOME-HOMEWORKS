function calculateSum(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }
    return sum;
}

// Test the function with the provided array
const numbersArray = [1, 13, 22, 123, 49, 34, 5, 24, 57, 45];
const totalSum = calculateSum(numbersArray);
console.log("The sum of all numbers in the array is:", totalSum);
