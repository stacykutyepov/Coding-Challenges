/*Intermediate Algorithm Scripting: Steamroller

Flatten a nested array. You must account for
 varying levels of nesting. */

function steamrollArray(arr) {
    const flattenedArr = [];

    const flatten = function (arg) {
        if (!Array.isArray(arg)) {
            flattenedArr.push(arg);
        } else {
            for (let a in arg) {
                // console.log(arg[a])
                flatten(arg[a])
            }
        }
    }

    arr.forEach(flatten);
    return flattenedArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]); // should return [1, {}, 3, 4].
steamrollArray([1, [2], [3, [[4]]]]); // should return [1, 2, 3, 4].
