/*console.log("Hello World!");
console.log("Hello");

var firstName = 'John';
var lastName ='Smith';
var age ='56';

var fullAge = true;

console.log(firstName);
console.log(fullAge);


// Variable mutation and type coercion
var firstName ='John';
var age ='45';
console.log(firstName + ' ' + age);

//Basic operators

var yearJohn= 2018;
ageJohn = 28;
ageMark = 33;

console.log(yearJohn - age);
console.log(yearJohn + 2);
console.log(yearJohn / 2);
console.log(yearJohn * 2);

var johnOlder = ageJohn> ageMark;
console.log(johnOlder);

console.log(typeof johnOlder);


//Multiple asignments

var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y );

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x
 );
 x++;
 console.log(x);
 x--;
 console.log(x);



var massJohn, heightJohn, bmiJohn;
massJohn = 100;
heightJohn = 1.5;
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

var bmiMark, massMark, heightMark;
massMark = 90;
heightMark = 1.7;
bmiMark = massMark / (heightMark * heightMark);

console.log(bmiMark);

if (bmiMark > bmiJohn) {
 console.log('Mark\s BMI is higher than John\s');
} else {
 console.log('John\s BMI is higher than Mark\s');
}

// If / else statment

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
 console.log(firstName + 'is married');
} else {
 console.log(firstName + ' will hopefully marry soon =)');
}

//Boolean Logic

var firstName = 'John';
age = '46';

if (age <= 13) {
 console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
 console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
 console.log(firstName + ' is a young man');
} else {
 console.log(firstName + ' is a man.');
}

// The Ternary Operator

var firstName = 'Stacy';
var age = 15;

age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


// Switch Statement
var job = 'designer';
switch (job) {
 case 'teacher':
 case 'instructor':
  console.log(firstName + ' teaches kids how to code');
  break;
 case 'designer':
  console.log(firstName + ' designs beautiful websites');
  break;
 default:
  console.log(firstName + ' does something else');
}
 

// Truthy and Falsy values and equality operators
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 0;

if (height || height === 0) {
 console.log('Variable is defined');
} else {
 console.log('Variable has NOT been defined');
}
*/

//Equality Operartor

