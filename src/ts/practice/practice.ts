const show: Function =
  /* Determines that it is a function type */
  (
    a: number,
    b: number,
    c?: /* Determines it is an optional parameter */ number,
    d = 10
  ): void /* Determines the return type of the function */ => {
    console.log("Sum is : ", a + b);
  };

show(10, 15);

// Type aliasing

type NumOrString = number | string;
type objNameUuid = { name: string; uid: NumOrString };

let value: NumOrString = "Raheel";
console.log(value);

value = 21;
console.log(value);

let userObject: objNameUuid = {
  name: "Raheel",
  uid: "1234raheel5678",
};

console.log(userObject);

// Function signature

let sum: (
  a: number,
  b: number
) => number /* Part describing the function signature */ = (num1, num2) => {
  return num1 + num2;
};

// You can also write like this

let sumAnother: (a: number, b: number) => number;
sumAnother = (num1, num2) => num1 + num2;

// Method with aliasing

type functionSignature = (a: number, b: number) => number;

let sub: functionSignature = (num1, num2) => num1 - num2;

type paramsAlias = { name: string; age: number };
type greetingsAlias = (obj: paramsAlias) => string;

let greetings: greetingsAlias = (params: paramsAlias) =>
  `${params.name}'s age is ${params.age}`;

console.log(greetings({ name: "Raheel", age: 22 }));

// Interacting with DOM

const anchor = document.querySelector("a")!;
console.log(anchor.href);

// Interfaces

interface InUser {
  fname: string;
  age: number;
  displayUser: () => string;
  //   displayUser(): string;
}

let user: InUser = {
  fname: "Raheel",
  age: 21,
  displayUser: function () {
    return `${this.fname}'s age is ${this.age}`;
  },
};

console.log(user.fname);
console.log(user.age);
console.log(user.displayUser());

// Generics

// Auto detects the type or provides a type created by user

let uuidGenerator = <Type extends { name: string }>(obj: Type) => {
  return { ...obj, uuid: Math.floor(Math.random() * 11) };
};

let uuidGenerator2 = <Type>(obj: Type) => {
  return { ...obj, uuid: Math.floor(Math.random() * 11) };
};

const uuid = uuidGenerator({ name: "Raheel", age: 21 });

console.log(uuid.name);

// Enums
// Stores set of constants associated with numeric values

enum hobbiesEnum {
  BookReading,
  Drawing,
  Coding,
  Calligraphy,
}

console.log(hobbiesEnum);

// Tuples

// "Tuples are like arrays but with every position of specified type"

const arrTuple: [string, number, boolean] = ["Raheel", 21, true];

console.log(arrTuple);
