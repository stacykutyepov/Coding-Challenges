/*KATA Challenge

var orderNum = [];
var text = "is2 Thi1s T4est 3a";
function order(words) {

}

// have a string
function stringToArray(str) {
    return str.trim().split(' ');

}
var string = stringToArray("is2 Thi1s T4est 3a");
console.log(string);

//console.log(string[0].match(/\d+/));
// alert(string[0].match(/\d+/))
// check which number is in array
function checkNumber(array) {
    for (var i = 1; i < array.length; i++) {
      //  var num = [];
        var ar = array[i].match(/\d+/);
        var num = array[i-1].match(/\d+/);
        console.log('ar',ar);
        console.log('num',num);

    }

};
console.log('orderNum',orderNum);
var n = checkNumber(string);
console.log();


var n = [87, 2, 6, 4, 3, 9];

for (var i = 0; i < n.length; i++) {
    for (var j = 1; j < n.length; j++) {
        if (n[j - 1] > n[j]) {
            var a = n[j];
            var b = n[j - 1];

            n[j] = b;
            n[j - 1] = a;
        }
    }
}

console.log(n)

function countdown(n){
 
    if(n < 1) {
      return []; 
    } else {
      const countArray =  countdown(n - 1);
      countArray.unshift(n);
      return countArray;
    }

  }
  console.log(countdown(6));
 
// recursion ****************************************************

  function rangeOfNumbers(startNum, endNum) {
      
    if (startNum > endNum){
     return [];
    }else if (startNum <= endNum) {
    const countArray = rangeOfNumbers(startNum, endNum -1);
    countArray.push(endNum);
   return countArray;
    }else if (startNum == endNum) {
        return [startNum]
    }
   
   };
   console.log(rangeOfNumbers(2,13));


var printNumTwo;
for (var i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function () {
            return i;
        };
    }
}
console.log(printNumTwo());

const s = [5, 7, 2, 12];
let v = [];
console.log(v);


function editInPlace(value) {
    'use strict';
    // Only change code below this line

    // Using s = [2, 5, 7] would be invalid
    for (let i = value.length - 1; i >= 0; i--) {
        return v.push(i);
       console.log(value[i]);

    }
    // Only change code above this line
}
editInPlace(s);



const s = [5, 7, 2, 12];
s[0] = 78;
console.log(s);

// first try
var f =[]; 
const s = [5, 7, 2, 12];
function editInPlace(value){
for(var i = value.length - 1; i >= 0; i--){
console.log(value[i]);
f.push(value[i]);
}
};

editInPlace(s);
console.log(f);


const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
    var f = [];
    for (var i = s.length - 1; i >= 0; i--) {
        f.push(s[i]);
    }

    for(let i = 0; i < s.length; i++) {
        s[i] = f[i];
    }
}
 // Reverse ARRAY ********************************************

function reverseArray(arr) {
    let i = 0;
    let j = arr.length - 1;

    while(j > i) {
        var a = arr[i];
        var b = arr[j];
        arr[i] = b;
        arr[j] = a;
        i++;
        j--;
    }
}

const s = [1,2,3,4,5,6,7];
reverseArray(s)


//
function defaultGreet(firstName, lastName){
    if (firstName, lastName){
      console.log('Hi'+ firstName + ' ' + lastName)
    } else{
      console.log('Hi', firstName, 'Doe')
    }
  
  }
  
  defaultGreet('Stacy')

//// Mnemonic *****************************************

  function taxCalculator(num , state){
    if (state == 'NY'){
      return num + (num * 0.04);
    }else if( state == 'NJ'){
      return num + (num * 0.0625);
    }
  }
  console.log(taxCalculator(100,'NJ'))


myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH


//myMnemonic('We', 'Eat', 'Eggs'); // => WEE
// Animals.

function myMnemonic(str0, str1, str2, str3) {
    if (str0 && str1 && str2 && str3){
        return str0[0] + str1[0] +str2[0] + str3[0];
    } else if (str0 && str1 && str2){
        return str0[0] + str1[0] +str2[0];
    }else if (str0 && str1){
        return str0[0] + str1[0];
    }
};
console.log(myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'));
myMnemonic('Must', 'Accept', 'Sugar', 'Happiness');

//*******+Check Last Character******************************************

function lastCharacter(str0, str1){
    const str0Last = str0.charAt(str0.length - 1);
    const str1Last = str1.charAt(str1.length - 1);
    if( str0Last == str1Last){
      return true;
    }else {
      return false;
    }
  };
  console.log(lastCharacter('fish', 'fish'));
//
function maxOFThree(n0, n1, n2) {
    if (n0 > n1 && n0 >n2){
      return n0;
    }else if(n1 > n0 && n1 >n2){
      return n1;
    } else{
      return n2;
    }
  }
  var x = maxOFThree(2,17,8);
  console.log(x); 
  */

  //******** Looking for PALLINDROMS *****************************

  // SOLVE USING STACK
/*

  function palindrome(word) {
    word = word.toLowerCase();
    word = word.replace(/[^a-zA-Z0-9]/g, '');

    var s = [];
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    var nWord = [];
    while (s.length > 0) {
        nWord += s.pop();
    }
    if (word == nWord) {
        return true;
    } else {
        return false;
    }

};


var x = palindrome("A man, a plan, a canal. Panama");
console.log(x);

// Second method **************************************************

function isPalindrome(word) {
  let i = 0;
  let j = word.length - 1;
  while (i < j) {
      var a = word[i];
      var b = word[j];
      word[i] = b;
      word[j] = a;
      i++;
      j--;
      
  }
  if (a == b){
      return console.log(word + ' is a pallindrom');
  }else{
      return console.log(word + ' is not a pallindrom');
  }
};


var x = 'race car';
isPalindrome(x)
*/