/**********************
 * CODING CHALENGE 2

var avScoreJohn = (89 + 120 + 103) / 3;
var avScoreMike = (116 + 94 + 123) / 3;

if (avScoreJohn > avScoreMike) {
 console.log('John\'s team wins with the score ' + avScoreJohn + ' compare to Mike\'s team with the score ' + avScoreMike);
} else if (avScoreMike > avScoreJohn) {
 console.log('Mike\'s team wins with the score ' + avScoreMike + ' compare to John\'s team with the score ' + avScoreJohn);
} else {
 console.log('Players has the same score');
}


var avScoreMary = (97 + 134 + 105) / 3;
console.log(avScoreJohn, avScoreMike, avScoreMary);

if (avScoreMary == avScoreMike || avScoreMary == avScoreJohn || avScoreJohn == avScoreMike) {
 console.log('Players have a draw');
} else if (avScoreJohn < avScoreMary && avScoreMary > avScoreJohn) {
 console.log('Mary won with the score of ' + avScoreMary);
} else if (avScoreJohn < avScoreMike && avScoreMike > avScoreMary) {
 console.log('Mike won with the score of' + avScoreMike);
} else if (avScoreMary < avScoreJohn && avScoreJohn > avScoreMike) {
 console.log('John won with the score of ' + avScoreJohn);
}



// FUNCTIONS DECLARATION
function calculateAge(birthYear) {
 return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
console.log(ageJohn);


function yearsUntilRetirement(year, firstName) {
 var age = calculateAge(year);
 var retirment = 65 - age;
 if (retirment > 0) {
  console.log(firstName + ' retires in ' + retirment + ' years.');
 } else {
  console.log(firstName + ' is already retired');
 }

}

yearsUntilRetirement(1994, 'Stacy');
yearsUntilRetirement(1952, 'Luba');
yearsUntilRetirement(1971, 'Andrej');


// Function Expression ->> Different Way

var whatDoYouDo = function (job, firstName) {
 switch (job) {
  case 'teacher':
   return firstName + 'teaches kids hoe to code';
  case 'driver':
   return firstName + ' drives a cab.'
  case 'designer':
   return firstName + ' designs websites';
  default:
   return firstName + 'does something else';
 }
}
console.log(whatDoYouDo('designer', 'Stacy'));


// ARRAYS

var john = ['John', 'Smith', 1994, 'designer', false];
john.push('blue');
john.unshift('Mr.')

console.log(john);

john.pop();
john.shift();
console.log(john.indexOf(1994));
console.log(john.indexOf(19));

console.log(john);
//Methods


var isDesigner = john.indexOf|('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);


// ***********CODING CHALLENGE

var tipAmount = function(check){
  if (check <= 50){
    return check * 0.2;
  } else if ( check > 50 && check <= 200){
    return check * 0.15;
  } else if ( check > 200){
    return check * 0.1;
  }
}
var bills = [12, 28, 28];
var totalBills = (bills[0] + bills[1] + bills[2]);
var allTips = tipAmount(bills[0], bills[1], bills[2]);
var totalTips = tipAmount(bills[0] + bills[1] + bills[2]);
var checkPlusTip = (totalBills + totalTips);

console.log(checkPlusTip);

console.log('The bills are ' + totalBills + ' dollars, and tips are ' + totalTips +' dollars. The total amount is ' + checkPlusTip + ' dollars');

console.log('The tip for ' + (bills[0]) + ' is ' + tipAmount(bills[0]));
console.log('The tip for ' + (bills[1]) + ' is ' + tipAmount(bills[1]));
console.log('The tip for ' + (bills[2]) + ' is ' + tipAmount(bills[2]));


// OBJECTS AND PROPERTIES

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  fsmily: ['Jane', 'Mark', 'Emily'],
  job: 'teacher',
  isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);


john.job = 'designer';
john.isMarried = true;

console.log(john);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1994;
jane.isMarried = true;

console.log(jane);


// OBJECTS AND METHODS

var john1 = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1994,
  family: ['Jane', 'Mark', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function () {
    this.age = 2020 - this.birthYear;
  }
};
console.log(john1);


// CODING CHALENGE 3

var john = {
  fullName: 'John Smith',
  mass: 100,
  height: 1.5,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi;
  }
};

var mark = {
  fullName: 'Mark Smith',
  mass: 90,
  height: 1.7,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi;
  }
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log('John\'s BMI is ' + john.bmi + 'and it\'s higher than Mark\'s ' + mark.bmi);
} else if (mark.bmi > john.bmi) {
  console.log('Mark\'s BMI is ' + john.bmi + 'and it\'s higher than John\'s ' + john.bmi);
} else {
  console.log('Students have the same BMI');
}



// LOOPS & ITERATIONS

for (var i = 0; i < 10; i++) {
  console.log(i);
}

// For Loop
var john = [1, 5, 8, 9, 46, 66];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// While Loop
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}

// Continue and Break Statements
var john = [1, 5, 8, 'John', 9, 46, 66];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'number') continue;
  console.log(john[i]);
}

var john = [1, 5, 8, 'John', 9, 46, 66];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'number') break;
  console.log(john[i]);
}
// LOOPING BACKWARDS
var john = [1, 5, 8, 'John', 9, 46, 66];
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}

// LAST CHALLENGE****************************
var bills = [124, 48, 268, 180, 42];

var calcTip = function (bills) {
  if (bills < 50) {
    return bills * 0.2
  }
  else if (bills >= 50 && bills <= 200) {
    return bills * 0.15
  }
  else if (bills > 200) {
    return bills * 0.1
  }
};

for (var i = 0; i < bills.length; i++) {
  console.log(calcTip(bills[i]));
};

console.log('Next');
var sum = 0;
// calculate average bills
for (var i = 0; i < bills.length; i++) {
  sum += bills[i];
}
console.log(sum / bills.length);
// Calculate average tip
console.log('next');
var sumTips = 0;
for (var i = 0; i < bills.length; i++) {
  sumTips += calcTip(bills[i]);
}
console.log(sumTips / bills.length);
*/

// Differen solution*************
var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      //determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = .2;
      } else if (bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = 0.1
      }
      // add results to the corresponding array
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
}
function caclAverage(tips){
  var sum = 0;
  for (var i = 0; i < tips.length; i++){
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

john.calcTips();
console.log(john);
john.average = caclAverage(john.tips);