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
//# sourceMappingURL=example.js.map