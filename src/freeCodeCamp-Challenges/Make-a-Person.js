/*Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take 
an argument must accept only one argument and it has to be a string. These 
methods must be the only available means of interacting with the object.*/

var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    let name = firstAndLast.split(" ");
    let firstName = name[0];
    let lastName = name[1];

    this.setFirstName = (fname) => { firstName = fname };
    this.getFirstName = () => { return firstName };

    this.setLastName = (lname) => { lastName = lname };
    this.getLastName = () => { return lastName };

    this.setFullName = (string) => {
        firstName = string.split(" ")[0];
        lastName = string.split(" ")[1];
    }

    this.getFullName = function () {
        return firstName + " " + lastName;
    };
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();


let salaries = {
    'John': 100,
    'Pete': 300,
    'Mary': 250
}
