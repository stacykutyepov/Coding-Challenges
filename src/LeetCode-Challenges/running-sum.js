//1480. Running Sum of 1d Array

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

var runningSum = function (nums) {
    return nums.reduce((memo, value, index) => {
        memo.length == 0 ? memo.push(value) : memo.push(memo[index - 1] + value);
        return memo;
    }, [])
};