//Intermediate Algorithm Scripting: Sorted Union

// Write a function that takes two or more arrays and returns a
//  new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be 
// included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order,
//  but the final array should not be sorted in numerical order.

// Solution 1
function uniteUnique(...arr) {
    let concatArr = [].concat(...arr);
    return [...new Set(concatArr)];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
//should return [1, 3, 2, 5, 4]


// Solution 2
function uniteUnique(...arr) {
    let concatArr = [].concat(...arr);
    let newArr = [];
    for (let num of concatArr) {
        if (newArr.length == 0) {
            newArr.push(num);
        } else if (!newArr.includes(num)) {
            newArr.push(num);
        }
    }
    return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
//should return [1, 3, 2, 5, 4]