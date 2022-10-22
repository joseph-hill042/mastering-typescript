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

let optionalId: IOptional = {
  id: 1,
};
let optionalIdName: IOptional = {
  id: 2,
  name: "optional name",
};

/* WEAK TYPES */
interface IWeakType {
  id?: number;
  name?: string;
}
let weakTypeNoOverlap: IWeakType = {};

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
getProperty("telephone", { id: 3, name: "thirdName" });
