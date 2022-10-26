"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ClassES6Private_id;
const user = {
    id: 1,
    name: "Joseph",
};
console.log(`user = ${JSON.stringify(user, null, 4)}`);
let optionalId = {
    id: 1,
};
let optionalIdName = {
    id: 2,
    name: "optional name",
};
let weakTypeNoOverlap = {};
/* 'IN' OPERATOR */
function printNameOrValue(obj) {
    if ("id" in obj) {
        console.log(`obj.name : ${obj.name}`);
    }
    if ("descr" in obj) {
        console.log(`obj.value : ${obj.value}`);
    }
}
printNameOrValue({
    id: 1,
    name: "nameValue",
});
printNameOrValue({
    descr: "description",
    value: 2,
});
function getProperty(key, value) {
    console.log(`${key} = ${value[key]}`);
}
getProperty("id", { id: 1, name: "firstName" });
getProperty("name", { id: 2, name: "secondName" });
//getProperty("telephone", { id: 3, name: "thirdName" });
/* CLASSES */
class SimpleClass {
    print() {
        console.log(`SimpleClass.print() called.`);
    }
}
let mySimpleClass = new SimpleClass();
mySimpleClass.print();
/* 'THIS' KEYWORD */
class SimpleClass2 {
    print() {
        console.log(`SimpleClass2.id = ${this.id}`);
    }
}
let mySimpleClass2 = new SimpleClass2();
mySimpleClass2.id = 2020;
mySimpleClass2.print();
/* IMPLEMENTING INTERFACES */
class ClassA {
    print() {
        console.log(`ClassA.print() called.`);
    }
}
class ClassB {
    print() {
        console.log(`ClassB.print() called.`);
    }
}
function printClass(a) {
    a.print();
}
let classA = new ClassA();
let classB = new ClassB();
printClass(classA);
printClass(classB);
class ClassC {
    print() {
        console.log(`ClassC.print() called.`);
    }
}
let classC = new ClassC();
printClass(classC);
/* CLASS CONSTRUCTORS */
class ClassWithConstructor {
    constructor(id) {
        this.id = id;
    }
}
let classWithConstructor = new ClassWithConstructor(10);
console.log(`classWithConstructor = ${JSON.stringify(classWithConstructor)}`);
/* CLASS MODIFIERS */
class ClassWithPublicProperty {
}
let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;
class ClassWithPrivateProperty {
    constructor(id) {
        this.id = id;
    }
}
let privateAccess = new ClassWithPrivateProperty(20);
console.log(JSON.stringify(publicAccess));
console.log(JSON.stringify(privateAccess));
/* JS PRIVATE FIELDS */
class ClassES6Private {
    constructor(id) {
        _ClassES6Private_id.set(this, void 0);
        __classPrivateFieldSet(this, _ClassES6Private_id, id, "f");
    }
    print() {
        console.log(`es6 private class = ${__classPrivateFieldGet(this, _ClassES6Private_id, "f")}`);
    }
}
_ClassES6Private_id = new WeakMap();
let es6PrivateClass = new ClassES6Private(10);
console.log(`es6 private class = ${JSON.stringify(es6PrivateClass)}`);
es6PrivateClass.print();
/* CONSTRUCTOR PARAMETER PROPERTIES */
class ClassWithCtorMods {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let myClassMod = new ClassWithCtorMods(1, "test");
console.log(`myClassMod.id = ${myClassMod.id}`);
console.log(`myClassMod.name = ${myClassMod.name}`);
//# sourceMappingURL=example.js.map