// You need to complete the code for the squareList function 
// using any combination of map(), filter(), and reduce() so that it returns 
// a new array containing only the square of only the positive integers 
// (decimal numbers are not integers) when an array of real numbers is 
// passed to it. An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].

const squareList = (arr) => {
    // Only change code below this line
    // if (num > 0 && Number.isInteger(num)){
    // }
    const newNum = arr.filter(num => num > 0)
        .filter(num => Number.isInteger(num))
        .reduce((memo, value) => {
            memo.push(value * value)
            return memo
            //  return (memo + value) * value;
        }, [])
    return newNum;
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, 7, -3.2]);
console.log(squaredIntegers);

squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) //should return [16, 1764, 36].