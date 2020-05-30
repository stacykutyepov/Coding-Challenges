// //             Intermediate Algorithm Scripting: Pig Latin
// // Pig Latin is a way of altering English Words. 
// The rules are as follows:
// // - If a word begins with a consonant, take the first consonant or 
// consonant cluster, move it to the end of the word, and add "ay" to it.

// // - If a word begins with a vowel, just add "way" at the end.

// // Translate the provided string to Pig Latin. Input strings are 
// guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    const vovelStr = "aeiou";
    if (vovelStr.includes(str[0])) {
        return str + "way";
    } else {
        for (let i in str) {
            if (vovelStr.includes(str[i])) {
                return str.slice(i, str.length) + str.slice(0, i) + "ay";
            }
        }
    }
    return str + "ay";
}

console.log(translatePigLatin("paragraphs")); // should return "aragraphspay".
console.log(translatePigLatin("california")); // should return "aliforniacay".
console.log(translatePigLatin("glove")); // should return "oveglay".
console.log(translatePigLatin("algorithm")); // should return "algorithmway".
console.log(translatePigLatin("eight")); // should return "eightway".
console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("schwartz"));