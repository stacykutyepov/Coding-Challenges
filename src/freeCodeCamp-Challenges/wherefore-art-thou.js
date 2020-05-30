// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    const arrSource = Object.entries(source);
    for (let obj of collection) {
        let flag = true;
        for (let [key, value] of arrSource) {
            if (obj[key] !== value) {
                flag = false;
            }
        }
        if (flag === true) {
            arr.push(obj);
        }
    }
    // Only change code above this line
    return arr;
}

whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
);

whatIsInAName(
    [
        { apple: 1, bat: 2 },
        { bat: 2 },
        { apple: 1, bat: 2, cookie: 2 },
    ],
    { apple: 1, bat: 2 }
);