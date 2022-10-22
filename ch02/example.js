"use strict";
/* CONST & LET */
let index = 0;
if (index == 0) {
    let index = 2;
    console.log(`index = ${index}`);
}
console.log(`index = ${index}`);
const constValue = "this should not be changed";
/* UNION TYPES */
function printObject(obj) {
    console.log(`obj = ${obj}`);
}
printObject(1);
printObject("string value");
/* TYPE GUARDS */
function addWithTypeGuard(arg1, arg2) {
    if (typeof arg1 === "string") {
        // arg 1 is treated as a string
        console.log(`arg1 is of type string`);
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        // both are numbers
        console.log(`arg1 and arg2 are numbers`);
        return arg1 + arg2;
    }
    console.log(`default return treat both as strings`);
    return arg1.toString() + arg2.toString();
}
console.log(` "1", "2" = ${addWithTypeGuard("1", "2")}`);
console.log(`  1 ,  2  = ${addWithTypeGuard(1, 2)}`);
console.log(`  1 , "2" = ${addWithTypeGuard(1, "2")}`);
function addWithTypeAlias(arg1, arg2) {
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        // both are numbers
        console.log(`arg1 and arg2 are numbers`);
        return arg1 + arg2;
    }
    return arg1.toString() + arg2.toString();
}
console.log(` "1", "2" = ${addWithTypeAlias("1", "2")}`);
console.log(`  1 ,  2  = ${addWithTypeAlias(1, 2)}`);
console.log(`  1 , "2" = ${addWithTypeAlias(1, "2")}`);
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
})(DoorState || (DoorState = {}));
var DoorStateString;
(function (DoorStateString) {
    DoorStateString["Open"] = "Open";
    DoorStateString["Closed"] = "Closed";
})(DoorStateString || (DoorStateString = {}));
function checkDoorState(state) {
    console.log(`enum value is : ${state}`);
    switch (state) {
        case DoorStateString.Open:
        case DoorState.Open:
            console.log(`Door is open`);
            break;
        case DoorStateString.Closed:
        case DoorState.Closed:
            console.log(`Door is closed`);
            break;
    }
}
checkDoorState(DoorStateString.Open);
checkDoorState(DoorStateString.Closed);
checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);
console.log(`const Open = ${10 /* DoorStateConst.Open */}`);
console.log(`const Closed = ${20 /* DoorStateConst.Closed */}`);
/* UNDEFINED */
let array = ["123", "456", "789"];
delete array[0];
for (let i = 0; i < array.length; i++) {
    console.log(`array[${i}] = ${array[i]}`);
}
for (let i = 0; i < array.length; i++) {
    checkAndPrintElement(array[i]);
}
function checkAndPrintElement(arrElement) {
    if (arrElement === undefined)
        console.log(`invalid array element`);
    else
        console.log(`valid array element : ${arrElement}`);
}
/* NULL */
function printValues(a) {
    console.log(`a = ${a}`);
}
printValues(1);
printValues(null);
/* CONDITIONALS */
/* TERNARY */
const value = 10;
const message = value > 10 ? "value is larger than 10" : "value is 10 or less";
console.log(message);
/* OPTIONAL CHAINING */
var objectA = {
    nestedProperty: {
        name: "nestedPropertyName",
    },
};
function printNestedOptionalChain(obj) {
    var _a;
    if ((_a = obj === null || obj === void 0 ? void 0 : obj.nestedProperty) === null || _a === void 0 ? void 0 : _a.name) {
        console.log(`name = ${obj.nestedProperty.name}`);
    }
    else {
        console.log(`name not found or undefined`);
    }
}
printNestedOptionalChain(undefined);
printNestedOptionalChain({
    aProperty: "another property",
});
printNestedOptionalChain({
    nestedProperty: {
        name: null,
    },
});
printNestedOptionalChain({
    nestedProperty: {
        name: "nestedPropertyName",
    },
});
/* NULLISH COALESCING */
function nullishCheck(a) {
    console.log(`a : ${a !== null && a !== void 0 ? a : `undefined or null`}`);
}
nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);
/* NULL OR UNDEFINED OPERANDS */
function testNullOperands(a, b) {
    return a + (b !== null && b !== void 0 ? b : 0);
}
console.log(testNullOperands(5));
console.log(testNullOperands(5, 2));
/* DEFINITE ASSIGNMENT */
var globalString;
setGlobalString("this string is set");
console.log(`globalString = ${globalString}`);
function setGlobalString(value) {
    globalString = value;
}
let x;
initialize();
// No error!
console.log(x + x);
function initialize() {
    x = 10;
}
/* OBJECT */
let structuredObject = {
    name: "myObject",
    properties: {
        id: 1,
        type: "AnObject",
    },
};
function printObjectType(a) {
    console.log(`a: ${JSON.stringify(a)}`);
}
printObjectType(structuredObject);
/* UNKNOWN */
let a = "test";
let aNumber = 2;
aNumber = a;
let u = "an unknown";
u = 1;
let aNumber2;
aNumber2 = u;
/* NEVER */
function fail(msg) {
    throw new Error(msg);
}
function fn(x) {
    if (typeof x === "string") {
        // do something
    }
    else if (typeof x === "number") {
        // do something else
    }
    else {
        x; // has type 'never'!
    }
}
/* OBJECT SPREAD */
let firstObj = { id: 1, name: "firstObj" };
let secondObj = Object.assign({}, firstObj);
console.log(`secondObj : ${JSON.stringify(secondObj)}`);
let nameObj = { name: "nameObj name" };
let idObj = { id: 1 };
let obj3 = Object.assign(Object.assign({}, nameObj), idObj);
console.log(`obj3 = ${JSON.stringify(obj3)}`);
let objPrec1 = { id: 1, name: "obj1 name" };
let objPrec2 = { id: 1001, desc: "obj2 description" };
let objPrec3 = Object.assign(Object.assign({}, objPrec1), objPrec2);
console.log(`objPrec3 : ${JSON.stringify(objPrec3, null, 4)}`);
let firstArray = [1, 2, 3];
let secondArray = [3, 4, 5];
let thirdArray = [...firstArray, ...secondArray];
console.log(`third array = ${thirdArray}`);
let objArray1 = [
    { id: 1, name: "first element" },
];
let objArray2 = [
    { id: 2, name: "second element" }
];
let objArray3 = [
    ...objArray1,
    { id: 3, name: "third element" },
    ...objArray2
];
console.log(`objArray3 = ${JSON.stringify(objArray3, null, 4)}`);
/* TUPLES */
let tuple1;
tuple1 = ["test", true];
/* TUPLE DESTRUCTURING */
console.log(`tuple1[0] : ${tuple1[0]}`);
console.log(`tuple1[1] : ${tuple1[1]}`);
let [tupleString, tupleBoolean] = tuple1;
console.log(`tupleString = ${tupleString}`);
console.log(`tupleBoolean = ${tupleBoolean}`);
/* OPTIONAL TUPLE ELEMENTS */
let tupleOptional;
tupleOptional = ["test", true];
tupleOptional = ["test"];
console.log(`tupleOptional[0] : ${tupleOptional[0]}`);
console.log(`tupleOptional[1] : ${tupleOptional[1]}`);
/* TUPLE & SPREAD SYNTAX */
let tupleRest;
tupleRest = [1];
tupleRest = [1, "string1"];
tupleRest = [1, "string1", "string2"];
console.log(`tuplerest = ${tupleRest}`);
//# sourceMappingURL=example.js.map