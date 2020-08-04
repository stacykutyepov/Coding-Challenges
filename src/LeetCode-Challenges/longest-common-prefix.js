// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
    let prefix = "";
    if (strs.length === 0) return prefix;
    // Loop through characters
    for (let i = 0; i < strs[0].length; i++) {
        const character = strs[0][i];
        // Loop through strs
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== character) return prefix
        }
        prefix = prefix + character;
    }
    return prefix;
};