// Intermediate Algorithm Scripting: Search and Replace
// Perform a search and replace on the sentence using the 
// arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are
//  replacing it. For example if you mean to replace the word "Book" with the
//   word "dog", it should be replaced as "Dog"


function myReplace(str, before, after) {
    let newArr = str.split(" ");
    let replace = "";
    if (before[0] == before[0].toUpperCase()) {
        replace = after.replace(after[0], after[0].toUpperCase());
    } else
        replace = after.replace(after[0], after[0].toLowerCase());

    const index = newArr.indexOf(before);
    newArr.splice(index, 1, replace);

    return newArr.join(" ");
}
myReplace("Let us go to the store", "store", "mall");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");