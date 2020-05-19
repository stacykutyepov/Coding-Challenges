// Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items 
// only found in one of the two given arrays, but not both. In other words, 
// return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    let newArr = arr1
        .concat(arr2)
        .filter(
            (item) => !arr1.includes(item) || !arr2.includes(item)
        );
    console.log(newArr);
}

diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"])
            // ); //should return ["diorite", "pink wool"].
