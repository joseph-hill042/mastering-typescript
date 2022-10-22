/* CONST & LET */
let index: number = 0;
if (index == 0) {
  let index: number = 2;
  console.log(`index = ${index}`);
}
console.log(`index = ${index}`);

const constValue = "this should not be changed";

/* UNION TYPES */
function printObject(obj: string | number) {
  console.log(`obj = ${obj}`);
}
printObject(1);
printObject("string value");

/* TYPE GUARDS */
function addWithTypeGuard(arg1: string | number, arg2: string | number) {
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

/* TYPE ALIASES */
type StringOrNumber = string | number;
function addWithTypeAlias(arg1: StringOrNumber, arg2: StringOrNumber) {
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

/* ENUMS */
const enum DoorStateConst {
  Open = 10,
  Closed = 20,
}

enum DoorState {
  Open,
  Closed,
}
enum DoorStateString {
  Open = "Open",
  Closed = "Closed",
}

function checkDoorState(state: DoorStateString | DoorState) {
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
console.log(`const Open = ${DoorStateConst.Open}`);
console.log(`const Closed = ${DoorStateConst.Closed}`);

/* UNDEFINED */
let array = ["123", "456", "789"];
delete array[0];
for (let i = 0; i < array.length; i++) {
  console.log(`array[${i}] = ${array[i]}`);
}

for (let i = 0; i < array.length; i++) {
  checkAndPrintElement(array[i]);
}
function checkAndPrintElement(arrElement: string | undefined) {
  if (arrElement === undefined) console.log(`invalid array element`);
  else console.log(`valid array element : ${arrElement}`);
}

/* NULL */
function printValues(a: number | null) {
  console.log(`a = ${a}`);
}
printValues(1);
printValues(null);
