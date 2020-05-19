// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

// Note
// // You have to use the arguments object.
function destroyer(arr, ...num) {
    let newArr = [...num];
    for (let i of newArr) {
        arr = arr.filter((num) => num != i)
    }
    return arr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); //should return [1].
