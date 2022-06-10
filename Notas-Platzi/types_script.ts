// *Types
let names: string = "nombre";
let age: number;
let adress: string | number;
let isActive: boolean;
let namesArray: string[];
let ageArray: number[];
let adressArray: string[] | number[];
let isActiveArray: boolean[];
// *Arrays
let namesArray2: Array<string>;
let ageArray2: Array<number>;
let adressArray2: Array<string | number>;
let isActiveArray2: Array<boolean>;
// *Tuples
let namesTuple: [string, string];
let ageTuple: [number, number];
let adressTuple: [string, number];
let isActiveTuple: [boolean, boolean];
// *Any
let namesAny: any;
let ageAny: any;
let adressAny: any;
let isActiveAny: any;
// *Void
let namesVoid: void;
// *Null
let namesNull: null;
// *Undefined
let namesUndefined: undefined;
// *Never
let namesNever: never;
// *Type assertions
let namesTypeAssertion: any;

// *Defining Types
interface User {
  name: string;
  age: number;
  adress?: string | number; // ? means optional
}

// *Using Types
const user: User = {
  name: "Janssen",
  age: 24,
  // adress: 'Rijksweg' // optional
};

// *clase
class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // // *Otra forma de inicializar los atributos y constructor
  //   constructor(public name: string, public age: number) {
  //   }
}

//* Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:/

const new_user: User = new UserAccount("Janssen", 24);

enum Color {
    Red=1,
    Green="2",
    Blue="azul"
}

const azul = Color.Blue;

