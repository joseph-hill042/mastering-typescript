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
//# sourceMappingURL=example.js.map