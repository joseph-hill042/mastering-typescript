"use strict";
console.log(`hello TypeScript`);
var version = `es6`;
console.log(`hello ${version} TypeScript!!!`);
var myString = `this is a string`;
var myBoolean = true;
var myNumber = 1234;
var myStringArray = [`first`, `second`, `third`];
myBoolean = myNumber === 456;
myStringArray = [myNumber.toString(), `5678`];
myNumber = myStringArray.length;
console.log(`myBoolean = ${myBoolean}`);
console.log(`myStringArray = ${myStringArray}`);
console.log(`myNumber = ${myNumber}`);
var inferredString = "this is a string";
var inferredNumber = 1;
var nameIdObject = { name: "myName", id: 1, print() { } };
nameIdObject = { id: 2, name: "anotherName", print() { } };
//nameIdObject = { id: 3, name: "thirdName" };
var obj1 = { id: 1, print() { } };
var obj2 = { id: 2, print() { }, select() { } };
obj1 = obj2;
//obj2 = obj1;
function calculate(a, b, c) {
    return a * b + c;
}
console.log(`calculate() = ${calculate(3, 2, 1)}`);
