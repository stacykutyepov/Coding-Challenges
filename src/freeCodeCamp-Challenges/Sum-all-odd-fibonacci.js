/*Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci
numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1.
Every additional number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because
all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
    let newArr = [1, 1];
    let sumOfTwo = 0;
    for (let i = sumOfTwo; sumOfTwo < num; i++) {
        sumOfTwo = newArr[newArr.length - 1] + newArr[newArr.length - 2];
        if (sumOfTwo <= num) {
            newArr.push(newArr[newArr.length - 1] + newArr[newArr.length - 2]);
        }
    }
    return newArr
        .filter(num => num % 2)
        .reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0);
}


sumFibs(10);
sumFibs(4000000); //should return 4613732.
sumFibs(4); //should return 5.
sumFibs(75024); //should return 60696.
sumFibs(75025); //should return 135721.


// Solution 2

function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}

// test here
sumFibs(4);