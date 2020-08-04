const obj = {
    "H": [0],
    "E": [1],
    "L": [2, 3, 9],
    "O": [4, 7],
    " ": [5],
    "W": [6],
    "R": [8],
    "D": [10]
}

const getWord = (obj) => {
    let word = new Array(10);
    Object.entries(obj).forEach(([key, value]) => (value.map(num => word[num] = key)))
    return word.join("");
}
console.log(getWord(obj));