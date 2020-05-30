//             Learning JS
//             Intermediate Algorithm Scripting:
//  Missing letters
// Find the missing letter in the passed letter
//  range and return it.

// If all letters are present in the range, return 
// undefined.


function fearNotLetter(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const start = alphabet.indexOf(str[0]);
    const finish = alphabet.indexOf(str[str.length - 1]);
    for (let i = start; i < finish; i++) {
        if (!str.includes(alphabet[i])) {
            return alphabet[i];
        }
    }
    return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("bcdf")); //should return "e".
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); //should return undefined