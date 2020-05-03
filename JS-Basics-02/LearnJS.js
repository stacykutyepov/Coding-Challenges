/*//HOISTING FUNCTIONS
//function declaration
calcAge(1994);
function calcAge(year) {
 console.log(2020 - year);
}

//function expression
var retirement = function (year) {
 console.log(65 - (2020 - year));
}
retirement(1994);

// VARIABLES
// console.log(age);  doesn't work, beacause UNDEFINED
var age = 23;
console.log(age);


function foo() {
 var age = 65;
 console.log(agejohn);
}


// First Scoping Examole - LEXICAL SCOPING
var a = 'Hello';
first();

function first() {
 var b = 'Hi!';
 second();

 function second() {
  var c = 'Hey!';
  console.log(a + b + c);
 }
}

// example to show the difference between execution stack and scope chain
var a = 'Hello';
first();

function first() {
 var b = 'Hi!';
 second();

 function second() {
  var c = 'Hey!';
  console.log(a + b + c);
  third()
 }
}

function third(){
 var d = 'John';
 console.log(a + d);
}
 


*/


//console.log(this);

calcAge(1994);

function calcAge(year){
 console.log(2020-year);
 console.log(this);
}


var john = {
 name: 'John',
 yearOfBirth: 1990,
 calcAge: function(){
  console.log(this);
  console.log(2020- this.yearOfBirth);
/*
  function innerFunction(){
   console.log(this);
  }
  innerFunction();*/
 }
}
john.calcAge();

// Method borrowing

var mike ={
 name: 'Mike',
 yearOfBirth: 1994
};

mike.calcAge = john.calcAge;
mike.calcAge();


// DOM Manipulations