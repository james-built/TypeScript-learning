var a = 5;
var b = 5;
var c = a + b;
console.log(c);
// Data types
// any type
// assigning a variable an 'any' type is equivalent to opting out of type checking
var variable = 'string variable';
// Built-in types
// includes: number, string, boolean, void, null & undefined
var num = 1;
var firstName = 'James';
var truth = true;
// User-defined types
// includes: enum, class, interface, array & tuple
// Arrays
/* In TS are defined as a vector, an array containing only elements of a specified type, e.g. an array of strings:*/
var names = ['goku', 'vegeta', 'gohan'];
// enum, a way to store built in variables
var Bikes;
(function (Bikes) {
    Bikes[Bikes["Honda"] = 0] = "Honda";
    Bikes[Bikes["KTM"] = 1] = "KTM";
    Bikes[Bikes["Yamaha"] = 2] = "Yamaha";
    Bikes[Bikes["Triumph"] = 3] = "Triumph";
})(Bikes || (Bikes = {}));
var daytona = Bikes.Triumph;
// void, equal to no type, normally used for a function
// Functions
// can define the return type of a function
function add() {
    return 1 + 5;
}
function printColour(sky) {
    console.log(sky.colour);
}
printColour({ colour: "blue" });
printColour({ colour: "black", night: true }); // uses the optional property from the interface
