// *Types
var names = "nombre";
var age;
var adress;
var isActive;
var namesArray;
var ageArray;
var adressArray;
var isActiveArray;
// *Arrays
var namesArray2;
var ageArray2;
var adressArray2;
var isActiveArray2;
// *Tuples
var namesTuple;
var ageTuple;
var adressTuple;
var isActiveTuple;
// *Any
var namesAny;
var ageAny;
var adressAny;
var isActiveAny;
// *Void
var namesVoid;
// *Null
var namesNull;
// *Undefined
var namesUndefined;
// *Never
var namesNever;
// *Type assertions
var namesTypeAssertion;
// *Using Types
var user = {
    name: "Janssen",
    age: 24
};
// *clase
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    return UserAccount;
}());
//* Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:/
var new_user = new UserAccount("Janssen", 24);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color["Green"] = "2";
    Color["Blue"] = "azul";
})(Color || (Color = {}));
var azul = Color.Blue;
