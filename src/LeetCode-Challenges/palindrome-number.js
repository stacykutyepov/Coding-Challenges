// 9. Palindrome Number

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:
// Input: 121
// Output: true

// Example 2:
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

var isPalindrome = (x) => {
    var reverse = Array.from(String(x), Number).reverse().join("");
    if (Math.sign(x) == -1) {
        return false;
    }
    if (x == reverse) {
        return true;
    }
    return false;
};