/* INTERFACES */
interface IdName {
  id: number;
  name: string;
}

interface DescrValue {
  descr: string;
  value: number;
}

const user: IdName = {
  id: 1,
  name: "Joseph",
};

console.log(`user = ${JSON.stringify(user, null, 4)}`);

/* OPTIONAL PROPERTIES */
interface IOptional {
  id: number;
  name?: string;
}

const optionalId: IOptional = {
  id: 1,
};
const optionalIdName: IOptional = {
  id: 2,
  name: "optional name",
};
console.log(JSON.stringify(optionalId));
console.log(JSON.stringify(optionalIdName));

/* WEAK TYPES */
interface IWeakType {
  id?: number;
  name?: string;
}
const weakTypeNoOverlap: IWeakType = {};
console.log(JSON.stringify(weakTypeNoOverlap));

/* 'IN' OPERATOR */
function printNameOrValue(obj: IdName | DescrValue): void {
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

/* 'KEYOF' KEYWORD */
interface Person {
  id: number;
  name: string;
}
type PersonPropertyName = keyof Person;

function getProperty(key: PersonPropertyName, value: Person) {
  console.log(`${key} = ${value[key]}`);
}
getProperty("id", { id: 1, name: "firstName" });
getProperty("name", { id: 2, name: "secondName" });
//getProperty("telephone", { id: 3, name: "thirdName" });

/* CLASSES */
class SimpleClass {
  id?: number;
  print(): void {
    console.log(`SimpleClass.print() called.`);
  }
}
const mySimpleClass = new SimpleClass();
mySimpleClass.print();

/* 'THIS' KEYWORD */
class SimpleClass2 {
  id?: number;
  print(): void {
    console.log(`SimpleClass2.id = ${this.id}`);
  }
}
const mySimpleClass2 = new SimpleClass2();
mySimpleClass2.id = 2020;
mySimpleClass2.print();

/* IMPLEMENTING INTERFACES */
class ClassA implements Print {
  print(): void {
    console.log(`ClassA.print() called.`);
  }
}
class ClassB implements Print {
  print(): void {
    console.log(`ClassB.print() called.`);
  }
}

interface Print {
  print(): void;
}
function printClass(a: Print) {
  a.print();
}

const classA = new ClassA();
const classB = new ClassB();
printClass(classA);
printClass(classB);

class ClassC {
  print(): void {
    console.log(`ClassC.print() called.`);
  }
}
const classC = new ClassC();
printClass(classC);

/* CLASS CONSTRUCTORS */
class ClassWithConstructor {
  id: number;
  constructor(id: number) {
    this.id = id;
  }
}

const classWithConstructor = new ClassWithConstructor(10);
console.log(`classWithConstructor = ${JSON.stringify(classWithConstructor)}`);

/* CLASS MODIFIERS */
class ClassWithPublicProperty {
  public id?: number;
}
const publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;

class ClassWithPrivateProperty {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }
}
const privateAccess = new ClassWithPrivateProperty(20);

console.log(JSON.stringify(publicAccess));
console.log(JSON.stringify(privateAccess));

/* JS PRIVATE FIELDS */
class ClassES6Private {
  #id: number;
  constructor(id: number) {
    this.#id = id;
  }
  print() {
    console.log(`es6 private class = ${this.#id}`);
  }
}
const es6PrivateClass = new ClassES6Private(10);
console.log(`es6 private class = ${JSON.stringify(es6PrivateClass)}`);
es6PrivateClass.print();

/* CONSTRUCTOR PARAMETER PROPERTIES */
class ClassWithCtorMods {
  constructor(public id: number, private name: string) {}
}
const myClassMod = new ClassWithCtorMods(1, "test");
console.log(`myClassMod.id = ${myClassMod.id}`);
// console.log(`myClassMod.name = ${myClassMod.name}`);

/* READONLY */
class ClassWithReadonly {
  readonly name: string;
  constructor(_name: string) {
    this.name = _name;
  }
}
const readOnly = new ClassWithReadonly("I am readonly!");
console.log(readOnly.name);

/* GET & SET */
class ClassWithAccessors {
  private _id = 0;
  get id(): number {
    console.log(`get id property`);
    return this._id;
  }
  set id(value: number) {
    console.log(`set id property`);
    this._id = value;
  }
}

const classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 10;
console.log(`classWithAccessors.id = ${classWithAccessors.id}`);
