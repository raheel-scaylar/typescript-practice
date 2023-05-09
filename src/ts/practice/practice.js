"use strict";
const show = 
/* Determines that it is a function type */
(a, b, c, d = 10) => {
    console.log("Sum is : ", a + b);
};
show(10, 15);
let value = "Raheel";
console.log(value);
value = 21;
console.log(value);
let userObject = {
    name: "Raheel",
    uid: "1234raheel5678",
};
console.log(userObject);
// Function signature
let sum /* Part describing the function signature */ = (num1, num2) => {
    return num1 + num2;
};
// You can also write like this
let sumAnother;
sumAnother = (num1, num2) => num1 + num2;
let sub = (num1, num2) => num1 - num2;
let greetings = (params) => `${params.name}'s age is ${params.age}`;
console.log(greetings({ name: "Raheel", age: 22 }));
// Interacting with DOM
const anchor = document.querySelector("a");
console.log(anchor.href);
let user = {
    fname: "Raheel",
    age: 21,
    displayUser: function () {
        return `${this.fname}'s age is ${this.age}`;
    },
};
console.log(user.fname);
console.log(user.age);
console.log(user.displayUser());
