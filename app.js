"use strict";
function greet(person) {
    console.log("hello" + person.firstname);
}
function changename(person) {
    person.firstname = "anna";
}
var person = {
    firstname: "max",
    hobbies: ["cooking", "riding"],
    greet: function (lastname) {
        console.log("hi,i am" + this.firstname + "" + lastname);
    }
};
//greet({firstname:"shubham",age:21});
changename(person);
greet(person);
person.greet("anything");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastname) {
        console.log("hi,i am" + this.firstname + "" + lastname);
    };
    ;
    return Person;
}());
var myperson = new Person();
myperson.firstname = "Maximilian";
myperson.lastname = "anything";
greet(myperson);
myperson.greet(myperson.lastname);
var myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 21,
    firstname: "max",
    greet: function (lastname) {
        console.log("hello!");
    }
};
console.log(oldPerson);
