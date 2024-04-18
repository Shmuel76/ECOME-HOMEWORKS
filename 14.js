function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function checkPalindrome(str1, str2) {
    console.log("string1 palindrome?:");
    console.log(isPalindrome(str1) ? "Yes" : "No");
    console.log("string2 palindrome?:");
    console.log(isPalindrome(str2) ? "Yes" : "No");
}

let str1 = "racecar";
let str2 = "Java";

checkPalindrome(str1, str2);
