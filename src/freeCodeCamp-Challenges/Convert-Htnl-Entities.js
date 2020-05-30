/* Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe),
 in a string to their corresponding HTML entities.
*/


function convertHTML(str) {
    const stringToHtml = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&apos;",
        '"': "&quot;",
    };
    for (let [key, value] of Object.entries(stringToHtml)) {
        if (str.includes(key)) {
            str = str.split(key).join(value);
        }
    }
    return str;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos")); //should return "Hamburgers &lt; Pizza &lt; Tacos".
console.log(convertHTML("<>")) //should return "&lt;&gt;".