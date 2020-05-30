/*Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters
 that can be evenly divided by both, as well as
  by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not
 necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple
 of both 1 and 3 that is also evenly divisible by all numbers
  between 1 and 3. The answer here would be 6.
  */

function smallestCommons(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let range = [];
    while (max >= min) {
        range.push(max);
        max--;
    }

    console.log(range)

    const gcd = (a, b) => {
        let remainder = a % b;
        while (remainder !== 0) {
            if (b % remainder == 0) {
                return remainder;
            }
            remainder = b % remainder;
        }
        return b;
    }

    const lcm = (a, b) => (a * b) / gcd(a, b);

    let result = lcm(range[range.length - 1], range[range.length - 2]);

    for (let i = range.length - 3; i >= 0; i--) {
        result = lcm(result, range[i]);
    }

    return result;
}


smallestCommons([1, 5]);
smallestCommons([1, 13]); //should return 360360.
smallestCommons([23, 18]); //should return 6056820.